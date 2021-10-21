<script>
  //-----1.LIB
  import Icon from '../icon/_Icon.svelte'
  import { onMount } from 'svelte'
  import { browser } from '$app/env'

  //-----2.STORES
  import { oColor, sTheme } from '$lib/stores/app'

  //-----5.DATA COMPUTED
  // $: sIcon = $sTheme === 'light' ? 'weather-sunny' : 'weather-sunny-off'
  $: sColor = $sTheme === 'light' ? 'orange' : 'lightGray'

  //-----8.METHODS
  const setTheme = () => {
    console.log('setTheme')
    if (!$sTheme || $sTheme === 'dark') {
      $sTheme = 'light'
    } else {
      $sTheme = 'dark'
    }
  }
</script>

<Icon sIcon="weather-sunny" sSize="xs" {sColor} sPadding="p-0" onClick={setTheme} />
