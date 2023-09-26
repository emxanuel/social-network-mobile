import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, TouchableNativeFeedback} from "react-native";
import { containerDimensions } from "../styles/standar";
import StyledText from "../components/StyledText";

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <StyledText big center bold><Text>Register</Text></StyledText>
                <View style={styles.greeting}>
                <StyledText medium center><Text>Lets Start the experience</Text></StyledText>
                </View>
                <View style={styles.inputsContainer}>
                    <View>
                        <StyledText medium bold><Text>Name</Text></StyledText>
                        <TextInput placeholder="Your name" style={styles.input} />
                    </View>
                    <View>
                        <StyledText medium bold><Text>Last Name</Text></StyledText>
                        <TextInput placeholder="Your last name" style={styles.input} />
                    </View>
                    <View>
                        <StyledText medium bold><Text>Email</Text></StyledText>
                        <TextInput  placeholder="Email address" style={styles.input} />
                    </View>
                    <View>
                        <StyledText medium bold><Text>Password</Text></StyledText>
                        <TextInput placeholder="Create a password" style={styles.input} />
                    </View>
                    <View>
                        <StyledText medium bold><Text>Birthdate</Text></StyledText>
                        <TextInput placeholder="Your birthdate" style={styles.input} />
                    </View>
                    <View>
                        <StyledText medium bold><Text>Gender</Text></StyledText>
                        <TextInput placeholder="Your gender" style={styles.input} />
                    </View>
                </View>
                <TouchableNativeFeedback style={styles.button}><StyledText medium center bold><Text>Sign in</Text></StyledText></TouchableNativeFeedback>
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
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width / 1.3,
        height: Dimensions.get('screen').height / 1.4,
        padding: 20,
        paddingHorizontal: 25,
        borderWidth: 0.4,
        borderRadius: 10,

    },
    input: {
        backgroundColor: 'white',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 0.3,
        paddingHorizontal: 5
    },
    inputsContainer: {
        marginBottom: 10
    },
    greeting: {
        marginBottom: 20,
        marginTop: 10
    },
    button: {
        borderWidth: 0.3,
        borderColor: '#000'
    }
})

export default Register;
