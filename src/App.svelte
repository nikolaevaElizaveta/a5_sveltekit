
<script>
  import Layout from './routes/+layout.svelte';
  import Intro from './routes/Intro.svelte';
</script>

<Layout {navigationLinks}>
  <Router>
    <Route path="/" component={Intro} />
    <Route path="/bio" component={Bio} />
    <Route path="/portfolio" component={Portfolio} />
  </Router>
</Layout>
