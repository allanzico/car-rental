import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import styles from '../styles'
import {validateCode, validateEmail, validatePassword} from '../../../Validation/Validation'
import {Auth} from 'aws-amplify'



const ConfirmSignUpComponent = (props) => {
    const [state, setstate] = useState({ 
        email: '', 
        confirmationCode: ''
    })
    const [error, setError] = useState({
        emailError: '',
        confirmationCodeError: ''
    })

    const onSubmit = async () => {
        const {email:username, confirmationCode:code} = state;
        const emailError = validateEmail(state.email);
        const confirmationCodeError = validateCode(state.confirmationCode);
        
        if (emailError || confirmationCodeError) {
            setError({emailError:emailError, confirmationCodeError:confirmationCodeError})
        }else{
            try {
                const user = await Auth.confirmSignUp(username, code);
                props.onStateChange('signIn');
                setstate({confirmationCode:''});
            } catch (error) {
                Alert.alert(error.message)
            }
        }
    
    }
   if (props.authState === 'confirmSignUp') {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirm Signup</Text>
            
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
            <Text style={styles.label}>Code</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text)=>setstate({...state, confirmationCode:text})}
            value={state.confirmationCode}
            placeholder="Enter confirmation code"
            />
            <Text style={styles.error}>{error.confirmationCodeError}</Text>

            {/* Submit button */}
            <Pressable style={styles.button} onPress={()=>onSubmit()}>
                <Text style={styles.buttonText}>Confirm</Text>
            </Pressable>

            {/* Nav links */}
            <View style={styles.links}>
                <Pressable onPress={()=>props.onStateChange('signIn', {})}>
                    <Text style={styles.linksText}>back to  Sign In</Text>
                </Pressable>
                <Pressable onPress={()=>props.onStateChange('signUp', {})}>
                    <Text style={styles.linksText}>back to Sign Up</Text>
                </Pressable>
            </View>
           
        </View>
    )
   }else { return(<></>)}
   
}

export default ConfirmSignUpComponent
