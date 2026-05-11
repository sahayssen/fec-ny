import peeps from '$lib/data/FECtopten.json';

export function load({ params }) {
  return {
    // Set to false to hide the NYCity News Service header
    showHeader: true,
    // Set to false to hide the site footer
    showFooter: false,
    peeps,
    FullName: decodeURIComponent(params.Full_Name),
  };
}