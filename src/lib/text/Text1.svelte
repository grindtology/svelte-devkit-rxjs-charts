<script>
  //-----4.PROPS
  export let sText = 'title'
  export let sAlign = ''
  //-----COMPONENTS
  import Text from './_text.svelte'
</script>

<Text {sAlign} sFontSize="text-lg" sColor="text1" {sText} />
