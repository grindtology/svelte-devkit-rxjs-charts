<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Upload from './_Upload.svelte'
</script>

<Meta
  title="common/button/_Upload"
  component={Upload}
  argTypes={{
    bDisabled: { control: 'boolean' },
    sIcon: { type: 'select', options: ['home', 'arrow-left'] },
    sText: { control: 'text' },
    sColor: { type: 'select', options: ['', 'blue', 'yellow', 'red', 'green'] },
    sWidth: {
      control: { type: 'select', options: ['w-full', 'w-40', 'w-20'] },
    },
    onClick: { action: '' },
  }} />

<Template let:args>
  <Upload {...args} on:click={args.onClick} />
</Template>

<Story
  name="Generic"
  args={{
    bDisabled: false,
    sText: 'text',
    sColor: 'green',
  }} />
