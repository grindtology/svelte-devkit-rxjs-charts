<script>
  //-----LIB
  import Tab from './Tab.svelte'

  //-----2.STORES
  import { oColor, sTheme } from '$lib/stores/app'
  //-----5.DATA COMPUTED
  //-----3.DATA LOCAL
  const f = 'TabBar'
  //-----4.PROPS
  export let sActiveTab = 'Account'
  export let aoTab = [
    { sTitle: 'Account', sPath: '/user', sIcon: '' },
    { sTitle: 'Profile', sPath: '/profile', sIcon: '' },
  ]
  //-----5.DATA COMPUTED
  //-----6.DATA WATCH
  //-----7.INIT
  //-----8.METHODS
  export let onClick = (oTab) => {
    console.log('setTab', oTab)
    sActiveTab = oTab.sTitle
  }
</script>

<!-- <div class="flex w-full {$oColor[$sTheme].bg2} ">
  {#each aoTab as oTab}
    <Tab {sActiveTab} {oTab} {onClick} />
  {/each}
</div> -->

<div class="tabs flex justify-around">
  {#each aoTab as oTab}
    <div on:click={onClick(oTab)} class="tab flex-grow  {sActiveTab === oTab.sTitle ? 'tab-bordered tab-active' : ''}">
      {oTab.sTitle}
    </div>
  {/each}
</div>
