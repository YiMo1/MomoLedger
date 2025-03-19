import React from 'react'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'

import { NavigationBar } from './component/NavigationBar.tsx'

function App(): React.JSX.Element {
  const navbarHeight = 80

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationBar height={navbarHeight} />
    </SafeAreaProvider>
  )
}

export default App
