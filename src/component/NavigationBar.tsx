import { Pressable, type PressableProps, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React, { useState } from 'react'

import Home from '../assets/icon/家.svg'
import Calendar from '../assets/icon/日历.svg'
import Wallet from '../assets/icon/钱包.svg'
import Chart from '../assets/icon/饼图.svg'
import Gear from '../assets/icon/齿轮.svg'
import { PRIMARY } from '../style/color.ts'

import type { SvgProps } from 'react-native-svg'

export function NavigationBar({ height }: { height: number }): React.JSX.Element {
  const icons = [Home, Wallet, Calendar, Chart, Gear]
  const insets = useSafeAreaInsets()
  const [activeItem, setActiveItem] = useState(0)

  function onClickItem(index: number) {
    // TODO 切换视图
    setActiveItem(index)
  }

  return (
    <View style={[style.container, { paddingBottom: insets.bottom, height }]}>
      { icons.map((icon, index) => <NatigationBarItem
        key={index} icon={icon} active={index === activeItem} onPress={() => {
          onClickItem(index)
        }} />) }
    </View>
  )
}

type NatigationBarItemProps = {
  icon: React.FC<SvgProps>
  active: boolean
} & PressableProps

function NatigationBarItem({
  icon: Icon,
  active,
  ...rest
}: NatigationBarItemProps): React.JSX.Element {
  return (
    <Pressable style={style.barItem} {...rest}>
      <Icon width={30} height={100} fill={active ? PRIMARY : '#999999'} />
    </Pressable>
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
  },
  barItem: {
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
