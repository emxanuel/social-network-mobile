import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-native'
import { getUserById } from '../functions/users';
import { UserData } from '../components/UserContext';
import { View, Text, StyleSheet } from 'react-native';
import { containerDimensions } from '../styles/standar';
import StyledText from '../components/StyledText';
import { getChat } from '../functions/chat';
import { useUserContext } from '../components/UserContext';

const Chat = () => {
    const [friend, setFriend] = useState<UserData>()
    const params = useParams();
    const { user } = useUserContext()

    try{
        useEffect(() => {
            getUserById(parseInt(params.id), setFriend)
        }, [])
    
        return (
            <View style={styles.container}>
                {
                    friend !== undefined? (
                        <View>
                            <StyledText big bold><Text>{`${friend.first_name}${friend.last_name}`}</Text></StyledText>
                            <View>

                            </View>
                        </View>
                    ) : (
                        <View>
                            <StyledText bold medium><Text>Loading...</Text></StyledText>
                        </View>
                    )
                }
            </View>
        )
    }
    catch(e){
        console.log(e)
    }


}

export default Chat

const styles = StyleSheet.create({
    container: {
        height: containerDimensions.dimensions.height,
        width: containerDimensions.dimensions.width,
        marginTop: containerDimensions.dimensions.marginTop,
        alignItems: 'center'
    },
})