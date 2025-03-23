import React from 'react'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'

import { NavigationBar } from './component/NavigationBar.tsx'

import './style/tailwind.css'

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationBar/>
    </SafeAreaProvider>
  )
}

export default App
