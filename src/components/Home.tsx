import React from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import StyledText from './StyledText'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import { containerDimensions } from '../styles/standar'
import { useUserContext } from './UserContext'

const Home = () => {
    const user = useUserContext();
    console.log(user)
    return (
        <View style={styles.container}>
            <StyledText big bold><Text>Welcome to SN</Text></StyledText>
            <View>
                <StyledText medium><Text>Contact your friends by the fastest way</Text></StyledText>
            </View>
            <View style={styles.links}>
                <Link to='/register'><StyledText medium blue><Text>Create an account</Text></StyledText></Link>
                <Link to='/login'><StyledText medium blue><Text>Im already have an account</Text></StyledText></Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: containerDimensions.dimensions.height,
        width: containerDimensions.dimensions.width,
        marginTop: containerDimensions.dimensions.marginTop,
        alignItems: 'center',
        justifyContent: 'center',
    },
    links: {
        marginTop: 20,
        color: 'blue',
        alignItems: 'center',
        gap: 10
    }

})

export default Home