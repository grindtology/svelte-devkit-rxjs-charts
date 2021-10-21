<script>
  import Icon from "../icon/_Icon.svelte"
  export let sColor = ""
  export let bChecked = false
  export let sLabel = ""
  export let onClick = ""
const f = "BaseCheckBox"
  const _onClick = () => {
    console.log(f, "_onClick")
    if(onClick) onClick()
  }
  $:sIcon = bChecked ? "radiobox-marked" : "radiobox-blank"
</script>
  <div class="flex pt-2 pb-2" on:click={_onClick}>
 
      <Icon {sColor} {sIcon} {sLabel}  />
 
  </div>

