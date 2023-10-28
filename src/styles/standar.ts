import { StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants'

export const containerDimensions = StyleSheet.create({
    dimensions: {
        height: Dimensions.get('window').height - (90 + 45),
        width: Dimensions.get('window').width,
        marginTop: (Constants.statusBarHeight)
    }
})