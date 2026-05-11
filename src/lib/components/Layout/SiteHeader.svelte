<!--
@component
SiteHeader.svelte — NYCity News Service Style Header
-->
<script>
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
  } = $props();
</script>

<header class="site-header">
  <div class="masthead-wrapper">
    <div class="masthead">
      <h1 class="hero-row">
        <div class="topline"> The </div> 
        <div class="red">  United States  </div>
        <div class="topline"> of </div>
          New York
      </h1>
      <h4 class="hero-row">
      Inside the race to become New York’s next top political donor
      </h4>

      <!-- Navigation inline with logo -->
      {#if navLinks.length > 0}
        <nav class="main-nav" aria-label="Main navigation">
          <ul class="nav-list">
            {#each navLinks as link (link.href)}
              <li>
                <a href={link.href} class="nav-link">{link.label}</a>
              </li>
            {/each}
          </ul>
        </nav>
      {/if}
    </div>
  </div>
</header>

<style lang="scss">
  @use '../../styles' as *;

  .site-header {
    border-bottom: 0px solid var(--color-accent);
    box-shadow: 0 2px 4px var(--color-shadow);
  }

  /* Full-width blue background with animated dark-to-light gradient */
  .masthead-wrapper {
    background: #0b0d63;
    padding: 1rem;
  }

  /* Compact Masthead - Mobile: centered */
  .masthead {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding: 0;
    max-width: var(--max-width-wide);
    margin: 0 auto;
  }

  .hero-row {
    width: 100%;
    margin: 0;
    padding: 1rem;
    text-align: center;
    color: #ffffff;
    word-spacing: 0.20rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 1.05;
    gap: 1rem;
  }

  .topline {
    color: #ffbd59;
  }

  .red {
    color: #ff5757;
  }

  /* Navigation - hidden on mobile */
  .main-nav {
    display: none;
  }

  .nav-list {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    gap: var(--spacing-md);
    margin: 0;
    padding: 0;
  }

  .nav-link {
    color: var(--color-white);
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
    white-space: nowrap;
    transition: var(--transition-opacity);
  }

  .nav-link:hover {
    color: var(--color-white);
    opacity: var(--opacity-hover);
    text-decoration: none;
  }

  /* Desktop styles - show nav, space-between layout, larger logo */
  @include desktop {
    .masthead {
      padding: 0;
    }

    .hero-row {
      padding: var(--spacing-xl) var(--spacing-md);
      font-size: clamp(2rem, 5vw, 4rem);
    }

    .main-nav {
      display: flex;
      align-items: center;
       justify-content: center;
      padding: 0 var(--spacing-md) var(--spacing-md);
    }

    .nav-list {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
</style>
