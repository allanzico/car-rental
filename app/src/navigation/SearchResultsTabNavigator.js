import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults/SearchResultsScreen';
import SearchResultsMap from '../screens/SearchResultsMap/SearchResultsMap';
import { useRoute } from '@react-navigation/core';
import { API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../graphql/queries'

const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = () => {
    const route = useRoute();
    const [posts, setPosts] = useState([]);
    const {passengers, bags, viewport} = route.params;

    //Fetch and filter cars
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: 
                        {
                            and: {
                                passengers: {ge: passengers},
                                bags: {ge: bags},
                                latitude: {
                                    between: [viewport.southwest.lat, viewport.northeast.lat], 
                                },
                                longitude: {
                                    between: [viewport.southwest.lng, viewport.northeast.lng], 
                                }
                            }
                          }
                      
                    })
                )
                setPosts(postsResult.data.listPosts.items);
            } catch (error) {
                console.log(error)
            }     
        }
    
        fetchPosts();
     }, []);

    return (
        <Tab.Navigator tabBarOptions=
        {{ activeTintColor: '#3282b8',
            indicatorStyle: {
                backgroundColor: '#3282b8'
            }
        
        }}>
            <Tab.Screen name={"list"}>
               {
                   ()=> (<SearchResultsScreen posts={posts}/>)
               }
            </Tab.Screen>
            <Tab.Screen name={"map"}>
                {
                    ()=> (<SearchResultsMap posts={posts}/>)
                }
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
