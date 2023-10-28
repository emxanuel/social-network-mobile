import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { Link, useNavigate } from 'react-router-native'
import StyledText from './StyledText'
import { useUserContext } from './UserContext'
import { userDefault } from './UserContext'
import { Dimensions } from 'react-native'
import { containerDimensions } from '../styles/standar'

const AppBar = () => {
    const { setUser } = useUserContext()
    const navigate = useNavigate()
    return (
        <View style={styles.container}>
            <View>
                <Link to='/'><StyledText big white bold><Text>SN</Text></StyledText></Link>
            </View>
            <TouchableHighlight onPress={() => {
                setUser(userDefault)
                navigate('/')
            }}><StyledText white><Text>Logout</Text></StyledText></TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0871a8',
        flexDirection: 'row',
        width: Dimensions.get('screen').width,
        alignItems: "center",
        justifyContent: "space-around",
        height: 45,
        marginTop: containerDimensions.dimensions.marginTop
    },
})

export default AppBar