import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { loginEmailAccount } from "../redux/actions/authActions";

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    handleUpdateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = () => {

        this.props.loginEmailAccount(this.state.email, this.state.password)
    }

    render() {

        const { route, navigation,auth} = this.props
        let LoginScreen = route.params
        return (
            <ScrollView style={styles.container} showVerticalScrollIndicator={false}>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.loginText}>Log In</Text>
                </View>

                <View>

                {auth.error.login &&
                        <Text style={{ color: 'red' }}>{auth.error.login}</Text>
                    }

                    <TextInput style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => { this.handleUpdateState("email", text) }}
                        value={this.state.email}
                        placeholder="Email"
                    />


                    <TextInput style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => { this.handleUpdateState("password", text) }}
                        value={this.state.password}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={this.handleOnSubmit} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.noAccountContainer}>
                    <Text style={styles.noAccountText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("SignupScreen") }}>
                        <Text style={styles.signupText}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 50,
        marginTop: 70
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

const mapStateToProp = (state) => {
    return { auth: state }
}

export default connect(mapStateToProp, { loginEmailAccount })(LoginScreen)