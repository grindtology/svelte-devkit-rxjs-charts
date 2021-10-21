<script>
  //-----1.LIB
  import Icon from '../icon/_Icon.svelte'
  import { goto } from '$app/navigation'

  //-----2.STORES
  //-----3.DATA LOCAL
  //-----4.PROPS
  //-----5.DATA COMPUTED
  //-----6.DATA WATCH
  //-----7.INIT

  //-----8.METHODS
  const goBack = () => {
    const sPath = window.location.pathname
    const p = sPath.substring(0, sPath.lastIndexOf('/')) || '/'
    goto(p, { noscroll: true, keepfocus: true })
  }
</script>

<Icon sIcon="arrow-left" sType="text-primary" onClick={goBack} />
