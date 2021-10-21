<script>
  //-----1.LIB
  import Text1 from '$lib/text/Text1.svelte'
  import Text2 from '$lib/text/Text2.svelte'
  import Text3 from '$lib/text/Text3.svelte'

  //-----2.STORES
  import { oColor, sTheme } from '$lib/stores/app'
  //-----3.DATA LOCAL

  //-----4.PROPS
  export let sTitle1 = 'title'
  export let sTitle2 = ''
  export let sTitle3 = ''
  export let sAlign = ''

  //-----5.DATA COMPUTED
  //-----6.DATA WATCH
  //-----7.INIT
  //-----8.METHODS
</script>

<div class=" bg-{$oColor[$sTheme].bg2} ">
  <div class="px-2 py-1 flex  border-b-1 border-{$oColor[$sTheme].bg3}">
    <div class=" flex flex-col justify-center align-center flex-grow">
      <Text1 {sAlign} sText={sTitle1} />
      {#if sTitle2}
        <Text2 {sAlign} sText={sTitle2} />
      {/if}
      {#if sTitle3}
        <Text3 {sAlign} sText={sTitle3} />
      {/if}
    </div>

    <slot name="btn2" />
    <slot name="btn1" />
  </div>
  <div>
    <slot name="tabBar" />
  </div>
  <!-- <div>
    <slot name="body" />
  </div> -->
</div>
