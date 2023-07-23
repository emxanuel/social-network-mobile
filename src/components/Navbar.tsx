import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'
import StyledText from './StyledText'

const Navbar = () => {
    return (
        <View style={styles.container}>
            <View>
                <Link to='/'><StyledText big white bold><Text>SN</Text></StyledText></Link>
            </View>
            <View style={{
                flexDirection: "row", justifyContent: 'space-between',
                width: 180
            }}>
                <Link to='/login'><StyledText white><Text>Login</Text></StyledText></Link>
                <Link to='/register'><StyledText white><Text>Register</Text></StyledText></Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0871a8', flexDirection: 'row', width: Dimensions.get('screen').width,
        alignItems: "center", justifyContent: "space-around", height: 45, 
        position: 'absolute', marginTop: Constants.statusBarHeight
    }
})

export default Navbar