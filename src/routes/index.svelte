<script>
  //-----1.LIB
  import Button from '$lib/button/_Button.svelte'
  import NavButton from '$lib/button/NavButton.svelte'
  import { goto } from '$app/navigation'
  import Test from '$lib/svg/Svg.svelte'
</script>

<!-- <svelte:body style="background-color:black;"/> -->

<div class="grid grid-flow-row grid-cols-2 gap-3 p-3 ">
  <NavButton sIcon="calendar" sText="week schedule" sSize="md" onClick={() => goto('/schedule')} />
  <NavButton sIcon="email" sText="messages" sSize="md" onClick={() => goto('/message')} />
  <NavButton sIcon="run" sText="training" sSize="md" onClick={() => goto('/training')} />
  <NavButton sIcon="run" sText="skills" sSize="md" onClick={() => goto('/skill')} />
  <NavButton sIcon="person" sText="account" sSize="md" onClick={() => goto('/account')} />
  <NavButton sIcon="home" sText="music" sSize="md" onClick={() => goto('/music')} />
  <NavButton sIcon="settings" sText="settings" sSize="md" onClick={() => goto('/settings')} />
  <NavButton sIcon="settings" sText="admin" sSize="md" onClick={() => goto('/admin')} />
</div>
