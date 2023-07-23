import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, TouchableNativeFeedback} from "react-native";
import { containerDimensions } from "../styles/standar";
import StyledText from "./StyledText";

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <StyledText big white center><Text>Register</Text></StyledText>
                <View style={styles.greeting}>
                <StyledText medium white center><Text>Lets Start the experience</Text></StyledText>
                </View>
                <View style={styles.inputsContainer}>
                    <View>
                        <StyledText medium white><Text>Name</Text></StyledText>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <StyledText medium white><Text>Last Name</Text></StyledText>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <StyledText medium white><Text>Email</Text></StyledText>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <StyledText medium white><Text>Password</Text></StyledText>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <StyledText medium white><Text>Birthdate</Text></StyledText>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <StyledText medium white><Text>Gender</Text></StyledText>
                        <TextInput style={styles.input} />
                    </View>
                </View>
                <TouchableNativeFeedback><StyledText medium white center><Text>Sign in</Text></StyledText></TouchableNativeFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: containerDimensions.dimensions.width,
        height: containerDimensions.dimensions.height,
        marginTop: containerDimensions.dimensions.marginTop,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        backgroundColor: '#353941',
        width: Dimensions.get('screen').width / 1.3,
        height: Dimensions.get('screen').height / 1.4,
        padding: 20,
        paddingHorizontal: 25
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

export default Register;
