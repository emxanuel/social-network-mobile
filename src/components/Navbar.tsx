import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import Constants from 'expo-constants'
import { Link, useNavigate } from 'react-router-native'
import StyledText from './StyledText'
import { useUserContext, userDefault, saveContext } from './UserContext'
import { Icon } from '@rneui/themed'

const Navbar = () => {
    const { user, setUser } = useUserContext();
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
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-evenly',
                        width: '100%'
                    }}>
                        <Link underlayColor={'transparent'} to='/contacts'>
                            <View style={styles.button}>
                                <Icon color={'#fff'} style={styles.icon} name='users' type='feather' />
                                <StyledText white><Text>Contacts</Text></StyledText>
                            </View>
                        </Link>
                        <Link underlayColor={'transparent'} to='/search'>
                            <View style={styles.button}>
                                <Icon color={"#fff"} style={styles.icon} name='search' type='feather' />
                                <StyledText white><Text>Search</Text></StyledText>
                            </View>
                        </Link>
                        <Link underlayColor={'transparent'} to='/requests'>
                            <View style={styles.button}>
                                <Icon color={'#fff'} style={styles.icon} name='adduser' type='ant-design' />
                                <StyledText white><Text>Requests</Text></StyledText>
                            </View>
                        </Link>
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
                        <Link underlayColor={'transparent'} to='/'><StyledText big white bold><Text>SN</Text></StyledText></Link>
                    </View>
                    <View style={{
                        flexDirection: "row", justifyContent: 'space-between',
                        width: 180
                    }}>
                        <Link underlayColor={'transparent'} to='/login'><StyledText white><Text>Login</Text></StyledText></Link>
                        <Link underlayColor={'transparent'} to='/register'><StyledText white><Text>Register</Text></StyledText></Link>
                    </View>
                </View>
            )}

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
        height: 80
    },
    button: {
        alignItems: 'center'
    },
    icon:{
        padding: 5,
        borderRadius: 100
    }
})

export default Navbar