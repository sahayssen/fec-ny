import peeps from '$lib/data/FECtopten.json';
import orgs from '$lib/data/FECorgsort.json';

export function load() {
  return {
    // Set to false to hide the NYCity News Service header
    showHeader: true,
    // Set to false to hide the site footer
    showFooter: false,
    peeps,
    orgs,
  };
}
