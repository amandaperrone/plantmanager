import React from 'react'
import AppLoading from  'expo-app-loading'

import Routes from './src/routes'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'

export default function App() {
  const [ fontsLoadead ] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  });

  if(!fontsLoadead)
    return <AppLoading />

  return (
      <Routes />
  )
}
