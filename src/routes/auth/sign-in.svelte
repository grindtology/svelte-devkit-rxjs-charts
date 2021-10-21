<script>
  //-----1.LIB
  import Button from '$lib/button/_Button.svelte'
  import Header from '$lib/gui/Header.svelte'
  import Text1 from '$lib/text/Text1.svelte'
  import TextField from '$lib/input/TextField.svelte'
  import PasswordField from '$lib/input/PasswordField.svelte'
  import { goto } from '$app/navigation'

  //-----2.STORES

  //-----3.DATA LOCAL
  let sEmail = ''
  let sPassword = ''
  //-----4.PROPS
  //-----8.METHODS
</script>

<div class="grid grid-flow-row p-3 grid-cols-2 gap-3">
  <!-- <div class="col-span-2">&nbsp</div> -->
  <div class="col-span-2">
    <Text1 sText="Sign in" />
  </div>
  <div class="col-span-2">&nbsp</div>

  <div class="col-span-2">
    <TextField bind:sText={sEmail} sLabel="email" />
  </div>
  <div class="col-span-2">
    <PasswordField bind:sText={sPassword} sLabel="password" />
  </div>

  <div class="col-span-2">&nbsp</div>
  <div class="col-span-2">
    <Button sText="sign in" sAlign="center" onClick={() => goto('/')} />
  </div>
  <div class="col-span-2">
    <Button sText="sign up" sAlign="center" onClick={() => goto('/account/profile')} />
  </div>
  <div class="col-span-2">
    <Button sText="forgot password" sAlign="center" onClick={() => goto('/account/profile')} />
  </div>
</div>
