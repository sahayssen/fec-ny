<script>
import RankingList from '$lib/components/Data/RankingList.svelte';
import { base } from '$app/paths';

let { data } = $props();

  const orgs = data.orgs || [];
  const contributorName = data.contributorName || '';
  const orgRows = orgs.filter((item) => item.contributor_name === contributorName);
  const org = orgRows[0];

  const addressLine = [
    org?.contributor_street_1 || '',
    org?.contributor_street_2 || '',
    org?.contributor_city || '',
    org?.contributor_state || '',
  ]
    .filter(Boolean)
    .join(' ');

  const totalDonated = orgRows.reduce(
    (sum, row) => sum + (parseFloat(row.contribution_receipt_amount) || 0),
    0
  );
  const donationCount = orgRows.length;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(amount);

  const itemsPerPage = 10;
  let currentPage = $state(1);
  
  const totalPages = $derived(Math.ceil(orgRows.length / itemsPerPage));
  const paginatedRows = $derived(
    orgRows.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  };

</script>

<div class="container">
<button>
  <span> 
  <a class="a.back" href={`${base}/`}>
  Back to home
  </a>
  </span>
</button>
<br/>
<br/>

  <h1>{org?.contributor_name ?? contributorName}</h1>
  <h4><strong>Address:</strong> {addressLine || 'Address unavailable'}</h4>
  <h4><strong>Total donated:</strong> {formatCurrency(totalDonated)}</h4>
  <h4><strong>Number of donations:</strong> {donationCount}</h4>
<RankingList>
<table>
  <thead>
    <tr>
      <th>Recipient</th>
      <th> Type </th> 
      <th>Amount</th>
      <th> Date</th>
    </tr>
  </thead>
  
  <tbody>
    {#each paginatedRows as row}
      <tr>
        <td><a href={row.pdf_url} target="_blank" rel="noopener noreferrer">{row.committee_name}</a></td>
        <td>{row.recipient_committee_type}</td>
        <td>{formatCurrency(row.contribution_receipt_amount)}</td>
        <td>{row.load_date}</td>
      </tr>
    {/each}
  </tbody>
</table>
</RankingList>
{#if totalPages > 1}
  <div class="pagination">
    <button onclick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
      Previous
    </button>
    <span class="page-info">Page {currentPage} of {totalPages}</span>
    <button onclick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
{/if}
</div>



<style>
button {
 display: inline-block;
 width: 100px;
 height: 40px;
 border-radius: 8px;
 border: 1px solid #03045e;
 position: relative;
 overflow: hidden;
 transition: all 0.5s ease-in;
 z-index: 1;
}

button:hover span {
 color: var(--color-light-gray);
 transition: 0.3s;
}

button span {
 color: #03045e;
 font-size: 12px;
 transition: all 0.3s ease-in;
}
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
    background-color: #fff !important;
    color: var(--color-text, #111);
  }

  thead,
  tbody,
  tr,
  th,
  td {
    background-color: #fff !important;
  }

  th {
    text-align: left;
    padding: 0.5rem;
    border-bottom: 2px solid var(--color-dark-gray);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    background-color: #fff !important;
  }

  td {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    background-color: #fff !important;
  }

  tr:hover {
    background-color: #fff !important;
  }

  h4 {
    margin: 0 0 1rem;
    font-weight: 500;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  .page-info {
    font-weight: 500;
    min-width: 120px;
    text-align: center;
  }

  .pagination button {
    width: auto;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  .pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
