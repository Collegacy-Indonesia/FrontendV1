<script>
	import { fly, fade } from 'svelte/transition';
	import { spring } from 'svelte/motion';

	export let type;
	export let x;
	export let y;
	export let moveY;
	export let color;
	export let animation;
	$: shapeCSS = type + ' grabbable';

	function drag(node) {
		let x;
		let y;
		const coords = spring(
			{
				x: 0,
				y: 0
			},
			{ stiffness: 0.04, damping: 0.1 }
		);
		coords.subscribe((current) => {
			node.style.transform = `translate3d(${current.x}px, ${current.y + moveY * 0.5}px, 0)`;
		});
		node.addEventListener('mousedown', mousedown);
		function mousedown(event) {
			x = event.clientX;
			y = event.clientY;
			window.addEventListener('mouseup', mouseup);
			window.addEventListener('mousemove', mousemove);
		}
		function mouseup() {
			window.removeEventListener('mouseup', mouseup);
			window.removeEventListener('mousemove', mousemove);
			coords.update(() => {
				return { x: 0, y: 0 };
			});
			x = 0;
			y = 0;
		}
		function mousemove(event) {
			const dx = event.clientX - x;
			const dy = event.clientY - y;
			x = event.clientX;
			y = event.clientY;
			coords.update((current) => {
				return {
					x: current.x + dx,
					y: current.y + dy
				};
			});
		}
	}
</script>

<div
	use:drag
	in:fly={animation}
	class={shapeCSS}
	style={`left:${x};top:${y};background:${color};transform: translate(0,${moveY * 0.5}px)`}
/>

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
	.grabbable {
		cursor: move;
		cursor: grab;
		cursor: -moz-grab;
		cursor: -webkit-grab;
	}
	.grabbable:active {
		cursor: grabbing;
		cursor: -moz-grabbing;
		cursor: -webkit-grabbing;
	}
</style>
