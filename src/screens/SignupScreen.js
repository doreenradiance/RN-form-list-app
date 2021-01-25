import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SignupScreen({route,navigation}) {
    let SignupScreen = route.params
    return (
        <ScrollView style={styles.container} showVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Sign Up</Text>
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

            <TextInput style={styles.input}
            placeholderTextColor="#aaaaaa"
             placeholder="Password Again"
             secureTextEntry={true}
             />
            <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>

        <View>
            <TouchableOpacity onPress={() => { navigation.navigate("ContactsScreen") }}style={styles.buttonContainer} >
                <Text style={styles.buttonText}>Sign UP</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
            <Text style={styles.noAccountText}>Don't have an account?</Text>
            <Text style={styles.signupText}>Log In</Text>
        </View>
        
    </ScrollView>
    )
}

const styles = StyleSheet.create({})
