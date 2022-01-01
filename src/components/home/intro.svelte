<script>
  // import { watchResize } from "svelte-watch-resize";
  let logo = "/home/collegacy-logo.svg";
  let circle = "/home/circle.svg";
  let width;
</script>

<svelte:window bind:innerWidth={width}/>

<div class={`container d-flex flex-wrap align-items-center justify-content-center ${width > 1200 ? "container-large" : ""}`} >
  {#if width > 1200}
    <img src={circle} alt="" class="middle-circle">
    <img src={circle} alt="" class="top-right-circle">
    <div class="left-part d-flex flex-column align-items-center">
      <div class="intro-title">
        <h1>Collegacy Indonesia</h1>
      </div>
      <div class="intro-desc">
        <h2>
          Student Organization committed to enhance in-demand skills in today's workforce to create leaders #LeaveYourMark
        </h2>
      </div>
    </div>
    <div class="right-part">
      <img src={logo} alt="collegacy logo">
      <div class="lifter"></div>
    </div>
  {:else}
    <div class="top-part d-flex flex-wrap justify-content-center align-items-center">
      <div class="top-left-part">
        <img src={logo} class="small-logo" alt="collegacy logo">
      </div>
      <div class="top-right-part intro-title">
        <h1>Collegacy</h1>
        <h1>Indonesia</h1>
      </div>
    </div>
    <div class="bottom-part intro-desc">
      <h2>
        Student Organization committed to enhance in-demand skills in today's workforce to create leaders #LeaveYourMark
      </h2>
    </div>
  {/if}
</div>

<style>
  .container-large {
    height: 678px;
    position: relative;
  }
  .middle-circle {
    position: absolute;
    top: 0;
    width: 563px;
    height: 563px;
  }
  .top-right-circle {
    position: absolute;
    right: -160px;
    top: -20px;
    width: 324px;
    height: 324px;
  }
  .left-part {
    width: 650px;
    margin-right: 87px;
    padding-left: 30px;
  }
  .intro-title h1 {
    font-weight: bold;
    font-size: 96px;
    line-height: 117%;
    text-transform: capitalize;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .intro-desc {
    margin: 40px 0;
  }
  .intro-desc h2 {
    font-weight: bold;
    font-size: 29px;
    line-height: 133.4%;
    color: #000000;
  }
  .lifter {
    width: 100%;
    height: 100px;
  }
  .top-part {
    margin-top: 40px;
  }
  .top-right-part {
    margin-left: 45px;
  }
  .top-right-part h1 {
    font-size: 7vw;
  }
  .small-logo {
    width: 22vw;
    height: 23vw;
  }
  .bottom-part h2 {
    font-size: 4vw;
    padding: 0 15px;
  }
</style>