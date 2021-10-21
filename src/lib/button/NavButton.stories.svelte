<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import NavButton from './NavButton.svelte'
  import { oCol } from '$lib/stores/app'
  console.log('oCol.sAppBg_d_gray', oCol.sAppBg_d_gray)
</script>

<Meta
  title="common/button/NavButton"
  component={NavButton}
  argTypes={{
    sIcon: { type: 'select', options: ['', 'home', 'arrow-left'] },
    sText: { control: 'text' },
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
      <NavButton {...args} on:click={args.onClick} />
    </div>
  </div>
</Template>

<Story
  name="Generic"
  args={{
    bDark: false,
    sText: 'text',
    sIcon: 'home',
  }} />
