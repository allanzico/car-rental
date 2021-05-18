import React from 'react'
import { View, Text } from 'react-native'
import PostComponent from '../../components/Post/PostComponent'
import styles from './styles'
import cars from '../../../assets/data/feed'
import DetailedPostComponent from '../../components/DetailedPost/DetailedPostComponent'
import {useRoute} from '@react-navigation/native'

const DetailsScreen = () => {
 const route = useRoute();
 const post = cars.find(car=>car.id === route.params.postId)
 console.log(route.params)
    return (
        <View style={styles.container}>
          <DetailedPostComponent post={post} />
        </View>
    )
}

export default DetailsScreen
