<script>
  import { oColor, sTheme } from '$lib/stores/app'
  import Icon from '../icon/_Icon.svelte'
  export let sActiveTab = 'title'
  export let oTab = { sTitle: 'title', sIcon: 'home', sPath: '/' }
  export let onClick = () => {}

  //-----3.DATA LOCAL
  let sClass= ""
  //-----6.DATA WATCH
  $: {
if(sActiveTab === oTab.sTitle) {
  sClass = 'flex items-center justify-center flex-grow text-'+ $oColor[$sTheme].text1 + ' border-b-2' + ' border-'+$oColor[$sTheme].orange
}else {
  sClass = 'flex items-center justify-center flex-grow border-b-1 text-'+ $oColor[$sTheme].text2 + ' border-'+$oColor[$sTheme].bg3 +' text-sm hover:text-orange-600'
}
  }
  // 8.METHODS
  const _onClick = (result) => {
    console.log('tap', result)
    onClick(result)
  }
</script>

<div
  on:click={_onClick(oTab)}
  class={sClass}>
  <Icon sIcon={oTab.sIcon} sColor="" sLabel={oTab.sTitle} />
</div>
