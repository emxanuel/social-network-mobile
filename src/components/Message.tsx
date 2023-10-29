import React from 'react'
import { View, StyleProp, ViewStyle, Text } from 'react-native'
import StyledText from './StyledText'

export type TMessage = {
    id: number,
    sender: number,
    recipient: number,
    content: string,
    date_sent: string

}

type TProps = {
    info: TMessage,
    styles: StyleProp<ViewStyle>
}

const Message: React.FC<TProps> = ({ info, styles }) => {
    const date = new Date(info.date_sent).toLocaleTimeString('en-us', { hour: '2-digit', minute: "2-digit" })
    return (
        <View style={styles}>
            <StyledText medium><Text>{info.content}</Text></StyledText>
            <StyledText style={{alignSelf: 'flex-end', marginTop: 10, opacity: 0.3}}><Text>{date}</Text></StyledText>
        </View>
    )
}

export default Message