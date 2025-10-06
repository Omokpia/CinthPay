import { Stack } from "expo-router";
import Splash from "./splash";
import { useEffect, useState } from "react";
import {useFonts} from 'expo-font';




export default function RootLayout() {

  const [showSplash, setShowSplash] = useState(true)

  const [loaded, error] = useFonts( {

    regular: require('../assets/fonts/Poppins-Regular.ttf'),
    medium: require('../assets/fonts/Poppins-Medium.ttf'),
    semibold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    bold: require('../assets/fonts/Poppins-Bold.ttf'),
    extrabold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
    black: require('../assets/fonts/Poppins-Black.ttf'),
  })

  useEffect(() =>{

    setTimeout(() =>{

      setShowSplash(false)

    }, 5000)

  })

  if(showSplash){
    return<Splash/>
  }


  return(

    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(auth)"/>


    </Stack>

  )
}
