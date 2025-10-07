import { Stack } from "expo-router";
import Splash from "./splash";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

export default function RootLayout() {

  const [showSplash , setShowSplash] = useState(true)


  const [loaded , error] = useFonts({

    regular : require('../assets/fonts/hinted-Morrison-Regular.otf'),
    semibold : require('../assets/fonts/hinted-Morrison-SemiBold.otf'),
    bold : require('../assets/fonts/hinted-Morrison-Bold.otf'),
    medium : require('../assets/fonts/hinted-Morrison-Medium.otf'),
    italic : require('../assets/fonts/hinted-Morrison-Italic.otf'),
    light : require('../assets/fonts/hinted-Morrison-Light.otf'),
  })


  useEffect(()=>{

    setTimeout(()=>{

      setShowSplash(false)

    }, 300)

  })


  if(showSplash || !loaded){
    return <Splash/>
  }


  return (

    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen options={{headerShown:false}} name="(auth)"/>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="(home)"/>
    </Stack>

  )
}