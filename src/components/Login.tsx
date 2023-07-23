import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, Touchable, TouchableHighlight, Alert } from "react-native";
import StyledText from "./StyledText";
import { containerDimensions } from "../styles/standar";
import { login } from "../functions/users";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <StyledText big white center><Text>Login</Text></StyledText>
                <View style={styles.greeting}>
                    <StyledText big white center><Text>Welcome Again</Text></StyledText>
                </View>

                <View style={styles.inputsContainer}>
                    <StyledText medium white><Text>Email</Text></StyledText>
                    <TextInput style={styles.input} onChangeText={(e) => setEmail(e)} />
                    <StyledText medium white><Text>Password</Text></StyledText>
                    <TextInput secureTextEntry style={styles.input} 
                    onChangeText={text => setPassword(text)} />
                </View>
                <TouchableHighlight onPress={() => {
                    login(email, password)
                }}><StyledText white center><Text>Login</Text></StyledText></TouchableHighlight>
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
        backgroundColor: '#353941',
        width: Dimensions.get('screen').width / 1.6,
        height: Dimensions.get('screen').height / 2.6,
        padding: 20
    },
    input: {
        backgroundColor: 'white',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10
    },
    inputsContainer: {
        marginBottom: 10
    },
    greeting: {
        marginBottom: 20,
        marginTop: 10
    }
})

export default Login;
