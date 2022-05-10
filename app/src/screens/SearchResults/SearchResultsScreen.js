import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import PostComponent from '../../components/Post/PostComponent'



const SearchResultsScreen = (props) => {
 const {posts} = props;

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
