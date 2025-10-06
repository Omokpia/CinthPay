import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles";
import { router } from "expo-router";
import { useEffect } from "react";
import { COLORS, SIZES } from "../theme/theme";



const Onboarding = () =>{

    return(

        <SafeAreaView style={styles.container}>

            <View style={{marginTop:Dimensions.get('screen').height*.15}}>

                <Text style={{fontFamily:"semibold",color:"#001E63", fontSize:36}}>
                    For{'\n'}Hassle-Free{'\n'}International{'\n'}
                    <Text style={{color:COLORS.red}}>Money Transfers</Text>
                </Text>

            </View>

             <View style={{position:'absolute', left:10, top:400}}>

                <Image style={{height:420, width:350}} 
                source={require('../assets/images/onboard.png')}/>

            </View>





        </SafeAreaView>
    )
}

export default Onboarding;