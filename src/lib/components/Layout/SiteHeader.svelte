<!--
@component
SiteHeader.svelte — NYCity News Service Style Header
-->
<script>
import { base } from '$app/paths';
</script>

<header class="site-header">
  <div class="masthead-wrapper">
    <div class="masthead">
     <div class="logo">
          <img src={`${base}/photos/USNY.png`} alt="NYCity News Service logo">
        </div>
      <div class="hero-row">
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a class="nav-link" href={`${base}/`}>Home</a></li>
            <li><a class="nav-link" href={`${base}/indv`}>Individuals</a></li>
            <li><a class="nav-link" href={`${base}/company`}>Organization</a></li>
            <li><a class="nav-link" href={`${base}/`}>Methodology</a></li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
</header>

<style lang="scss">
  @use '../../styles' as *;
  .logo {
    width: 120%;
    max-width: 8rem;
    height: 7.5rem;
    align-items:left;
    margin-left: 4rem;
    display: block;
  }

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
    flex-direction: center;
    align-items: center;
    padding: 0;
    max-width: var(--max-width-wide);
  }

  .hero-row {
    width: 100%;
    margin: 0 auto;
    padding: 0.15rem;
    text-align: left;
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
    margin-top: 1rem;
  }

  h4.hero-row {
    font-size: 10rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
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
    gap: var(--spacing-xl);
    margin-top: 2rem;
    padding: 1rem;
    align-items: center;
    font-size: 1rem;
    justify-content: center;
  }

  .nav-link {
    color: var(--color-white);
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: 20px;
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
    white-space: nowrap;
    transition: var(--transition-opacity);
    align-items: center;
  }

  .nav-link:hover {
    text-decoration: underline;
    color: #ff5757;
    opacity: var(--opacity-hover);
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
