import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-native';
import { getUserById } from '../functions/users';
import { UserData } from '../components/UserContext';
import { View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { containerDimensions } from '../styles/standar';
import StyledText from '../components/StyledText';
import { getChat } from '../functions/chat';
import { useUserContext } from '../components/UserContext';
import Message, { TMessage } from '../components/Message';
import { Icon } from '@rneui/themed';
import { Link } from 'react-router-native';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

const Chat = () => {
    const [friend, setFriend] = useState<UserData>();
    const params = useParams();
    const { user } = useUserContext();
    const [chat, setChat] = useState<TMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollViewRef = useRef<ScrollView | null>();

    useEffect(() => {
        getUserById(parseInt(params.id), setFriend).then((r) => {
            getChat(user.id, r.id, setLoading, setChat);
        });
    }, []);

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd();
        }
    }, [chat]);

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior='padding'>
            {friend !== undefined ? (
                <View style={styles.chatContainer}>
                    <View style={{ 
                        flexDirection: 'row', 
                        width: containerDimensions.dimensions.width, 
                        paddingHorizontal: 20,
                        
                    }}>
                        <Link to={'/contacts'}><Icon type='feather' name='arrow-left-circle'></Icon></Link>
                        <StyledText big bold style={{ paddingLeft: 30 }}>
                            <Text>{`${friend.first_name} ${friend.last_name}`}</Text>
                        </StyledText>
                    </View>
                    <ScrollView
                        ref={scrollViewRef}
                        style={styles.messagesContainer}
                        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
                    >
                        {loading ? (
                            <View>
                                <Text>Loading...</Text>
                            </View>
                        ) : (
                            chat.map((message) => (
                                <View key={message.id}>
                                    <Message
                                        info={message}
                                        styles={
                                            message.sender === user.id
                                                ? styles.sendedMessage
                                                : styles.receivedMessage
                                        }
                                    />
                                </View>
                            ))
                        )}
                    </ScrollView>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textInput} placeholder='write your message' />
                        <TouchableWithoutFeedback
                            onPress={() => {
                                alert('Button Clicked!')
                            }}
                        >
                            <Icon style={{padding: 7}} borderRadius={100} color={'#fff'} backgroundColor={'#0871a8'} name='send' type='feather' />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            ) : (
                <View>
                    <StyledText bold medium>
                        <Text>Loading...</Text>
                    </StyledText>
                </View>
            )}
        </KeyboardAvoidingView>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: containerDimensions.dimensions.width,
        marginTop: containerDimensions.dimensions.marginTop,
        alignItems: 'center',
    },
    receivedMessage: {
        maxWidth: 240,
        minHeight: 45,
        borderWidth: 0.3,
        borderRadius: 5,
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
    },
    sendedMessage: {
        maxWidth: 240,
        minHeight: 45,
        borderWidth: 0.3,
        borderRadius: 5,
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'flex-end',
    },
    chatContainer: {
        width: '100%',
        alignItems: 'center',
        height: '100%'
    },
    messagesContainer: {
        width: '100%',
        paddingHorizontal: 10,
        height: '100%'
    },
    textInput: {
        borderWidth: 0.3,
        width: containerDimensions.dimensions.width - 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 40
    },
    inputContainer: {
        width: '100%',
        alignSelf: 'flex-start',
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    }
});
