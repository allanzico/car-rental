import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import { Auth } from 'aws-amplify';

const ProfileScreen = () => {

    const logOut = async () =>{
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={logOut} style={styles.button}>
                <Text>
                Logout
                </Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen
