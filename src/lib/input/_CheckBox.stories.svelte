<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import CheckBox from './_CheckBox.svelte'

  let bCheck = false
  const onClick = () => {
    console.log('test')
    bCheck = !bCheck
  }

  // continue>
  // make BaseCheckBox > BaseMarker
  // Base marker will only have argTypes
  // CheckBox will have toggle script, and no argTypes (all defined in script tags, see above)
</script>

<Meta
  title="common/input/_CheckBox"
  component={CheckBox}
  argTypes={{
    // bChecked: bCheck,
    sLabel: { controls: 'text' },
    sColor: { type: 'select', options: ['', 'blue', 'yellow', 'red', 'green'] },
    // onClick: { action: test()}
  }} />

<Template let:args>
  <CheckBox {...args} bChecked={bCheck} {onClick} />
</Template>

<Story
  name="unchecked"
  args={{
    bChecked: false,
    sLabel: 'label',
  }} />
<Story
  name="checked"
  args={{
    bChecked: true,
    sLabel: 'label',
  }} />
