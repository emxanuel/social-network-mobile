import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, Touchable, TouchableHighlight, Alert } from "react-native";
import StyledText from "../components/StyledText";
import { containerDimensions } from "../styles/standar";
import { login } from "../functions/users";
import { useNavigate } from "react-router-native";
import { useUserContext } from "../components/UserContext";

const Login = () => {
    const [email, setEmail] = useState('')
    const { setUser } = useUserContext()
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <StyledText big white center><Text>Login</Text></StyledText>
                <View style={styles.greeting}>
                    <StyledText big bold center><Text>Welcome Again</Text></StyledText>
                </View>

                <View style={styles.inputsContainer}>
                    <StyledText medium bold><Text>Email</Text></StyledText>
                    <TextInput placeholder="Email Address" keyboardType="email-address" style={styles.input} onChangeText={(e) => setEmail(e)} />
                    <StyledText medium bold><Text>Password</Text></StyledText>
                    <TextInput placeholder="Password" secureTextEntry style={styles.input}
                        onChangeText={text => setPassword(text)} />
                </View>
                <TouchableHighlight style={styles.button} onPress={() => {
                    login(email, password, navigate, setUser)
                }}><StyledText center><Text>Login</Text></StyledText></TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: containerDimensions.dimensions.height,
        width: containerDimensions.dimensions.width,
        marginTop: containerDimensions.dimensions.marginTop,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width / 1.3,
        height: Dimensions.get('screen').height / 2.3,
        padding: 20,
        borderColor: "#000",
        borderWidth: 0.4,
        borderRadius: 10
    },
    input: {
        backgroundColor: 'white',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#000',
        borderWidth: 0.4,
        paddingHorizontal: 5,
    },
    inputsContainer: {
        marginBottom: 10,
    },
    greeting: {
        marginBottom: 20,
        marginTop: 10
    },
    button: {
        marginTop: 30,
        borderWidth: 0.2,
        padding: 3
    }
})

export default Login;
