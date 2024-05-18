<script lang="ts">
  import UserCredentials from "$lib/ui/UserCredentials.svelte";
  import UserDetails from "$lib/ui/UserDetails.svelte";
  import Message from "$lib/ui/Message.svelte";

  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let message = "";
</script>

{#if message}
  <Message {message} />
{/if}
<form method="POST" action="?/signup">
  <UserDetails bind:firstName bind:lastName />
  <UserCredentials bind:email bind:password />
  <button class="button is-success is-fullwidth">Create Account</button>
  <br />
</form>
