<script>
  import { SVG } from './svg'
  export let sIcon = 'home'
  export let sSize = 'sm'
  export let bDisabled = false
  let d = ''
  let sWidth = '24'
  let sHeight = '24'
  let sOpacity = 'opacity-100'
  $: {
    sOpacity = bDisabled ? 'opacity-30' : ''
    if (sSize === 'lg') {
      sHeight = '48'
      sWidth = '48'
    } else if (sSize === 'md') {
      sHeight = '36'
      sWidth = '36'
    } else if (sSize === 'sm') {
      sHeight = '24'
      sWidth = '24'
    } else if (sSize === 'xs') {
      sHeight = '16'
      sWidth = '16'
    }
  }
</script>

<div class={sOpacity}>
  <svg style="width:{sWidth}px;{sHeight}:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d={SVG[sIcon]} />
  </svg>
</div>
