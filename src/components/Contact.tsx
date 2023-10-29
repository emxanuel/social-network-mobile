import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { UserData, useUserContext } from './UserContext'
import { Link } from 'react-router-native'
import StyledText from './StyledText'
import { containerDimensions } from '../styles/standar'
import { TMessage } from './Message'
import { getLastMessage } from '../functions/chat'

interface IProps {
    friend: UserData
}

const Contact: React.FC<IProps> = ({ friend }) => {
    const [lastMessage, setLastMessage] = useState<TMessage>()
    const [loading, setLoading] = useState(true)
    const { user } = useUserContext()
    let message = ''

    useEffect(() => {
        getLastMessage(user.id, friend.id, setLastMessage, setLoading)
    }, [])

    if (lastMessage){
        message = lastMessage.content.length <= 30 ? lastMessage.content : lastMessage.content.slice(0, 27).concat('...')
    }

    return (
        <View>
            <Link underlayColor={'#eee'} to={`/chat/${friend.id}`} style={{
                width: containerDimensions.dimensions.width,
                height: 60,
                padding: 10,
                justifyContent: 'center'
            }}>
                <View>
                    <StyledText medium>
                        <Text>
                            {`${friend.first_name} ${friend.last_name}`}
                        </Text>
                    </StyledText>
                    {loading ? (
                        <View></View>
                    ) : (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
                            <StyledText style={{

                            }}>
                                <Text>
                                    {lastMessage.sender === user.id ? `You: ${message}` : message}
                                </Text >
                            </StyledText>
                            <StyledText>
                                <Text>
                                    {
                                        new Date(lastMessage.date_sent).getDay() === new Date().getDay()?( 
                                            new Date(lastMessage.date_sent)
                                                .toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit' }))
                                        : new Date(lastMessage.date_sent).toLocaleDateString()
                                    }
                                </Text>
                            </StyledText>
                        </View>
                    )}
                </View>
            </Link>
        </View>
    )
}

export default Contact