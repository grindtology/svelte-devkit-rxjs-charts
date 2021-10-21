<script>
  //-----4.PROPS
  export let sText = 'title'
  export let sColor = ''
  //-----COMPONENTS
  import Text from './_text.svelte'
</script>

<Text sFontSize="text-md" {sText} {sColor} />
