import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import{createBottomTabNavigator}from '@react-navigation/bottom-tabs'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import RestaurantsStack from './RestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'
import { Icon } from 'react-native-elements'

const Tab=createBottomTabNavigator()

export default function Navigation() {

    const screenOptions =(route, color)=>{
        let iconName
        switch (route.name) {
            case "restaurants":
                iconName="compass-outline"
                break;

            case "Favorities":
               iconName="heart-outline"
                 break;

                 case "search":
               iconName="magnify"
                 break;

                 case "acconunt":
               iconName="home-outline"
                 break;

                 case "Top-restaurant":
               iconName="star-outline"
                 break;
        
            
        }
        return (
            <Icon
            type="material-community"
            name={iconName}
            size={22}
            color={color}
            />
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="restaurants"
            tabBarOptions={{
                inactiveTintColor:"#319ce6",
                activeTintColor:"#07304c"

            }}

            screenOptions={({route})=>({
                tabBarIcon:({color}) => screenOptions(route, color)
            })}

            >
               <Tab.Screen
               name="restaurants"
               component={RestaurantsStack}
               options={{title:"Restaurante"}}
               /> 

               <Tab.Screen
               name="Favorities"
               component={FavoritesStack}
               options={{title:"Favoritos"}}
               /> 
               <Tab.Screen
               name="Top-restaurant"
               component={TopRestaurantsStack}
               options={{title:"Top 5"}}
               /> 
               <Tab.Screen
               name="search"
               component={SearchStack}
               options={{title:"Buscar"}}
               /> 
               <Tab.Screen
               name="acconunt"
               component={AccountStack}
               options={{title:"Cuenta"}}
               /> 
            </Tab.Navigator>

            

        </NavigationContainer>
    )
}
