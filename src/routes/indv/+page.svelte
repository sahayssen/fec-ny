<script>
import RankingCard from '$lib/components/Data/RankingCard.svelte';
import RankingList from '$lib/components/Data/RankingList.svelte';
import { base } from '$app/paths';
let { data } = $props();
  const peeps = data.peeps || [];
  const orgs = data.orgs || [];

  // Aggregate contribution_receipt_amount by Full_Name (individuals)
  const aggPeople = {};
  peeps.forEach((p) => {
    const name = p.Full_Name || '';
    const amt = parseFloat(p.contribution_receipt_amount) || 0;
    if (!aggPeople[name]) {
      aggPeople[name] = {
        Full_Name: name,
        total: 0,
        count: 0,
        contributor_city: p.contributor_city || '',
      };
    }
    aggPeople[name].total += amt;
    aggPeople[name].count += 1;
  });

  // Aggregate contribution_receipt_amount by contributor_name (organizations)
  const aggOrgs = {};
  orgs.forEach((o) => {
    const name = o.contributor_name || '';
    const amt = parseFloat(o.contribution_receipt_amount) || 0;
    if (!aggOrgs[name]) {
      aggOrgs[name] = {
        contributor_name: name,
        total: 0,
        count: 0,
        contributor_city: o.contributor_city || '',
      };
    }
    aggOrgs[name].total += amt;
    aggOrgs[name].count += 1;
  });

  // Convert to arrays and sort descending by total
  const ranked = Object.values(aggPeople).sort((a, b) => b.total - a.total);
  const rankedOrgs = Object.values(aggOrgs).sort((a, b) => b.total - a.total);

  const formatCurrency = (n) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(n);
</script>


 <div class="container">
 <img src={`${base}/photos/Individual.png`} alt="NYCity News Service logo">
 <br/>
 <br/>
  <RankingList title="Top Individual Donors">
    {#each ranked as item, index}
      <RankingCard
        rank={index + 1}
        title={item.Full_Name}
        description={item.contributor_city}
        value={formatCurrency(item.total)}
        valueLabel="total"
        href={`${base}/donor/${encodeURIComponent(item.Full_Name)}`}
      />
    {/each}
  </RankingList>

</div>

<style>
img {
    width: 30%;
    height: 30%;
}
</style>