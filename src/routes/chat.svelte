<script>
	import RecentChat from '../components/chat/recent-chat.svelte';
	const plusIcon = '/chat/plus-icon.svg';

	const data = [
		{
			avatar: 'https://picsum.photos/id/237/200',
			name: 'Malik Akbar Hashemi Rafsanjani',
			lastMsg: 'Halo gan! lama tidak berjumpa kita yaa hehe'
		},
		{
			avatar: 'https://picsum.photos/id/238/200',
			name: 'Arif Furqan Wantuah',
			lastMsg:
				"Conversely, if you need to reference all the props that were passed into a component, including ones that weren't declared with export, you can do so by accessing $$props directly. It's not generally recommended, as it's difficult for Svelte to optimise, but it's useful in rare cases."
		},
		{
			avatar: 'https://picsum.photos/id/239/200/',
			name: 'Reno Rerian',
			lastMsg: 'nggih'
		}
	];

	const handleClick = () => {
		console.log('click');
	};
</script>

<svelte:head>
	<title>Chat Page</title>
</svelte:head>
<div class="chat-container">
	<div class="list-chat">
		{#each data as chat, idx}
			<RecentChat {...chat} />
		{/each}
	</div>
	<button class="floating-btn d-flex align-items-center" on:click={handleClick}>
		<div class="btn-icon">
			<img src={plusIcon} alt="" />
		</div>
		<h1>Chat</h1>
	</button>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	.chat-container {
		padding: 0.5rem 0;
	}
	.list-chat {
		margin: 2.375rem 2rem;
	}
	.floating-btn {
		position: absolute;
		bottom: 2rem;
		right: 2rem;
		width: 160px;
		height: 67px;
		background: #000000;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		padding: 1rem;
	}
	.floating-btn > h1 {
		font-weight: bold;
		font-size: 1.8125rem;
		line-height: 133.4%;
		color: #ffffff;
    margin: 0;
	}
</style>
