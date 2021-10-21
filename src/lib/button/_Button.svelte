<script>
  //-----1.LIB
  import Icon from '$lib/icon/_Icon.svelte'
  import { oColor, sTheme, oCol } from '$lib/stores/app'
  import Text2 from '$lib/text/Text2.svelte'
  //-----2.STORES

  //-----3.DATA LOCAL
  const f = '_Button.svelte'
  let sHeight = ''
  let sOpacity = ''
  let sShadow = ''

  //-----4.PROPS
  export let sText = 'text'
  export let bDisabled = false
  export let bShadow = false
  export let onClick = null
  export let sColor = ''
  export let sIcon = ''
  export let sType = 'btn-accent'

  export let sSize = ''
  export let sAlign = 'start'

  //-----5.DATA COMPUTED

  //-----6.DATA WATCH
  $: {
    if (sSize === 'md' || sSize === 'lg') {
      sHeight = 'h-20'
    }
    if (bDisabled) {
      sOpacity = 'opacity-50'
    }
    if (bShadow) {
      sShadow = 'shadow-md'
    }
    if (sColor) {
      sType = ''
    } else {
      sType = 'btn-' + sType
    }
  }

  //-----8.METHODS
  const _onClick = () => {
    console.log(f, '_onClick')
    if (!bDisabled && onClick) {
      onClick()
    }
  }
</script>

<!-- border-{sColor}-500 dark:border-{sColor}-500
  text-{sColor}-500  dark:text-{sColor}-500 -->
<!-- hover:bg-{$oColor[$sTheme].bg3} -->

<!-- <button
  on:click={_onClick}
  class="{sPadding} flex items-center
  justify-{sAlign} {sHeight} {sOpacity}  {sWidth}  
   text-xs font-medium leading-6  
   uppercase transition 
  bg-transparent border-2 
shadow-md
 {oCol[`sBtnBorder-l-${sColor}`]} dark:{oCol[`sBtnBorder-d-${sColor}`]}
 {oCol[`sText-l-${sColor}`]} dark:{oCol[`sText-d-${sColor}`]}
 hover:{oCol[`sBtnHoverBg-l-${sColor}`]} dark:hover:{oCol[`sBtnHoverBg-d-${sColor}`]}
  rounded
  focus:outline-none">
  {#if sIcon}
    <Icon {sIcon} {sSize} sLabel={sText} />
  {:else}
    <Text2 {sText} />
  {/if}
</button> -->

<button
  on:click={_onClick}
  class="btn {sType} flex justify-{sAlign} items-center
  {sHeight} {sOpacity} {sColor} {sShadow} ">
  {#if sIcon}
    <Icon {sIcon} {sSize} {sText} />
  {:else}
    <Text2 {sText} />
  {/if}
</button>
