import { StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants'
import { useUserContext } from "../components/UserContext";

export const containerDimensions = StyleSheet.create({
    dimensions: {
        height: Dimensions.get('window').height - (100 + 45),
        width: Dimensions.get('window').width,
        marginTop: (Constants.statusBarHeight)
    }
})