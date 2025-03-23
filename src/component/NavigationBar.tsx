import { Pressable, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React, { useState } from 'react'

import Home from '../assets/icon/家.svg'
import Calendar from '../assets/icon/日历.svg'
import Wallet from '../assets/icon/钱包.svg'
import Chart from '../assets/icon/饼图.svg'
import Gear from '../assets/icon/齿轮.svg'
import { PRIMARY } from '../style/color.ts'

export function NavigationBar(): React.JSX.Element {
  const icons = [Home, Wallet, Calendar, Chart, Gear]
  const insets = useSafeAreaInsets()
  const [activeItem, setActiveItem] = useState(0)

  function onClickItem(index: number) {
    // TODO 切换视图
    setActiveItem(index)
  }

  return (
    <View style={[style.container, { paddingBottom: insets.bottom }]}>
      {icons.map((Icon, index) => <Pressable style={style.barItem} onPress={() => {
        onClickItem(index)
      }}>
        <Icon width={30} height={'100%'} fill={index === activeItem ? PRIMARY : '#999999'} />
      </Pressable>)}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    boxShadow: '0 0 4 0 #9999',
    height: 80,
  },
  barItem: {
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
