<script lang="ts">
	import Model from '../../components/admin/models';
</script>

<div class="container">
	<h1 class="title">Admin page</h1>
	{#each Object.keys(Model) as endpoint}
		<a class="admin-view-picker" href={`/admin/${endpoint}`}>{endpoint}</a>
	{/each}
</div>

<style>
	.container {
		padding: 2rem;
	}

	.title {
		text-align: center;
		margin-bottom: 1rem;
	}

	.admin-view-picker {
		all: unset;
		display: block;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 16px;
		width: 60vw;
		margin: 0 auto;
		padding: 1rem;
		margin-bottom: 2rem;
		text-align: center;
		font-weight: bold;
		cursor: pointer;
		text-transform: capitalize;
	}
</style>
