<script>
import { base } from '$app/paths';
</script>
<div class="container">
<h1> <strong> Methodology </strong> </h1> 
<br/>
<h2> <strong> Finding the data: </strong> </h2>
<p> This data was pulled from the Federal Election Commission from individual contributions. Confusingly, this option contained both individual people, organizations, and other types of donors.  For the purposes of this project I focused on individuals and organizations.To keep the dataset at a manageable size, it was limited to donations $75 and above and does not contain donations submitted after X X, 2026. It should be understood as a narrow snapshot of 2026 election spending and not a complete picture of the election. To filter out duplicates, data was limited to unique transaction id. 
Click here to see the details of how I analyzed this data. </p>
<br/>
<h2><strong> Changing and checking the data: </strong></h2>
<p> Early on in my data analysis I fact checked the names of the top ten donors to ensure that the filter caught each instance of their name, accounting for misspellings. In one instance, there was a donation listed under Mark Rowan. Because the address and job description matched other donations listed under Marc Rowan, I felt confident that they belonged to the same person. 
To ease confusion, I translated committee types from their alphabetical code to the full written name of their committee category. The codes I used to do this translation came from the FEC website. I made this change  using AI while working in a JSON file so  it is not reflected in my python analysis.
</p> 
<br/>
<h2> <strong> Presenting the Data </strong> </h2>  
</div> 