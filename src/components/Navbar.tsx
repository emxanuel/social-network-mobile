import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import Constants from 'expo-constants'
import { Link, useNavigate } from 'react-router-native'
import StyledText from './StyledText'
import { useUserContext, userDefault, saveContext } from './UserContext'

const Navbar = () => {
    const user = useUserContext();
    const navigate = useNavigate()
    return (
        <View style={styles.container}>
            {user.id !== 0 ? (
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <View>
                        <Link to='/'><StyledText big white bold><Text>SN</Text></StyledText></Link>
                    </View>
                    <View style={{
                        flexDirection: "row", 
                        gap: 15
                    }}>
                        <Link to='/contacts'><StyledText white><Text>Contacts</Text></StyledText></Link>
                        <Link to='/search'><StyledText white><Text>Search</Text></StyledText></Link>
                        <Link to='/requests'><StyledText white><Text>Requests</Text></StyledText></Link>
                        <TouchableHighlight onPress={() => {
                            saveContext(userDefault)
                            navigate('/')
                        }}><StyledText white><Text>Logout</Text></StyledText></TouchableHighlight>
                    </View>
                </View>
            ) : (
                <View style={{
                    flexDirection: "row", 
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%'
                }}>
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
            )}

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