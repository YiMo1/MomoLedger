import { Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { cssInterop } from 'nativewind'

import Home from '../assets/icon/家.svg'
import Calendar from '../assets/icon/日历.svg'
import Wallet from '../assets/icon/钱包.svg'
import Chart from '../assets/icon/饼图.svg'
import Gear from '../assets/icon/齿轮.svg'

export function NavigationBar(): React.JSX.Element {
  const icons = [Home, Wallet, Calendar, Chart, Gear].map((item) => cssInterop(
    item,
    { className: { target: 'style' } },
  ))

  const [activeItem, setActiveItem] = useState(0)

  function onClickItem(index: number) {
    // TODO 切换视图
    setActiveItem(index)
  }

  return (
    <View className='pb-safe h-20 flex-row bg-white' style={{ boxShadow: '0 0 4 #9996' }}>
      {icons.map((Icon, index) => (
        <Pressable
          className='h-full flex-1 items-center justify-center'
          key={index}
          onPress={() => { onClickItem(index) } }>
          <Icon
            className={index === activeItem ? `fill-primary` : 'fill-gray-400'}
            height='100%'
            width={30}/>
        </Pressable>))
      }
    </View>
  )
}
