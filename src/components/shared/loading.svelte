<script>
	const logoCollegacy = '/shared/logo-collegacy.png';
</script>

<div class="loading-component d-flex flex-column align-items-center justify-content-center">
	<div class="loading-logo-container">
		<img src={logoCollegacy} alt="logo-collegacy" />
	</div>
	<div class="loading-text">
		<h1>Loading...</h1>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}
  .loading-component {
    padding: 16px;
  }
	.loading-logo-container {
		width: 149.28px;
		height: 153.73px;
	}
	.loading-logo-container > img {
		width: 100%;
		height: 100%;
	}
	.loading-text {
		margin: 28px 0;
		text-align: center;
	}
	.loading-text > h1 {
		font-weight: bold;
		font-size: 2.25rem;
		line-height: 133.4%;
		color: #000000;
	}
</style>
