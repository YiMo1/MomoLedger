import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { NavigationBar } from './component/NavigationBar.tsx'
import { initDB } from './shared/database.ts'

import './style/tailwind.css'

initDB()

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationBar/>
    </SafeAreaProvider>
  )
}

export default App
