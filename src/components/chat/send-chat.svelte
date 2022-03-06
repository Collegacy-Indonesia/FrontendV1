<script>
	export let payload;
	export let avatar;
</script>

<div class="send-chat-container d-flex justify-content-end my-3">
	<div class="msg-container">
		<p class="m-0">{payload}</p>
	</div>
	<div class="avatar-container">
		<img class="avatar" src={avatar} alt="" />
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
		margin-right: 10px;
		padding: 11px 23px;
		background: #000000;
		border-radius: 20px;
    max-width: calc(100% - 50px);
	}
	.msg-container > p {
		font-weight: normal;
		font-size: 1.5rem;
		line-height: 133.4%;
		color: #fff;
	}
</style>
