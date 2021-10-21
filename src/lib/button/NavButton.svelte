<script>
  //-----1.LIB
  import Button from '$lib/button/_Button.svelte'
  //-----2.STORES

  //-----3.DATA LOCAL
  const f = 'NavButton.svelte'

  //-----4.PROPS
  export let sText = 'text'
  export let bDisabled = false
  export let onClick
  export let sColor = ''
  export let sIcon = ''

  //-----5.DATA COMPUTED

  //-----6.DATA WATCH

  //-----8.METHODS
  const _onClick = () => {
    console.log(f, '_onClick')
    if (!bDisabled && onClick) {
      onClick()
    }
  }
</script>

<Button onClick={_onClick} bShadow="true" sColor="btn-primary" {sIcon} {sText} sSize="md" />
