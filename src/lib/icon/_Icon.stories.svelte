<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Icon from './_Icon.svelte'

  let count = 0
  function handleClick() {
    count += 1
  }
</script>

<Meta
  title="common/icon/Icon"
  component={Icon}
  argTypes={{
    bDisabled: { control: 'boolean' },
    sIcon: { type: 'select', options: ['home', 'arrow-left', 'tray-arrow-down'] },
    sLabel: { control: 'text' },
    sColor: { type: 'select', options: ['', 'blue', 'yellow', 'red', 'green'] },
    sSize: {
      control: { type: 'select', options: ['lg', 'md', 'sm'] },
    },
  }} />

<Template let:args>
  <Icon {...args} on:click={handleClick} />
</Template>

<Story
  name="Generic"
  args={{
    bDisabled: false,
    sLabel: 'label',
    sIcon: 'home',
    sColor: 'green',
    sSize: 'sm',
  }} />
