<script>
  //-----1.LIB
  import Icon from '@iconify/svelte'
  import Svg from '$lib/svg/Svg.svelte'
  import { oColor } from '$lib/stores/app'
  import Text2 from '$lib/text/Text2.svelte'

  //-----2.STORES
  import { sTheme } from '$lib/stores/app'

  //-----3.DATA LOCAL
  let sWidth = '20'
  let sHeight = '20'

  //-----4.DATA PROPS
  export let bDisabled = false
  export let onClick = null
  export let sColor = ''
  export let sType = ''
  export let sIcon = 'home'
  export let sText = ''
  export let sSize = 'sm'
  export let sPadding = 'p-2'

  //-----5.DATA COMPUTED
  $: sOpacity = bDisabled ? 'opacity-30' : ''
  $: sClass = `
  ${sPadding} flex justify-start 
  items-center ${sOpacity}

  `
  //-----6.DATA WATCH
  $: {
    if (sSize === 'lg') {
      sHeight = '40'
      sWidth = '40'
    } else if (sSize === 'md') {
      sHeight = '30'
      sWidth = '30'
    } else if (sSize === 'sm') {
      sHeight = '20'
      sWidth = '20'
    } else if (sSize === 'xs') {
      sHeight = '16'
      sWidth = '16'
    }
  }

  //-----7.INIT

  //-----8.METHODS
  const _onClick = () => {
    if (onClick) onClick()
  }
</script>

<div class="{sClass}  {sType}" on:click={_onClick}>
  <Svg {sIcon} {sSize} {bDisabled} />
  <div class="flex pl-2"><Text2 {sText} /></div>
</div>
