<script>
  //-----1.LIB
  import { goto } from '$app/navigation'
  import Header from '$lib/gui/Header.svelte'
  import Back from '$lib/icon/Back.svelte'
  import NavButton from '$lib/button/NavButton.svelte'
  //-----2.STORES
  //-----3.DATA LOCAL
  //-----4.PROPS
  //-----5.DATA COMPUTED
  //-----6.DATA WATCH
  //-----7.INIT
  //-----8.METHODS
</script>

<Header sTitle1="Admin">
  <div slot="btn1"><Back /></div>
</Header>

<div class="grid grid-flow-row grid-cols-2 gap-3 p-3">
  <NavButton sIcon="calendar" sText="Skills" sSize="md" onClick={() => goto('/skill')} />
</div>
