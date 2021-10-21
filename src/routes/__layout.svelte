<script>
  import { oColor, sTheme } from '$lib/stores/app'
  import '../styles/tailwind.css'
  import StatusBar from '$lib/gui/StatusBar.svelte'
</script>

<div class={$sTheme}>
  <div class="fixed top-0 bottom-0 left-0 right-0   bg-{$oColor[$sTheme].bg2}">
    <StatusBar />
    <slot />
  </div>
</div>
