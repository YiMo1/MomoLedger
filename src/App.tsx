import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import { NavigationBar } from './component/NavigationBar.tsx'
import { initDB } from './database/index.ts'

import './style/tailwind.css'

initDB()

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <NavigationBar/>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App
