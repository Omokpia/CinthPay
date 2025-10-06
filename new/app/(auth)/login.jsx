import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View, StyleSheet, TextInput, Image, 
    Keyboard, Button, TouchableOpacity } from "react-native"
import authStyles from "./styles"
import {COLORS, SIZES} from "../../theme/theme"
import {Link} from 'expo-router'




const Login = () => {
    return(
        <SafeAreaView style={authStyles.container}>

            <View style={{marginTop:20}}>
                <Text style={{textAlign:"right", fontFamily:"regular", 
                    color:COLORS.black}}>You have an account?
                     <Link style={{color:COLORS.primary}} href={''}> Login</Link>
                     </Text>
            </View>

            <View style={{gap:5, marginTop:20,}}>
                <Text style={loginStyles.mainText}>Welcome to 
                     <Text style={{color:COLORS.primary}}> Cynth</Text>Pay</Text>
                <Text style={loginStyles.subText}>
                    Type in your mobile number to get started</Text>
            </View>

            <View style={loginStyles.form}>
                <Text style={authStyles.formText}>Phone number</Text>

                <View style={loginStyles.input}>

                    <View style={{flexDirection:"row", alignItems:"center", gap:10,
                         borderRightWidth:2, borderColor:COLORS.border, paddingHorizontal:10}}>
                        <Image style={{width:24, height:24}} 
                        source={require('../../assets/images/Nigeria.png')}/>
                        <Text style={{fontFamily:"medium"}}>+234</Text>
                    </View>

                    <TextInput maxLength={10}

                    returnKeyType="done"
                    
                    keyboardType="number-pad"  
                    style={{width:"73%", paddingLeft:20}} 
                    onBlur={() => Keyboard.dismiss()}/>
                </View>
                
            </View>

            <View style={loginStyles.form}>
                <Text style={authStyles.formText}>Email Address</Text>

                <View style={loginStyles.input}>
                    <TextInput keyboardType='email-address' 
                    style={{width:"100%", padding:10}}/>
                </View>
            </View>

            <View style={{marginTop:50}}>
                <TouchableOpacity style={{backgroundColor:COLORS.primary,
                     height:56, borderRadius:12}}>
                    <Text style={{color:COLORS.white, fontFamily:"semibold",
                         textAlign:"center", top:16, fontSize:SIZES.button}}>Continue</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{textAlign:"center",marginTop:10, 
                    fontFamily:"regular", color:COLORS.grey}}>
                        By continuing you agree to our 
                        <Text style={loginStyles.policy}> Terms of Service </Text> 
                        and <Text style={loginStyles.policy}>Privacy Policy.</Text>
                        </Text>
            </View>

        </SafeAreaView>
    )
}

export default Login;



const loginStyles = StyleSheet.create({
    mainText:{
        fontFamily:"semibold",
        color:COLORS.black,
        fontSize:SIZES.heading,

    },
    subText:{
        color:COLORS.grey,
        fontSize:SIZES.regular,
        fontFamily:"regular"
    },
    form:{
        marginVertical:20,
    },
    input:{
        borderWidth:2,
        borderRadius:12,
        borderColor:COLORS.border,
        // padding:10,
        flexDirection:"row",
        height:50,
    },
    policy:{
        color:COLORS.primary,
        fontFamily:"medium",
        textDecorationLine:"underline"
    }
})