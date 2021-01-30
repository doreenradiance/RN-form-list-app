import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';

export default function LoginScreen({route,navigation}) {
    let LoginScreen = route.params
    return (
        <ScrollView style={styles.container} showVerticalScrollIndicator={false}>
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>Log In</Text>
            </View>

            <View>
                <TextInput style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Username"
                />


                <TextInput style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </View>

            <View>
                <TouchableOpacity onPress={() => { navigation.navigate("ContactsScreen") }} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("SignupScreen")}}>
                <Text style={styles.signupText}>Sign up</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 50,
        marginTop:70
        // justifyContent:"space-around"
    },
    loginText: {
        fontSize: 50,
        color: "#5100ad"
    },
    loginTextContainer: {
        marginBottom: 30
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#5100ad",
        fontSize: 20,
        height: 50,
        marginTop: 20
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginVertical: 3,
        color: "#0853a8"
    },
    buttonContainer: {
        height: 50,
        backgroundColor: "#5100ad",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        borderRadius: 10
    },
    buttonText: {
        color: "white",
        fontSize: 25,
        marginVertical: 50
    },
    noAccountContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
    },
    noAccountText: {
        marginRight: 10,
        fontSize: 15
    },
    signupText: {
        fontSize: 15,
        color: "#5100ad",

    }
})


