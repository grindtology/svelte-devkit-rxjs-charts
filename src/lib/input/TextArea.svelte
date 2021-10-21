<script>
  export let sText = 'text'
  export let sLabel = '...'
  export let disabled = ''
  export let noBorder = false
  export let onFocus = () => {}
  $: border = () => {
    let sResult = 'border-2 border-gray-400 rounded'
    if (noBorder) {
      sResult = 'border-0'
    }
    return sResult
  }
</script>

<div class="relative">
  <div style="font-size:10px;padding-left:10px;" class="absolute top-0 pt-1 text-gray-500 uppercase">
    {sLabel}
  </div>
  <textarea {disabled} class="w-full h-36 pt-4 p-2  bg-white {border()}" on:focus={onFocus()} bind:value={sText} />
</div>
