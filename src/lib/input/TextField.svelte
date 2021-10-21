<script>
  //-----1.LIB
  //-----2.STORES
  import { oColor, sTheme } from '$lib/stores/app'
  //-----3.DATA LOCAL

  //-----4.PROPS
  export let sText = ''
  export let sLabel = ''
  export let bDisabled = false
  export let noBorder = false
  export let onFocus = () => {}

  //-----5.DATA COMPUTED
  $: border = () => {
    let sResult = 'border-2 border-gray-400 rounded'
    if (noBorder) {
      sResult = 'border-0'
    }
    return sResult
  }

  //-----6.DATA WATCH
  //-----7.INIT
  //-----8.METHODS
</script>

<div class="relative ">
  <div style="font-size:10px;padding-left:10px;" class="absolute top-0 pt-1 text-gray-500 dark:text-gray-800 uppercase">
    {sLabel}
  </div>
  <input
    {bDisabled}
    class="{bDisabled
      ? 'text-gray-600'
      : ''} w-full h-12 pt-4 pl-2  align-text-bottom bg-white dark:bg-gray-600 {border()}"
    on:focus={onFocus()}
    bind:value={sText} />
</div>
