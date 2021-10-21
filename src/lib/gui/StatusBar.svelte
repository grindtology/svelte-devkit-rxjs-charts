<script>
  //-----1.LIB
  import Text4 from "$lib/text/Text4.svelte"
  import ThemeSelector from "$lib/gui/ThemeSelector.svelte"

  //-----2.STORES
  import {oColor, sTheme} from "$lib/stores/app"
  $: sBgColor = "bg-"+ $oColor[$sTheme].bg1

  
</script>
<div class="px-2  p-1 {sBgColor} flex">
  <ThemeSelector />
  <Text4 sText="status bar" />
</div>