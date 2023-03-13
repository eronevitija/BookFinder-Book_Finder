import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'
import BookListScreen from '../screens/BookListScreen'
import BookmarkScreen from '../screens/BookmarkScreen'

const homeScreen = "Home";
const search = 'Search'
const bookmarkName = "Bookmark";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
         <Tab.Navigator 
            screenOptions = {({route}) => ({
              tabBarIcon:({focused,color, size}) =>{
                let iconName;
                let routeName = route.name;
                if(routeName === homeScreen){
                    iconName = focused ? 'home' : 'home'
                }
                else if (routeName === search){
                    iconName = focused ? 'search' : 'search'
                }
                else if(routeName === bookmarkName){
                    iconName = focused ? 'bookmark' : 'bookmark'
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarStyle: {backgroundColor:'#393E46'},
            
        })
        }
            tabBarOptions={{
                showLabel:false,
                activeTintColor:'tomato',
                inactiveTintColor:'grey',
                style: {
                    flexDirection:'column',
                },
            }}
        >
            <Tab.Screen options={{headerShown:false}} name={homeScreen} component={HomeScreen}/>
            <Tab.Screen options={{headerShown:false}} name={search} component={BookListScreen}/>
            <Tab.Screen options={{headerShown:false}} name={bookmarkName} component={BookmarkScreen}/>
        </Tab.Navigator>
  )
}

