<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import Icon from "./Icon.svelte"


</script>

<Meta
  title="common/image/Icon"
  component={Icon}
  argTypes={{
    bDisabled: { control: "boolean" },
    sSrc: {type:"select", options:["static/favicon.png", "static/uploadBlack.svg"]},
   // sColor: { type: "select", options:["","blue", "yellow", "red", "green"] },
    sSize: {
      control: { type: "select", options: ["lg", "md", "sm"] },
    },
     onClick: { action: ""} ,
  }}
/>

<Template let:args>
  <Icon {...args}  on:click = {args.onClick} />
</Template>

<Story
  name="Generic"
  args={{
    bDisabled: false,
    sSrc: "",
  //  sColor: "green",
    sSize:"sm"
  }}
/>



