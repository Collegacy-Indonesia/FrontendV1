<script>
  import ApiService from "../utils/api";
  import ContextTest from "../components/shared/contextTest.svelte";

  const handleClick = async () => {
    console.log("clicked");
    const apiSrv = new ApiService("/users");
    const dataUsers = await apiSrv.getData();
    console.log(dataUsers);

    if (!dataUsers) {
      alert("you dont have permission");
    }
    console.log("fetching finish");
  }
</script>

<svelte:head>
	<title>Test JWT</title>
</svelte:head>
<div class="test-jwt">
  <br />
  <br />
  <br />
  <br />
  <br />
  <h1>test-jwt</h1>
  <button on:click={handleClick} class="big-btn">
    GET USERS
  </button>
  <ContextTest />
</div>

<style>
  .big-btn {
    margin: 5vh;
  }
</style>