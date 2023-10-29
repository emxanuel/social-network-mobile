import { Text, View, StyleSheet, ScrollView } from "react-native"
import { Link } from "react-router-native"
import { getContacts } from "../functions/users"
import { useEffect, useState } from 'react'
import { UserData } from "../components/UserContext"
import { useUserContext } from "../components/UserContext"
import StyledText from "../components/StyledText"
import { containerDimensions } from "../styles/standar"
import CSkeleton from "../components/Skeleton"
import { TMessage } from "../components/Message"
import Contact from "../components/Contact"

const Contacts = () => {
    const [contacts, setContacts] = useState<UserData[]>([])
    const { user } = useUserContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getContacts(setContacts, user.id, setLoading)
    }, [])

    return (
        <View style={styles.container}>
            <StyledText big bold><Text style={styles.title}>Contacts</Text></StyledText>
            {loading ? (
                <View>
                    <CSkeleton type='contacts'/>
                    <CSkeleton type='contacts'/>
                    <CSkeleton type='contacts'/>
                    <CSkeleton type='contacts'/>
                    <CSkeleton type='contacts'/>
                    <CSkeleton type='contacts'/>
                    <CSkeleton type='contacts'/>
                </View>
            ) : (
                <ScrollView style={styles.contacts}>
                    {contacts.map((c) => (
                        <Contact friend={c} key={c.id}/>
                    ))}
                </ScrollView>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: containerDimensions.dimensions.height,
        width: containerDimensions.dimensions.width,
        marginTop: containerDimensions.dimensions.marginTop,
        alignItems: 'center'
    },
    contacts: {
        alignSelf: 'center',
        gap: 2
    },
    title: {
        borderBottomWidth: 1,
        width: containerDimensions.dimensions.width
    }
})

export default Contacts