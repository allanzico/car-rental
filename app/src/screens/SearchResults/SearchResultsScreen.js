import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'

import PostComponent from '../../components/Post/PostComponent'
import { API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../../graphql/queries'


const SearchResultsScreen = (props) => {
 const [posts, setPosts] = useState([]);
 console.log("test");
 useEffect(() => {
    const fetchPosts = async () => {
        try {
            const postsResult = await API.graphql(
                graphqlOperation(listPosts)
            )
            setPosts(postsResult.data.listPosts.items);
        } catch (error) {
            console.log(error)
        }     
    }

    fetchPosts();
 }, []);

    return (
        <View>
           <FlatList 
           data={posts} 
           keyExtractor={(item, index) => item.id.toString()}
           renderItem={({item}) => <PostComponent post={item}/>}
           />
        </View>
    )
}

export default SearchResultsScreen
