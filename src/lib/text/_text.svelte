<script>
  //-----1.LIB

  import { oColor, sTheme } from '$lib/stores/app'
  //-----2.STORES

  //-----3.DATA LOCAL
  export let sText = 'text'
  export let sFontSize = ''
  export let sColor = 'text1'
  export let sAlign = 'center'

  //-----4.PROPS
  //-----5.DATA COMPUTED
  //-----6.DATA WATCH
  //-----7.INIT
  //-----8.METHODS
</script>

<div class="font-roboto {sFontSize} text-center   text-{$oColor[$sTheme][sColor]}">{sText}</div>
