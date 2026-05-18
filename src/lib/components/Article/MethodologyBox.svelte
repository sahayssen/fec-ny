<!--
@component
MethodologyBox.svelte — A bordered box that explains the methodology, data
sources, or reporting process behind a story. Typically placed at the bottom
of an article.
-->
<script>
  let { title = 'How We Reported This Story', children, class: extraClass = '' } = $props();
</script>

<div class="end"> 
<aside class={`methodology-box ${extraClass}`} aria-label="Methodology">
  <h3 class="methodology-title">{title}</h3>
  <div class="methodology-body">
    {@render children()}
  </div>
</aside>
</div> 

<style lang="scss">
  @use '../../styles' as *;

   .end {
    display: block;
    margin: 0 auto;
    text-align: center;
    max-width: 60ch;
    padding: var(--spacing-md) 0 0;
    background-color: var(--color-cuny-blue-dark);
  }

  .methodology-box {
    border-top: var(--border-width-accent) solid var(--color-accent);
    background-color: var(--color-light-gray);
    padding: var(--spacing-xs);
    margin-top: var(--spacing-lg);
    margin-bottom: 0;
    max-width: var(--max-width);
    align: center;
  }

  .methodology-title {
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wider);
    color: var(--color-dark);
    margin-bottom: var(--spacing-xs);
  }

  .methodology-body {
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    line-height: var(--leading-relaxed);
    color: var(--color-text);
  }

  .methodology-body :global(p) {
    margin-bottom: var(--spacing-xs);
  }

  .methodology-body :global(p:last-child) {
    margin-bottom: 0;
  }

  .methodology-body :global(a) {
    color: var(--color-accent);
    text-decoration: underline;
  }

  .methodology-body :global(a:hover) {
    color: var(--color-dark);
  }

  /* Modifier when used inside the footer: centered, constrained, CUNY blue with white text */
  .methodology-box.end {
    margin: 0 auto 0;
    text-align: left;
    max-width: 60ch;
    padding: var(--spacing-sm) 0;
    background-color: var(--color-cuny-blue-dark);
    color: var(--color-white);
    border-top-color: #ff5757;
  }

  .methodology-box.end .methodology-title {
    color: var(--color-white);
    text-align: left;
  }

  .methodology-box.end .methodology-body {
    color: var(--color-white);
    text-align: left;
  }

  .methodology-box.end :global(a) {
    color: var(--color-white);
  }

  .methodology-box.end :global(a:hover) {
    color: var(--color-accent);
  }

  @include tablet {
    .methodology-box {
      padding: var(--spacing-md) var(--spacing-md);
    }

    .methodology-body {
      font-size: var(--font-size-base);
    }
  }
</style>
