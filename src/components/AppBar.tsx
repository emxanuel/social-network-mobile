import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { Link, useNavigate } from 'react-router-native'
import StyledText from './StyledText'
import { useUserContext } from './UserContext'
import { userDefault } from './UserContext'
import { Dimensions } from 'react-native'
import { containerDimensions } from '../styles/standar'

const AppBar = () => {
    const { user, setUser } = useUserContext()
    return (
        <View style={user.id === 0 ? { display: 'none' } : {}}>
            <View style={styles.container}>
                <View>
                    <Link underlayColor={'transparent'} to='/'><StyledText big white bold><Text>SN</Text></StyledText></Link>
                </View>
                <Link underlayColor={'transparent'} to={'/'} onPress={() => {
                    setUser(userDefault)
                }}><StyledText white><Text>Logout</Text></StyledText></Link>
            </View>
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