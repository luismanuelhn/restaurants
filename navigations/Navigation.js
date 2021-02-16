import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import{createBottomTabNavigator}from '@react-navigation/bottom-tabs'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import RestaurantsStack from './RestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const Tab=createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
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
