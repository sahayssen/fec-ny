// Page settings
// These values are passed to the layout to control what appears on the page.
import peeps from '$lib/data/FECtopten.json';
import orgs from '$lib/data/FECorgsort.json';
import indv from '$lib/data/FECindvcongress.json';
import topten from '$lib/data/FECtoptencongress.json';

export function load() {
  return {
    // Set to false to hide the NYCity News Service header
    showHeader: true,
    // Set to false to hide the site footer
    showFooter: true,
    peeps,
    orgs,
    indv,
    topten
  };
}
