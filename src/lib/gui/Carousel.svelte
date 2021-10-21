<script>
  //-----1.LIB
  import { onMount } from 'svelte'
  //-----2.STORES
  //-----3.DATA LOCAL
  //-----4.PROPS
  export let oItemComponent = {}
  export let aoItem = []
  export let onSelect = null
  let xScroll = 0
  let yScroll = 0
  let box
  function parseScroll() {
    xScroll = box.scrollLeft
    yScroll = box.scrollTop
  }

  //-----5.DATA COMPUTED
  //-----6.DATA WATCH
  $: {
    // console.log(xScroll)
  }
  //-----7.INIT
  onMount(() => {
    box.scrollLeft = 500
  })
  //-----8.METHODS
  const _onSelect = (oItem) => onSelect(oItem)
</script>

{#if aoItem?.length > 0}
  <div class="carousel box" bind:this={box} on:scroll={parseScroll}>
    {#each aoItem as oItem}
      <div class="m-2 border-2 carousel-item" on:click={_onSelect}>
        <svelte:component this={oItemComponent} {oItem} />
      </div>
    {/each}
  </div>
{/if}

<!-- <img src="https://picsum.photos/id/500/256/144" /> -->
