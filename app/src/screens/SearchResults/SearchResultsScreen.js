import React from 'react'
import { View, FlatList } from 'react-native'
import feed from '../../../assets/data/feed'
import PostComponent from '../../components/Post/PostComponent'
const SearchResultsScreen = (props) => {
    
    return (
        <View>
           <FlatList 
           data={feed} 
           keyExtractor={(item, index) => item.id.toString()}
           renderItem={({item}) => <PostComponent post={item}/>}
           />
        </View>
    )
}

export default SearchResultsScreen
