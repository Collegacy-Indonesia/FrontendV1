<script>
	export let payload;
	export let avatar;
</script>

<div class="receive-chat-container d-flex w-100 my-3">
	<div class="avatar-container">
		<img class="avatar" src={avatar} alt="" />
	</div>
	<div class="msg-container">
		<p class="m-0">{payload}</p>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	.avatar-container {
		width: 41px;
		height: 41px;
    margin-top: 2px;
	}
	.avatar-container > img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.msg-container {
		margin-left: 10px;
    padding: 11px 23px;
		background-color: #fff;
		border-radius: 20px;
    width: calc(100% - 50px);
	}
	.msg-container > p {
		font-weight: normal;
		font-size: 1.5rem;
		line-height: 133.4%;
		color: #000000;
	}
</style>
