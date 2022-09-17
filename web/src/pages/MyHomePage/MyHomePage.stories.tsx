import type { ComponentMeta } from '@storybook/react'

import MyHomePage from './MyHomePage'

export const generated = () => {
  return <MyHomePage />
}

export default {
  title: 'Pages/MyHomePage',
  component: MyHomePage,
} as ComponentMeta<typeof MyHomePage>
