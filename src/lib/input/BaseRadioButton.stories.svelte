<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import BaseRadioButton from "./BaseRadioButton.svelte"

</script>


<Meta
  title="common/input/BaseRadioButton"
  component={BaseRadioButton}
  argTypes={{
    bChecked: { control: "boolean" },
    sLabel: {controls:"text"},
     sColor: { type: "select", options:["","blue", "yellow", "red", "green"] },
     onClick: { action: ""} ,
  }}
/>

<Template let:args>
  <BaseRadioButton {...args}   on:click={args.onClick} />
</Template>

<Story
  name="unchecked"
  args={{
   bChecked: false,
   sLabel: "unchecked"
  }}
/>
<Story
  name="checked"
  args={{
   bChecked: true,
   sLabel: "checked"
  }}
/>



