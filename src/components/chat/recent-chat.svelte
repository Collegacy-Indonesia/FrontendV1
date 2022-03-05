<script>
	export let avatar;
	export let name;
	export let lastMsg;
</script>

<div class="recent-chat-container d-flex">
	<div class="avatar-container">
		<img src={avatar} alt={name + ' avatar'} />
	</div>
	<div class="text-container d-flex flex-column justify-content-center">
		<h1>{name}</h1>
		<h2>{lastMsg}</h2>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	.recent-chat-container {
		padding: 1.5rem 1.8125rem;
		background: #f7f5e9;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 16px;
    margin: 1.5rem 0;
	}
	.avatar-container {
		width: 86px;
		height: 86px;
	}
	.avatar-container > img {
		width: 100%;
		height: 100%;
		border-radius: 16px;
	}
  .text-container {
    margin-left: 20px;
  }
	.text-container > h1 {
		font-weight: bold;
		font-size: 1.8125rem;
		line-height: 133.4%;
		color: #000000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 500px;
		max-width: 40vw;    
	}
	.text-container > h2 {
		font-style: italic;
		font-weight: 300;
		font-size: 1.8125rem;
		line-height: 133.4%;
		color: #000000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 500px;
		max-width: 40vw;
	}
</style>
