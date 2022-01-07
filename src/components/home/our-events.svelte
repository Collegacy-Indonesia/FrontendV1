<script>
  const dummyImg = '/home/collegacy-logo.svg';

  const events = [
    {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      link: "/",
      img: dummyImg,
    },
    {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      link: "/",
      img: dummyImg,
    },
    {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      link: "/",
      img: dummyImg,
    },
    {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      link: "/",
      img: dummyImg,
    },
  ]
  let width;
</script>

<svelte:window bind:innerWidth={width}/>

<div class={`our-event ${width > 1200 ? "container-large" : ""}`}>
  <div id="our-event-carousel" class="carousel slide d-flex flex-column justify-content-center" data-bs-ride="carousel">
    <h1 class="text-center">Our Events</h1>
    <div class="carousel-indicators position-static d-inline-block mx-auto">
      {#each Array(events.length) as x, idx}
        <button type="button" data-bs-target="#our-event-carousel" data-bs-slide-to={idx + ''} class={"btn " + (idx === 0 ? "active" : "")} aria-current="true" aria-label={`Slide ${idx+1}`}>
          Event {idx+1}
        </button>
      {/each}
    </div>
    <div class="carousel-inner">
      {#each events as {desc, link, img}, idx}
        <div class={`carousel-item ${idx === 0 ? "active" : ""}`}>
          <div class="carousel-item-card d-flex flex-lg-nowrap flex-wrap-reverse justify-content-center align-items-center">
            <div class={"carousel-item-card-left " + (width > 1200 ? "" : "m-small")}>
              <h1>Event {idx+1}</h1>
              <p class="text-justify">{desc}</p>
              <a href={link}>
                <button class="btn btn-more">More</button>
              </a>
            </div>
            <div class="carousel-item-card-right my-3 my-lg-0">
              <img src={img} class="d-block" alt={`Event ${idx+1} image`} >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .our-event {
    padding: 2rem 1.5rem;
  }
  .container-large {
    padding: 3rem 5rem;
    margin-left: 78px;
  }
  .carousel > h1 {
    font-weight: 900;
    font-size: 3rem;
    line-height: 144%;
    text-transform: capitalize;
    color: #000;
    font-family: Patricia Gothic;
  }
  .carousel-indicators {
    border: 2px solid #112131;
    border-radius: 20px;
    margin: 0;
    z-index: 9;
  }
  .carousel-indicators > button {
    font-weight: 600;
    font-size: 1.875rem;
    line-height: 117%;
    color: #000;
    margin: -1px;
  }
  .carousel-indicators > .active {
    background: #112131;
    border: 2px solid #000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: #fff;
  }
  .carousel-inner {
    margin-top: 3rem;
  }
  .carousel-item-card-left {
    margin-right: 8.125rem;
  }
  .m-small {
    margin-right: 0.75rem;
  }
  .carousel-item-card-left > h1 {
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 145%;
    text-transform: capitalize;
    color: #000;
    font-family: Patricia Gothic;
  }
  .carousel-item-card-left > p {
    font-weight: normal;
    font-size: 2rem;
    line-height: 135%;
    color: #112131;
  }
  .btn-more {
    width: 10.75rem;
    height: 3.5rem;
    background: #000;
    border-radius: 20px;
    color: #fff;
    font-weight: normal;
    font-size: 1.875rem;
    line-height: 143%;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Patricia Gothic;
  }
  .carousel-item-card-right > img {
    width: 28.125rem;
    height: 25.625rem;
    border-radius: 1rem;
  }
</style>