//-----1.LIB
import { createStorage } from '$lib/js/localStorage'
import {browser} from "$app/env"

//-----2.STORES

//-----3.DATA LOCAL STORAGE
// const f = 'app.js'
// statusbar(24px) + header(44px) + tabbar(40) = 86px
export const iListHeight = createStorage("app-iListHeight", browser && window.innerHeight - 68)
iListHeight.useLocalStorage()

export const sTheme =  createStorage('app-sTheme', 'light')
sTheme.useLocalStorage()

export const oCol = {
  sAppBg_l_gray: 'bg-gray-500',
  sAppBg_d_gray: 'bg-gray-800',
  'sBtnBorder-l-gray' : 'border-gray-500',
  'sBtnBorder-d-gray' : 'border-gray-500',
  'sBtnHoverBg-l-gray': 'bg-gray-200',
  'sBtnHoverBg-d-gray': 'bg-gray-700',
  'sText-l-gray': 'text-gray-700',
  'sText-d-gray': 'text-gray-400',
}


export const oColor = createStorage('app-oColor',{
  light: {
    green: 'green-500',
    blue: 'blue-500',
    red: 'red-500',
    text1: 'gray-600',
    text2: 'gray-500',
    border: 'gray-600',
    orange: 'yellow-600',
    midGray: 'gray-600',
    darkGray: 'gray-400',
    bg1: 'gray-300',
    bg2: 'gray-100',
    bg3: 'gray-200',
    bg4: 'gray-300',
  },
  dark: {
    green: 'green-400',
    blue: 'blue-100',
    red: 'red-400',
    text1: 'gray-400',
    text2: 'gray-500',
    border: 'gray-400',
    orange: 'yellow-600',
    lightGray: 'gray-400',
    midGray: 'gray-600',
    darkGray: 'gray-800',
    bg1: 'gray-800',
    bg2: 'gray-700',
    bg3: 'gray-600',
    bg4: 'gray-500',
  },
})
oColor.useLocalStorage()

//-----4.PROPS
//-----5.DATA COMPUTED

//-----8.METHODS