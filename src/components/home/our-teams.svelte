<script>
  const icon = "/home/design-team-icon.svg";
  let width;

  const data = [
    {
      team: "Design Division1",
      img: icon,
    },
    {
      team: "Design Division2",
      img: icon,
    },
    {
      team: "Design Division3",
      img: icon,
    },
    {
      team: "Design Division4",
      img: icon,
    },
    {
      team: "Design Division5",
      img: icon,
    },
    {
      team: "Design Division6",
      img: icon,
    },
  ];
</script>

<svelte:window bind:innerWidth={width}/>

<div class={`our-teams-container ${width > 1200 ? "container-large" : ""}`}>
  <div class="our-teams-header text-center">
    <h1>Our Team</h1>
  </div>
  <div class="our-teams-content">
    <div id="our-teams-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {#each data as {team, img}, idx}
          <div class={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <div class="carousel-item-card d-flex flex-column align-items-center justify-content-center">
              <div class="my-3">
                <img src={img} class="d-block" alt={`${team} icon`} />
              </div>
              <h1 class="mb-3">{team}</h1>
            </div>
          </div>
        {/each}
      </div>
      <div class="carousel-indicators position-static d-flex justify-content-center">
        {#each Array(data.length) as x, idx }
          <button
            type="button"
            data-bs-target="#our-teams-carousel" 
            data-bs-slide-to={idx + ''} 
            class={"btn " + (idx === 0 ? "active" : "")} 
            aria-current="true" 
            aria-label={`Slide ${idx+1}`}
          >
          </button>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .our-teams-container {
    padding: 2rem 1.5rem;
    background-color: #000;
  }
  .container-large {
    padding: 3rem 5rem;
    margin-left: 78px;
  }
  .our-teams-header > h1 {
    font-weight: bold;
    font-size: 3rem;
    line-height: 3.5rem;
    text-transform: capitalize;
    color: #DAB232;
  }
  .carousel-item-card > h1 {
    font-weight: bold;
    font-size: 3rem;
    line-height: 3.5rem;
    text-transform: capitalize;
    color: #F7F5E9;
  }
  .carousel-indicators {
    margin: 0;
  }
  .carousel-indicators > button {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background: #FFF;
    margin: 0 8px;
  }
  .carousel-indicators > .active {
    background: #C4C4C4;
  }
</style>