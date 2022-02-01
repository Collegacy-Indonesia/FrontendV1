<div class="coming-soon-component text-center d-flex flex-column justify-content-center align-items-center">
	<div class="coming-soon-title">
		<h1>Coming Soon!</h1>
	</div>
	<div class="coming-soon-subtitle">
		<h2>Subscribe to the collegacy newsletter for update notification!</h2>
	</div>
	<div class="coming-soon-button">
		<!-- TODO: add subscribe functionality -->
		<button class="btn">Subscribe</button>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}
  .coming-soon-component {
    padding: 16px;
  }
  .coming-soon-title {
		max-width: 559px;
		width: 90vw;
  }
	.coming-soon-title > h1 {
		font-weight: bold;
		font-size: 6rem;
		line-height: 7.0625rem;
		text-transform: capitalize;
		color: #000000;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.coming-soon-subtitle {
		max-width: 625px;
		width: 90vw;
	}
	.coming-soon-subtitle > h2 {
		font-weight: bold;
		font-size: 1.8125rem;
		line-height: 133.4%;
		color: #000000;
	}
	.coming-soon-component button {
		width: 140px;
		height: 40px;
		background: #000000;
		border-radius: 20px;
		font-weight: normal;
		font-size: 1.875rem;
		line-height: 2.1875rem;
		text-align: center;
		text-transform: capitalize;
		color: #ffffff;
		text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
		display: block;
		padding: 8px;
    margin: 18px 0;
	}
	@media screen and (min-width: 768px) {
		.coming-soon-component button {
			width: 206px;
			height: 56px;
      margin: 21px 0;
      padding: 10px;
		}
	}
</style>
