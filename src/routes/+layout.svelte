<script>
  import SocMedia from './SocMedia.svelte';
  import Bio from './Bio.svelte';
  import Portfolio from './Portfolio.svelte';
  export let navigationLinks;

</script>

<header>
  <nav class="navigation">
  <ul class="navigation-links">
    
    <li><a href="#bio">Bio</a></li>
    <li><a href="#portfolio">Portfolio</a></li>

  </ul>
</nav>

</header>

<main>
  <slot>
    
  </slot>
</main>

<footer>
  <Bio />
  <Portfolio />
  <SocMedia />
</footer>

<style>
  .navigation {
    text-align: center;
  }

  .navigation-links {
    display: inline-flex;
    list-style-type: none;
    padding: 0;
  }

  .navigation-links li {
    margin-right: 100px;
  }

  .navigation-links a {
    text-decoration: none;
    color: #000; 
  }
</style>
