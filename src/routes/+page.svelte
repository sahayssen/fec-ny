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
<h1><strong> What Elite New Yorkers Want from the 2026 Midterms</strong></h1> 
<p style="font-size:15px">By Sophie Hayssen | May 18, 2026 </p> 
<img src={`${base}/photos/voting.jpeg`}>
<br/>
<p> Since Zohran Mamdani took office as mayor of New York in January 2026, there's been increased focus on the wealth divide plaguing not just the city, but the state. Billionaires have wrung their hands, opining that they might have to take their business elsewhere were Mamdani's policies to come to fruition.</p> 
<p> I wanted to get a closer look at who some of these elite New Yorkers are and get a sense of their political priorities by looking at how they are shaping the upcoming midterm elections. To do this, I analyzed FEC data and honed in on the top ten most general individual and corporate/organizational contributors.  </p>
<h2> <strong> A State, Divided </strong> </h2>
<p> 
Perhaps unsurprisingly, the political preferences of elite, individual donors appears to lean more conservative than most New Yorkers. New Yorkers, not including the top ten donors,  donated mostly to Democratic campaign committees, with exception being Republican Mike Lawler’s congressional campaign. While there are some  instances of donors in the top ten giving to Democrats, the top campaign committees for elite donors were entirely Republican.  </p>
	<h3>Elite vs. The Public: Top Campaign Committees</h3>
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
<br/> 
<h2> <strong> New Industries Take Hold </strong></h2> 
<p> In this election cycle, sports betting and crypto groups have made waves with high powered PACs and deep-pocketed donors. Fanduel donated the second most of any New York based organization, giving in particular to the pro-sports betting PAC Win for America. On the crypto side, the Winklevoss twins, of Facebook fame, have also given handily to the crypto cause through First Priciples Digital PAC. Crypto bank, Anchor Labs Inc., also known as Anchorage Digital, has given over $1 million total to the crypto groups Fellowship PAC and Blockchain Leadership Fund.</p>   
<br/>
<h2><strong>AIPAC by Any Other Name</strong></h2> 
Among the powerful names in the 2026 election season is the United Democracy Project an AIPAC-affiliated group that previously <a href="https://thehill.com/homenews/campaign/5715936-aipac-tests-political-power/">organized against </a> former Representative Tom Malinowski in the New Jersey congressional race to fill the seat of newly-elected Governor Mikie Sherrill. UDP has also been involved in a <a href="https://www.politico.com/news/2026/05/17/massie-aipac-record-spending-israel-maga-trump-primary-00925375"> hotly contested Kentucky primary</a>, attempting to oust Rep. Thomas Massie. It's worth noting that while some elite NY donors donated directly to UDP, they have also donated to other Kentucky focused groups, potentially signaling further involvement in this race.  
</div>
<style>
	table { width: 100%; border-collapse: collapse; margin-top: 1rem;  background: #f5f5f5; }
	th, td { padding: 0.5rem; border: 1px solid #ddd; text-align: left; }
	th { background: #f5f5f5; }
</style>