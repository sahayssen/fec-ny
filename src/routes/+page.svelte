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
<h2> What Elite New Yorkers Want from the 2026 Midterms</h2> 
<p> Since Zohran Mamdani took office as mayor of New York in January 2026, there's been increased focus on the wealth divide plaguing not just the city, but the state. Billionaires have wrung their hands, opining that they might have to take their business elsewhere were Mamdani's policies to come to fruition.</p> 
<p> I wanted to get a closer look at who some of these elite New Yorkers are and get a sense of their political priorities by looking at how they are shaping the upcoming midterm elections. To do this, I analyzed FEC data and honed in on the top ten most general individual and corporate/organizational contributors.  </p>
<h2> <strong> A State, Divided </strong> </h2>
<p> 
Perhaps unsurprisingly, the political preferences of elite, individual donors appears to lean more conservative than most New Yorkers. New Yorkers, not including the top ten donors,  donated mostly to Democratic campaign committees, with exception being Republican Mike Lawler’s congressional campaign. While there are some  instances of donors in the top ten giving to Democrats, the top campaign committees for elite donors were entirely Republican.  </p>
	<h2>Elite vs. The Public: Top Campaign Committees</h2>
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