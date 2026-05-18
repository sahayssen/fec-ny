import orgs from '$lib/data/FECorgsort.json';

export function load({ params }) {
  return {
    // Set to false to hide the NYCity News Service header
    showHeader: true,
    // Set to false to hide the site footer
    showFooter: true,
    orgs,
    contributorName: decodeURIComponent(params.contributor_name),
  };
}