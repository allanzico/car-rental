import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import PostComponent from '../../components/Post/PostComponent'
import styles from './styles'
import cars from '../../../assets/data/feed'
import DetailedPostComponent from '../../components/DetailedPost/DetailedPostComponent'
import {useRoute} from '@react-navigation/native'
import { API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../../graphql/queries'


const DetailsScreen = (props) => {
 const route = useRoute();
 const {postId} = route.params;
 const [post, setPost] = useState([]);


 //Fetch by ID
 useEffect(() => {
  const fetchPosts = async () => {
      try {
          const postsResult = await API.graphql(
              graphqlOperation(listPosts, {
                filter: {
                  id: {
                    eq: postId
                  }
                }
              })
              
          )
          setPost(postsResult.data.listPosts.items[0]);
      } catch (error) {
          console.log(error)
      }     
  }

  fetchPosts();
}, []);

    return (
        <View style={styles.container}>
          <DetailedPostComponent post={post} />
        </View>
    )
}

export default DetailsScreen
