<script>
  //-----1.LIB
  import NavButton from '$lib/button/NavButton.svelte'
  import Header from '$lib/gui/Header.svelte'
  import Back from '$lib/icon/Back.svelte'
  import { goto } from '$app/navigation'

  //-----8.METHODS
</script>

<Header sTitle1="Account">
  <div slot="btn1"><Back /></div>
</Header>
<div class="grid grid-flow-row grid-cols-2 gap-3 p-3">
  <NavButton sIcon="person" sText="profile" sSize="md" onClick={() => goto('/account/profile')} />
  <NavButton sIcon="share-variant-outline" sText="follow" sSize="md" onClick={() => goto('/account/follow')} />
  <NavButton sIcon="store" sText="club" sSize="md" onClick={() => goto('/account/club', { noscroll: true })} />
</div>
