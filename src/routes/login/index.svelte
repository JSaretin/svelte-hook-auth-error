<script lang="ts">
  export let error: string;
  let data: { username: string; password: string } = {
    username: "demousername",
    password: "demouspassword",
  };
</script>

<div class="container">
  <form action="" method="post">
    {#if error}
      <div class="error">
        {error}
      </div>
    {/if}
    <input
      type="text"
      name="username"
      required
      placeholder="username"
      bind:value={data.username}
    />
    <input
      type="password"
      name="password"
      required
      placeholder="password"
      bind:value={data.password}
    />
    <input type="submit" value="login" />
  </form>
</div>

<style>
  .error {
    position: absolute;
    top: -3rem;
    text-align: center;
    left: 0;
    width: 100%;
    border-radius: 0.4rem;
    padding: 0.4rem;
    background-color: rgba(255, 0, 0, 0.312);
    border: 1px style red;
    color: red;
  }
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
  }
  form {
    max-width: 300px;
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: fit;
    position: relative;
  }

  input {
    outline: none;
    border: none;
    background-color: #eeeeee;
    border-radius: 0.4rem;
    padding: 0.4rem;
  }

  input[type="submit"] {
    background-color: green;
    cursor: pointer;
  }
</style>
