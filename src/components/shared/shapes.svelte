<script>
	import { fly } from 'svelte/transition';
	export let type;
	export let x;
	export let y;
	export let color;
	export let animation;
</script>

<div transition:fly={animation} class={type} style={`left:${x};top:${y};background:${color};`} />

<style>
	.circle {
		position: absolute;
		width: 150px;
		height: 150px;
		background: red;
		border-radius: 50%;
	}
	.triangle {
		z-index: -1;
		position: absolute;
		width: 0;
		height: 0;
		border-top: 125px solid transparent;
		border-left: 200px solid yellow;
		border-bottom: 125px solid transparent;
	}
	.innercircle {
		position: absolute;
		border-radius: 50%;
		box-shadow: 0px 0px 0px 30px transparent, 0px 0px 0px 40px yellow;
		width: 100px;
		height: 100px;
		margin: 3em;
	}
</style>
