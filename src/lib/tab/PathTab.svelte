<script>
  //-----1.LIB
  import Icon from "$lib/icon/Icon.svelte"

  //-----2.STORES
  import { sPath } from "$lib/stores/app"

  //-----3.DATA LOCAL

  //-----4.PROPS
  export let sActiveTab = "title"
  export let oTab = { sTitle: "title", sIcon: "home", sPath: "/" }
  export let onClick = (result) => console.log("onClick:", result)

  //-----5.DATA COMPUTED

  //-----6.DATA WATCH

  //-----7.INIT

  //-----8.METHODS
  const _onClick = (result) => {
    $sPath = oTab.sPath
    onClick(result)
  }
</script>

<div
  on:click={_onClick(oTab)}
  class="flex items-center justify-center flex-grow p-2 {sActiveTab ===
  oTab.sTitle
    ? ' bg-gray-500 text-orange-600 text-2xl'
    : 'text-gray-500 text-sm'}
    hover:text-orange-600"
>
  <div class="text-center">
    <span class="block leading-none">{oTab.sTitle}</span>
  </div>
  <div class="p-1">
    <Icon size="w-6  h-6" icon={oTab.sIcon} />
  </div>
</div>
