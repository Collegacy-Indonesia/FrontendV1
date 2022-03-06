<script>
	import ReceiveChat from '../../components/chat/receive-chat.svelte';
	import SendChat from '../../components/chat/send-chat.svelte';

	let chats = [
		{
			type: 'receive',
			data: {
				payload:
					'A rapidly exploring random tree (RRT) is an algorithm designed to efficiently search nonconvex, high-dimensional spaces by randomly building a space-filling tree. The tree is constructed incrementally from samples drawn randomly from the search space and is inherently biased to grow towards large unsearched areas of the problem. RRTs were developed by Steven M. LaValle and James J. Kuffner Jr.[1][2] They easily handle problems with obstacles and differential constraints (nonholonomic and kinodynamic) and have been widely used in autonomous robotic motion planning.',
				avatar: 'https://picsum.photos/200'
			}
		},
		{
			type: 'send',
			data: {
				payload: 'RRTs can be used to compute approximate control policies',
				avatar: 'https://picsum.photos/id/237/200'
			}
		},
		{
			type: 'send',
			data: {
				payload: 'Algorithm BuildRRT',
				avatar: 'https://picsum.photos/id/237/200'
			}
		},
		{
			type: 'receive',
			data: {
				payload:
					'RRT growth can be biased by increasing the probability of sampling states from a specific area.',

				avatar: 'https://picsum.photos/200'
			}
		},
		{
			type: 'receive',
			data: {
				payload:
					'Most practical implementations of RRTs make use of this to guide the search towards the planning problem goals. This is accomplished by introducing a small probability of sampling the goal to the state sampling procedure. The higher this probability, the more greedily the tree grows towards the goal.',

				avatar: 'https://picsum.photos/200'
			}
		},
		{
			type: 'send',
			data: {
				payload:
					'RRTs can be viewed as a technique to generate open-loop trajectories for nonlinear systems with state constraints. An RRT can also be considered as a Monte-Carlo method to bias search into the largest Voronoi regions of a graph in a configuration space. Some variations can even be considered stochastic fractals.[3]',
				avatar: 'https://picsum.photos/id/237/200'
			}
		},
		{
			type: 'receive',
			data: {
				payload:
					'A rapidly exploring random tree (RRT) is an algorithm designed to efficiently search nonconvex, high-dimensional spaces by randomly building a space-filling tree. The tree is constructed incrementally from samples drawn randomly from the search space and is inherently biased to grow towards large unsearched areas of the problem. RRTs were developed by Steven M. LaValle and James J. Kuffner Jr.[1][2] They easily handle problems with obstacles and differential constraints (nonholonomic and kinodynamic) and have been widely used in autonomous robotic motion planning.',
				avatar: 'https://picsum.photos/200'
			}
		},
		{
			type: 'send',
			data: {
				payload: 'RRTs can be used to compute approximate control policies',
				avatar: 'https://picsum.photos/id/237/200'
			}
		},
		{
			type: 'send',
			data: {
				payload: 'Algorithm BuildRRT',
				avatar: 'https://picsum.photos/id/237/200'
			}
		},
		{
			type: 'receive',
			data: {
				payload:
					'RRT growth can be biased by increasing the probability of sampling states from a specific area.',

				avatar: 'https://picsum.photos/200'
			}
		},
		{
			type: 'receive',
			data: {
				payload:
					'Most practical implementations of RRTs make use of this to guide the search towards the planning problem goals. This is accomplished by introducing a small probability of sampling the goal to the state sampling procedure. The higher this probability, the more greedily the tree grows towards the goal.',

				avatar: 'https://picsum.photos/200'
			}
		},
		{
			type: 'send',
			data: {
				payload:
					'RRTs can be viewed as a technique to generate open-loop trajectories for nonlinear systems with state constraints. An RRT can also be considered as a Monte-Carlo method to bias search into the largest Voronoi regions of a graph in a configuration space. Some variations can even be considered stochastic fractals.[3]',
				avatar: 'https://picsum.photos/id/237/200'
			}
		}
	];

  const onKeyPress = e => {
    if (e.charCode === 13) {
			e.preventDefault();
			const value = e.target.value;
			e.target.value = '';
			console.log("new msg: " + value);
			chats.push({
				type: 'send',
				data: {
					payload: value,
					avatar: 'https://picsum.photos/id/237/200'
				}
			});
			chats = chats;
		}
  };
</script>

<div class="chat-page">
	<div class="chat-container">
		{#each chats as chat}
			{#if chat.type === 'send'}
				<SendChat {...chat.data} />
			{:else}
				<ReceiveChat {...chat.data} />
			{/if}
		{/each}
	</div>
	<div class="new-msg-container">
		<textarea type="text" class="new-msg-input" placeholder="Enter Message" on:keypress={onKeyPress} />
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	.chat-page {
    width: 100%;
    height: calc(100vh - 60px);
	}
	.chat-container {
		height: calc(100% - 150px);
    padding: 2rem 3rem 0;
    overflow: auto;
	}
	.new-msg-container {
		margin: 8px;
    margin-top: 16px;
	}
	.new-msg-container > textarea {
		padding: 8px;
		height: 116px;
		width: 100%;
		background: #ffffff;
		box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
		outline: none;
		border: none;
		border-radius: 12px;
		font-weight: normal;
		font-size: 1.5rem;
		line-height: 133.4%;
		color: #000000;
		resize: none;
		overflow: auto;
	}
</style>
