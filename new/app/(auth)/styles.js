


import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme/theme";



const authStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        paddingHorizontal: '20%',

    },
    formText:{
        fontFamily:"medium",
        fontSize:SIZES.regular,
        color:COLORS.black,
        marginBottom:5,
    }
})

export default authStyles;