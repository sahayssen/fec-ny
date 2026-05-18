<!--
@component
SiteFooter.svelte — Site Footer Component (NYCity News Service Style)

A professional news-organization-style footer with multi-column layout,
CUNY branding, navigation links, and copyright notice.

USAGE EXAMPLE:
<SiteFooter />
-->
<script>
import { base } from '$app/paths';
import MethodologyBox from '$lib/components/Article/MethodologyBox.svelte';

  let {
    navLinks = [
      {
        label: 'Arts & Culture',
        href: 'https://www.nycitynewsservice.com/nycns_topics/arts-culture/',
      },
      {
        label: 'Business',
        href: 'https://www.nycitynewsservice.com/nycns_topics/business/',
      },
      {
        label: 'Education',
        href: 'https://www.nycitynewsservice.com/nycns_topics/education/',
      },
      {
        label: 'Environment',
        href: 'https://www.nycitynewsservice.com/nycns_topics/environment/',
      },
      {
        label: 'Health',
        href: 'https://www.nycitynewsservice.com/nycns_topics/health/',
      },
      {
        label: 'Housing',
        href: 'https://www.nycitynewsservice.com/nycns_topics/housing/',
      },
      {
        label: 'Politics',
        href: 'https://www.nycitynewsservice.com/nycns_topics/politics/',
      },
    ],
    aboutLinks = [
      {
        label: 'About Us',
        href: 'https://www.nycitynewsservice.com/about/',
      },
      {
        label: 'Contact Us',
        href: 'https://www.nycitynewsservice.com/contact/',
      },
    ],
    logoHref = 'https://www.journalism.cuny.edu/',
    logoAriaLabel = 'Visit the Craig Newmark Graduate School of Journalism website',
    logoTitle = 'Craig Newmark Graduate School of Journalism at CUNY',
    tagline = 'A student-powered service at the Craig Newmark Graduate School of Journalism',
    orgName = 'NYCity News Service',
  } = $props();

  const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
 
 <MethodologyBox class="end"> 
  This project was made by Sophie Hayssen as part of the Coding the News class at the Craig Newmark Graduate School of Journalism. While I tried my best to ensure the accuracy of the data, if you spot a potential mistake please message me at Sophie.hayssen67@journalism.cuny.edu. 
 </MethodologyBox>
  <nav class="footer-header-links footer-main" aria-label="Site links">
    <ul>
      <li><a class="footer-link" href={`${base}/`}>Home</a></li>
      <li><a class="footer-link" href={`${base}/indv`}>Individuals</a></li>
      <li><a class="footer-link" href={`${base}/company`}>Organization</a></li>
      <li><a class="footer-link" href={`${base}/methodology`}>Methodology</a></li>
    </ul>
  </nav>
      
</footer>

<style lang="scss">
  @use '../../styles' as *;

  .end {
    display: block;
    margin: 0 auto;
    text-align: center;
    max-width: 60ch;
    padding: var(--spacing-xs) 0;
    background-color: var(--color-cuny-blue-dark);
  }

  .footer-header-links {
    margin: 0 auto 0;
    max-width: 60ch;
    text-align: center;
  }

  .footer-header-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: var(--spacing-md);
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .footer-header-links a {
    color: var(--color-border);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
  }

  .footer-header-links a:hover {
    color: var(--color-white);
    text-decoration: underline;
  }

  .site-footer {
    margin-top: var(--spacing-xxl);
    background-color: var(--color-cuny-blue-dark);
    color: var(--color-white);
    padding-bottom: var(--spacing-lg);
  }

  .footer-main {
    background-color: var(--color-cuny-blue-dark);
    padding: var(--spacing-xl) var(--spacing-md);
  }

  .footer-container {
    max-width: var(--max-width-wide);
    margin: 0 auto;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  /* Brand column */
  .footer-brand {
    text-align: left;
  }

  .footer-logo-link {
    display: inline-block;
    text-decoration: none;
    color: var(--color-white);
  }

  .cuny-logo {
    width: 100%;
    max-width: var(--max-width-footer-logo);
    height: auto;
    margin: 0 auto;
    display: block;
    transition: var(--transition-opacity);
  }

  .footer-logo-link:hover .cuny-logo {
    opacity: var(--opacity-hover);
  }

  .footer-tagline {
    color: var(--color-border);
    font-family: var(--font-serif);
    font-size: var(--font-size-sm);
    line-height: var(--leading-normal);
    margin-top: var(--spacing-sm);
    margin-bottom: 0;
  }

  /* Column headings */
  .footer-heading {
    color: var(--color-white);
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wider);
    text-transform: uppercase;
    margin-bottom: var(--spacing-sm);
    padding-bottom: var(--spacing-xs);
    border-bottom: var(--border-width-thin) solid var(--color-medium-gray);
  }

  /* Link lists */
  .footer-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer-list li {
    margin-bottom: var(--spacing-xs);
  }

  .footer-link {
    color: var(--color-white);
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-normal);
    letter-spacing: var(--letter-spacing-wider);
    transition: var(--transition-color);
  }

  .footer-link:hover {
    color: var(--color-white);
  }

  /* Bottom copyright bar */
  .footer-bottom {
    background-color: var(--color-cuny-blue-dark);
    padding: var(--spacing-sm) var(--spacing-sm);
    text-align: center;
  }

  .footer-copyright {
    color: var(--color-border);
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    letter-spacing: var(--letter-spacing-wide);
    margin: 0;
  }

  /* Tablet and up: multi-column layout */
  @include tablet {
    .footer-grid {
      grid-template-columns: 2fr 1fr 1fr;
      gap: var(--spacing-xl);
    }

    .footer-brand {
      text-align: left;
    }

    .cuny-logo {
      margin: 0;
    }
  }
</style>
