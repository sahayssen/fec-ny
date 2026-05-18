<!-- Top-ten comparison page -->
<script>
import { base } from '$app/paths';
import indvData from '$lib/data/FECindvcongress.json';
import topTenData from '$lib/data/FECtoptencongress.json';

const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

function normalizeList(arr) {
	return (arr || [])
		.map((r) => ({ name: r.committee_name || r.committee || '', amount: parseFloat(r.contribution_receipt_amount || r.amount || 0) || 0 }))
		.sort((a, b) => b.amount - a.amount)
		.slice(0, 10);
}

const indivTop10 = normalizeList(indvData);
const toptenTop10 = normalizeList(topTenData);
</script>
<div class="container">
	<h2>Top 10 Committees — Individual vs TopTen datasets</h2>
	<table>
		<thead>
			<tr>
				<th>Rank</th>
				<th>Other Individuals</th>
				<th>Top Ten</th>
			</tr>
		</thead>
		<tbody>
			{#each Array(10) as _, i}
				<tr>
					<td>{i + 1}</td>
					<td>{indivTop10[i] ? indivTop10[i].name : ''}</td>
					<td>{toptenTop10[i] ? toptenTop10[i].name : ''}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<style>
	table { width: 100%; border-collapse: collapse; margin-top: 1rem;  background: #f5f5f5; }
	th, td { padding: 0.5rem; border: 1px solid #ddd; text-align: left; }
	th { background: #f5f5f5; }
</style>