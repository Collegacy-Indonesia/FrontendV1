<script>
	import { onMount } from 'svelte';
	import { getUserProfile, logout, userContext } from "../../contexts/userContext";

  onMount(() => {
    getUserProfile();
  })

  const handleLogout = () => {
		logout();
	}
</script>

<div class="context-test">
  <h1>INFORMATION</h1>
  {#if $userContext === undefined}
    <h1>Please Login</h1>
  {:else}
    {#if $userContext === null}
      <h1>...loading</h1>
    {:else}
      <h1>Hi {$userContext.email}!</h1>
      <h2>{JSON.stringify($userContext)}</h2>
    {/if}
  {/if}
  <div>
    <button on:click={handleLogout}>
      LOGOUT
    </button>
  </div>
</div>

<style>

</style>