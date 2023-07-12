<script>
  export let projects = [
    {
      title: "School project that helps students in choosing a profession",
      link: "http://schooleduguide.tilda.ws/"
    },
    {
      title: "InnoBookingBot",
      link: "tbu"
    },
    {
      title: "Design for a web-app",
      link: "tbu"
    }
  ];
</script>

<div id="portfolio">
  <div id="portText">
    <h1>Portfolio</h1>
    <ul>
      {#each projects as project}
        <li class="project1">{project.title} - <a href="{project.link}">link</a></li>
      {/each}
    </ul>
  </div>
</div>
