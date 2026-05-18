<script>
import { base } from '$app/paths';

import RankingList from '$lib/components/Data/RankingList.svelte';
import DropdownInput from '$lib/components/Forms/DropdownInput.svelte';
import SearchInput from '$lib/components/Forms/SearchInput.svelte';

let { data } = $props();

  const peeps = data.peeps || [];
  const FullName = data.FullName|| '';
  const peepRows = peeps
    .filter((item) => item.Full_Name === FullName)
    .sort((a, b) => (parseFloat(b.contribution_receipt_amount) || 0) - (parseFloat(a.contribution_receipt_amount) || 0));
  const peep = peepRows[0];

    const totalDonated = peepRows.reduce(
    (sum, row) => sum + (parseFloat(row.contribution_receipt_amount) || 0),
    0
  );
  const donationCount = peepRows.length;

  // compute rank among all individuals by total donated
  const aggPeople = {};
  peeps.forEach((p) => {
    const name = p.Full_Name || '';
    const amt = parseFloat(p.contribution_receipt_amount) || 0;
    if (!aggPeople[name]) aggPeople[name] = { Full_Name: name, total: 0 };
    aggPeople[name].total += amt;
  });
  const rankedPeople = Object.values(aggPeople).sort((a, b) => b.total - a.total);
  const rankIndex = rankedPeople.findIndex((r) => r.Full_Name === FullName);
  const rank = rankIndex >= 0 ? rankIndex + 1 : null;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(amount);

  const itemsPerPage = 10;
  let currentPage = $state(1);
  let selectedType = $state('');
  let selectedCommittee = $state('');

  const committeeTypeOptions = [...new Set(peepRows.map((row) => row.recipient_committee_type).filter(Boolean))]
    .sort()
    .map((type) => ({ value: type, label: type }));
  
  const committeeOptions = [...new Set(peepRows.map((row) => row.committee_name).filter(Boolean))]
    .sort()
    .map((type) => ({ value: type, label: type }));

  let totalPages = $state(1);
  let paginatedRows = $state([]);

  $effect(() => {
    const normalizedCommittee = selectedCommittee.trim().toLowerCase();
    const matchedCommittees = normalizedCommittee
      ? committeeOptions
          .filter((option) => option.label.toLowerCase().includes(normalizedCommittee))
          .map((option) => option.value)
      : committeeOptions.map((option) => option.value);

    const filteredRows = peepRows.filter((row) => {
      if (selectedType && row.recipient_committee_type !== selectedType) return false;
      if (normalizedCommittee && !matchedCommittees.includes(row.committee_name || '')) {
        return false;
      }
      return true;
    });

    totalPages = Math.max(1, Math.ceil(filteredRows.length / itemsPerPage));
    if (currentPage > totalPages) currentPage = totalPages;
    paginatedRows = filteredRows.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  });

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  };

</script>
<div class="homebutton container-wide">
<button>
  <span> 
  <a class="a.back" href={`${base}/indv`}>
  Back to individuals
  </a>
  </span>
</button>
</div>
<div class="container">
  <div class="hero-row">
    <span class="star" role="img" aria-label="Donor rank">
      <span class="star-label">{rank ?? '—'}</span>
    </span>
    <div class="hero-text">
      <h1><strong>{peep?.Full_Name ?? FullName}</strong></h1>
      <br/>
      <h4> <strong>Occupation:</strong> {peep?.contributor_occupation ?? contributor_occupations}, {peep?.contributor_employer ?? contributor_employer} </h4>
      <h4> <strong>Address:</strong> {peep?.contributor_street_1 ?? contributor_street_1} {peep?.contributor_street_2 ?? contributor_street_2} {peep?.contributor_city ?? contributor_city}, {peep?.contributor_state ?? contributor_state}</h4>
      <h4><strong>Total donated:</strong> {formatCurrency(totalDonated)}</h4>
      <h4><strong>Number of donations:</strong> {donationCount}</h4>
    </div>
  </div>
  <br/>
  <br/>
  <div class="filters hero-row">
      <SearchInput
     label="Find a Committee"
     placeholder="Type a committee name"
     value={selectedCommittee}
     oninput={(e) => (selectedCommittee = e.target.value)}
    />
    <DropdownInput
      label="Committee Type"
      placeholder="All committee types…"
      options={committeeTypeOptions}
      value={selectedType}
      onchange={(e) => (selectedType = e.target.value)}
    />
  </div> 
<br/>
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
  /* From Uiverse.io by Ali-Tahmazi99 */ 
/* From uiverse.io by @Ali-Tahmazi99 */
  .star {
    width: 200px;
    aspect-ratio: 1;
    background: #ff5757;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #5170ff;
    font-weight: 700;
    font-size: 3rem;
    vertical-align: middle;
    margin-right: 0.5rem;
    transform: translateX(-0.75rem);
    /* Simple star shape via polygon clip-path */
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
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
  }

  th {
    text-align: left;
    padding: 0.5rem;
    border-bottom: 2px solid var(--color-dark-gray);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
  }

  td {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
  }

  tr:hover {
    background-color: var(--color-light-gray);
  }

  a {
    color: var(--color-accent, #003da5);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
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

  .hero-row {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-top: -3rem;
    margin-bottom: 0.5rem;
  }

  .hero-text {
    margin-top: 0.15rem;
    gap: 1rem;
    line-height: 1em;
  }

  .hero-text h1 {
    margin: 0 0 0.35rem 0;
    font-weight: 600px;
  }

  .hero-text h4 {
    margin: 0.2rem 0;
    line-height: 25px;
  }
  .homebutton {
    margin-left: 8rem;
    margin-top: 3rem;
  }

 .filters {
    font-size: 17px;
    width: 100%;
  }
  /* removed .rank-star in favor of .star CSS-only badge */
</style>
