import { StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants'

export const containerDimensions = StyleSheet.create({
    dimensions: {
        height: Dimensions.get('window').height - (45 + Constants.statusBarHeight),
        width: Dimensions.get('window').width,
        marginTop: (45 + Constants.statusBarHeight)
    }
})