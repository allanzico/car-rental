import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import styles from '../styles'
import {validateEmail, validatePassword} from '../../../Validation/Validation'
import {Auth} from 'aws-amplify'



const SignUpComponent = (props) => {
    const [state, setstate] = useState({ 
        email: '', 
        password: ''
    })
    const [error, setError] = useState({
        emailError: '',
        passwordError: ''
    })

    const onSubmit = async () => {
        const emailError = validateEmail(state.email);
        const passwordError = validatePassword(state.password);
        
        if (emailError || passwordError) {
            setError({emailError:emailError, passwordError:passwordError})
        }else{
            try {
                const user = await Auth.signUp({
                    username:state.email, 
                    password:state.password
                });
                setstate({email: '', password: ''});
                props.onStateChange('confirmSignUp');
            } catch (error) {
                Alert.alert(error.message)
            }
        }
    
    }
   if (props.authState === 'signUp') {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SignUp</Text>
            
            {/* email input */}
            <Text style={styles.label}>Email</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text)=>setstate({...state, email:text.toLocaleLowerCase()})}
            value={state.email}
            placeholder="Enter email"
            />
            <Text style={styles.error}>{error.emailError}</Text>

            {/* password input */}
            <Text style={styles.label}>Password</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text)=>setstate({...state, password:text})}
            value={state.password}
            secureTextEntry={true}
            placeholder="Enter password"
            />
            <Text style={styles.error}>{error.passwordError}</Text>

            {/* Submit button */}
            <Pressable style={styles.button} onPress={()=>onSubmit()}>
                <Text style={styles.buttonText}>sign up</Text>
            </Pressable>

            {/* Nav links */}
            <View style={styles.links}>
                <Pressable onPress={()=>props.onStateChange('signIn', {})}>
                    <Text style={styles.linksText}>back to  Sign In</Text>
                </Pressable>
                <Pressable onPress={()=>props.onStateChange('confirmSignUp', {})}>
                    <Text style={styles.linksText}>Confirm Sign Up</Text>
                </Pressable>
            </View>
           
        </View>
    )
   }else { return(<></>)}
   
}

export default SignUpComponent
