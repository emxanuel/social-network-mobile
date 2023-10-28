import { Text, View, StyleSheet, TouchableHighlight } from "react-native"
import { Link } from "react-router-native"
import { getContacts } from "../functions/users"
import { useEffect, useState } from 'react'
import { UserData } from "../components/UserContext"
import { useUserContext } from "../components/UserContext"
import StyledText from "../components/StyledText"
import { containerDimensions } from "../styles/standar"

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
                <Text>Loading...</Text>
            ) : (
                <View style={styles.contacts}>
                    {contacts.map((c) => (
                        <Link to={`/chat/${c.id}`} key={c.id} style={styles.contact}>
                            <StyledText medium>
                                <Text>
                                    {`${c.first_name} ${c.last_name}`}
                                </Text>
                            </StyledText>
                        </Link>
                    ))}
                </View>
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
    contact: {
        width: containerDimensions.dimensions.width,
        height: 40,
        borderBottomWidth: 1
    },
    title: {
        borderBottomWidth: 1,
        width: containerDimensions.dimensions.width
    }
})

export default Contacts