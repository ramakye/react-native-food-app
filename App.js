import React from 'react';
import * as firebase from "firebase";



import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';

var firebaseConfig = {
    apiKey: "AIzaSyDhjI7ClTwgCv2lWchAXdPv7Bzv7IOfK2A",
    authDomain: "food-backend-32339.firebaseapp.com",
    projectId: "food-backend-32339",
    storageBucket: "food-backend-32339.appspot.com",
    messagingSenderId: "684661256131",
    appId: "1:684661256131:web:39a9bc37e52ac62ea11776",
    measurementId: "G-33S748NKHQ"  
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

import { Restaurant, OrderDelivery, Account, Search, Login, SignUp} from './screens'
import Tabs from './navigation/tabs'


const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }
    
    
      return (
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'Home'}
              >
                  <Stack.Screen name="Home" component={Tabs} />
                  <Stack.Screen name="Restaurant" component={Restaurant} />
                  <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
                  <Stack.Screen name="Account" component={Account} />
                  <Stack.Screen name="Search" component={Search} />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="SignUp" component={SignUp} />




              </Stack.Navigator>
          </NavigationContainer>
      )
    
}

export default App;