<script>
  import { fly } from 'svelte/transition'
</script>

<div
  class="fixed top-0 w-screen h-screen bg-white"
  transition:fly={{
    delay: 0,
    y: 100,
    duration: 200,
  }}>
  <!-- MARGIN BOTTON -->
  <div class="pb-5" />
  <slot />
</div>
