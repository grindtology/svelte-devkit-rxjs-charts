<script>
  //-----1.LIB
  //-----2.STORES
  //-----3.DATA LOCAL

  //-----4.PROPS
  export let sText = 'text'
  export let sLabel = '...'
</script>

<div class="relative">
  <div style="font-size:10px;padding-left:10px;" class="absolute top-0 pt-1 text-gray-500 dark:text-gray-400 uppercase">
    {sLabel}
  </div>
  <input
    type="password"
    class="w-full h-12   pl-2 align-text-bottom bg-white dark:bg-gray-600 border-2 border-gray-400 rounded  "
    bind:value={sText} />
</div>
