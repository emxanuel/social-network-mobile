import React from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import StyledText from '../components/StyledText'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import { containerDimensions } from '../styles/standar'
import { useUserContext } from '../components/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
    const {user} = useUserContext();
    return (
        <View style={user.id === 0 ? styles.containerUnlogged : styles.container}>
            {user.id !== 0 ? (
                <View style={{
                    display: 'flex',
                    gap: 10
                }}>
                    <StyledText big bold><Text>Welcome Back</Text></StyledText>
                    <View style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Link to={'/contacts'}><StyledText medium blue><Text>See Contacts</Text></StyledText></Link>
                        <Link to={'/requests'}><StyledText medium blue><Text>See Requests</Text></StyledText></Link>
                        <Link to={'/search'}><StyledText medium blue><Text>Search Friends</Text></StyledText></Link>
                    </View>
                </View>
            ) : (
                <View style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <StyledText big bold><Text>Welcome to SN</Text></StyledText>
                    <View>
                        <StyledText medium><Text>Contact your friends by the fastest way</Text></StyledText>
                    </View>
                    <View style={styles.links}>
                        <Link to='/register'><StyledText medium blue><Text>Create an account</Text></StyledText></Link>
                        <Link to='/login'><StyledText medium blue><Text>Im already have an account</Text></StyledText></Link>
                    </View>
                </View>
            )}
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
    containerUnlogged: {
        height: Dimensions.get('window').height - 80,
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