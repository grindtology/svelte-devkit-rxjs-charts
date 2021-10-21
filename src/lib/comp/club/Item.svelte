<script>
  //-----1.LIB
  import Text2 from '$lib/text/Text2.svelte'
  import Text3 from '$lib/text/Text3.svelte'
  //-----2.STORES
  //-----3.DATA LOCAL
  //-----4.PROPS
  export let oItem
  export let _onClick = () => {
    console.log('Card onClick')
  }

  //-----5.DATA COMPUTED
  //-----6.DATA WATCH
  //-----7.INIT
  //-----8.METHODS
</script>

<!-- CARD -->
<div
  on:click={_onClick()}
  class="relative w-full rounded-sm bg-gray-200 w-100 h-full"
  style="width:250px; height:150px; box-shadow: 3px 3px 4px grey;
  background-repeat: no-repeat;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url('{oItem.src}');
  background-position: center center;
  background-size: cover;">
  <div class="absolute text-white bottom-1 left-2">
    <!-- TITLE -->

    <Text2 sText={oItem.sTitle} />

    <!-- DETAILS -->
    <p class="text-xs font-thin">
      {#if oItem.sSubTitle}
        <Text3 sText={oItem.sSubTitle} />
      {/if}
      {#if oItem.nPrice}
        <Text3 sText={oItem.nPrice + ' EUR'} />
      {/if}
    </p>
  </div>
</div>
