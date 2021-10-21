<script>
  //-----1.LIB
  import Carousel from '$lib/gui/Carousel.svelte'
  import Header from '$lib/gui/Header.svelte'
  import Back from '$lib/icon/Back.svelte'
  import Music from '../../routes/music.svelte'

  //-----2.STORES
  import Item from '$lib/comp/club/Item.svelte'
  //-----3.DATA LOCAL
  const f = '/account/club.svelte: '
  const aoClub = [
    { id: 1, sTitle: 'one', src: 'https://picsum.photos/id/500/256/144' },
    { id: 2, sTitle: 'two', src: 'https://picsum.photos/id/501/256/144' },
    { id: 1, sTitle: 'three', src: 'https://picsum.photos/id/500/256/144' },
    { id: 2, sTitle: 'four', src: 'https://picsum.photos/id/501/256/144' },
    { id: 1, sTitle: 'five', src: 'https://picsum.photos/id/500/256/144' },
    { id: 2, sTitle: 'six', src: 'https://picsum.photos/id/501/256/144' },
  ]
  //-----4.PROPS
  //-----5.DATA COMPUTED
  //-----6.DATA WATCH
  //-----7.INIT
  //-----8.METHODS
  const onSelect = (oItem) => {
    console.log(f, 'onselect: ', oItem)
  }
</script>

<Header sTitle1="Club">
  <div slot="btn1"><Back /></div>
</Header>

<div class="pl-2">
  <Carousel aoItem={aoClub} oItemComponent={Item} {onSelect} />
</div>
