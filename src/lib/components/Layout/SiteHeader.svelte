<!--
@component
SiteHeader.svelte — NYCity News Service Style Header
-->
<script>
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
      <div class="subtitle">
      Inside the race to become New York’s next top political donor
      </div>
      </h4>
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
    padding: 0.15rem;
    text-align: center;
    color: #ffffff;
    word-spacing: 0.20rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 1.0;
    gap: 1rem;
  }

  h1.hero-row {
    font-size: 10rem;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
  }

  h4.hero-row {
    font-size: 10rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
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
    gap: var(--spacing-xs);
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
      padding: 0.15rem;
    }

    h1.hero-row {
      font-size: 4rem;
    }

    h4.hero-row {
      font-size: 1.5rem;
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
