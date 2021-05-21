import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import styles from '../styles'
import {validateEmail, validatePassword} from '../../../Validation/Validation'
import {Auth} from 'aws-amplify'



const SignInComponent = (props) => {
    const [state, setstate] = useState({ 
        email: '', 
        password: ''
    })
    const onSubmit = async () => {
        const {email:username, password:password} = state;
            try {
                const user = await Auth.signIn(username, password);
                setstate({email: '', password: ''});
            
            } catch (error) {
                Alert.alert(error.message)
            }
        
    
    }
   if (props.authState === 'signIn') {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            
            {/* email input */}
            <Text style={styles.label}>Email</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text)=>setstate({...state, email:text.toLocaleLowerCase()})}
            value={state.email}
            placeholder="Enter email"
            />
         

            {/* password input */}
            <Text style={styles.label}>Password</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text)=>setstate({...state, password:text})}
            value={state.password}
            secureTextEntry={true}
            placeholder="Enter password"
            />
    

            {/* Submit button */}
            <Pressable style={styles.button} onPress={()=>onSubmit()}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            {/* Nav links */}
            <View style={styles.links}>
                <Pressable onPress={()=>props.onStateChange('signUp', {})}>
                    <Text style={styles.linksText}>Don't have an account? Signup</Text>
                </Pressable>
                <Pressable onPress={()=>props.onStateChange('forgotPassword', {})}>
                    <Text style={styles.linksText}>Forgot Password?</Text>
                </Pressable>
            </View>
           
        </View>
    )
   }else { return(<></>)}
   
}

export default SignInComponent
