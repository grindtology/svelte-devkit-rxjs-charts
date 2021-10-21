<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import BaseButton from './_Button.svelte'
  import { oCol } from '$lib/stores/app'
  console.log('oCol.sAppBg_d_gray', oCol.sAppBg_d_gray)
</script>

<Meta
  title="common/button/_Button"
  component={BaseButton}
  argTypes={{
    bDark: { control: 'boolean' },
    bDisabled: { control: 'boolean' },
    sSize: { type: 'select', options: ['sm', 'md', 'lg'] },
    sIcon: { type: 'select', options: ['', 'home', 'arrow-left'] },
    sText: { control: 'text' },
    sColor: { type: 'select', options: ['', 'gray', 'border', 'blue', 'yellow', 'red', 'green'] },
    sWidth: {
      control: { type: 'select', options: ['w-full', 'w-40', 'w-20'] },
    },
    onClick: { action: '' },
    sTheme: {
      options: [0, 1], // iterator
      mapping: ['dark', ''], // values
      control: {
        type: 'select',
        labels: ['dark', 'light'],
      },
    },
  }} />

<Template let:args>
  {args.myValueList}
  <div class={args.bDark ? 'dark' : ''}>
    <div class="fixed top-0 bottom-0 left-0 right-0 p-10 dark dark:bg-gray-700">
      <BaseButton {...args} on:click={args.onClick} />
    </div>
  </div>
</Template>

<Story
  name="Generic"
  args={{
    bDark: false,
    bDisabled: false,
    sText: 'text',
    sIcon: '',
    sSize: 'md',
    sColor: '',
    sWidth: '',
  }} />

<Story
  name="Disabled"
  args={{
    bDisabled: true,
    sText: 'text',
    sIcon: '',
    sColor: 'green',
    sWidth: '',
  }} />

<Story
  name="full width"
  args={{
    sWidth: 'w-full',
    sText: 'full width Button',
    sColor: '',
  }} />

<Story
  name="Small"
  args={{
    sWidth: 'w-40',
    sText: 'w-40 Button',
    sColor: '',
  }} />
