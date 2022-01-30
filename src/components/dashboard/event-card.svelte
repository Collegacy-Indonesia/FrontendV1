<div class="card">
	<div class="image-wrapper">
		<img src="/home/summit.png" alt="Summit" />
	</div>
</div>

<style>
	.image-wrapper > img {
		top: 0px;
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}

	.card {
		background-color: rgb(255, 255, 255);
		color: rgb(33, 43, 54);
		transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		background-image: none;
		overflow: hidden;
		box-shadow: rgba(145, 158, 171, 0.24) 0px 0px 2px 0px,
			rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;
		border-radius: 16px;
		position: relative;
		z-index: 0;
	}
</style>
