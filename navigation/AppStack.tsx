import {View, Text, color} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import OnboardingScreen from '../screen/OnboardingScreen';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import Giohang from '../screen/Giohang';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Danhmuc from '../screen/Danhmuc';

const Drawer = createDrawerNavigator();

const AppStack = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#66a3ff',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {marginLeft: -25, fontSize: 16},
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="THỊT BÒ"
        component={CcdbScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="bag-handle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cơm - Xôi - Cháo"
        component={CcvpScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="clipboard-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Thủy hải sản"
        component={SdScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="fish-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pasta - Spaghetti"
        component={CcScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="pizza-outline" size={22} color={color} />
          ),
        }}
      /> */}

      <Drawer.Screen
        name="Danh mục"
        component={Danhmuc}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="pizza-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="card-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Giohang"
        component={Giohang}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="bag-handle-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
