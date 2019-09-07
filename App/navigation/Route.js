import React, {Fragment} from 'react';

import {  createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
const NavigationStack = createStackNavigator({
                            Home : { screen : Home },
                            Login : { screen : Login }
                        },{
                            headerMode: 'none',
                            initialRouteName: 'Home',
                        });
export default createAppContainer(NavigationStack);