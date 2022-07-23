<script lang="ts">
  import { session } from "$app/stores";

  $: logged_in = $session.logged_id;
</script>

{#if logged_in}
  <a href="/dashboard">Dashboard</a>
  <a href="/logout">logout and delete session</a>
{:else}
  <a href="/login">go to login</a>
{/if}
<slot />

<style>
    a {
        font-size: x-large;
        margin-right: 10px;
    }
</style>
