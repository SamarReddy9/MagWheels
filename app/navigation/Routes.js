import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from '../screens/Home/Home';
import BookingDetails from '../screens/BookingDetails/BookingDetails';
import HandleStatus from '../screens/StatusHandle/HandleStatus';
import Splash from '../screens/usercrendential/Splash';
import {Screen} from '../constant/screen';
import Welcome from '../screens/usercrendential/Welcome';
import LogIn from '../screens/usercrendential/LogIn';
import OTP from '../screens/usercrendential/OTPverify';
import ForgotPassword from '../screens/usercrendential/ForgotPassword';
import Password from '../screens/usercrendential/Password';
import Register from '../screens/usercrendential/Register';
import Map from '../screens/Map';
import MapSecond from '../screens/MapSecond';
import Category from '../screens/Category';
import Profile from '../screens/Profile';
import Outstations from '../screens/Outstations/Outstations';
import CustomTab from './CustomTab';
import CustomDrawer from './CustomDrawer';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screen.SPLASH} component={Splash} />
        <Stack.Screen name={Screen.WELCOME} component={Welcome} />
        <Stack.Screen name={Screen.LOGIN} component={LogIn} />
        <Stack.Screen name={Screen.OTP} component={OTP} />
        <Stack.Screen name={Screen.FORGOTPASSWORD} component={ForgotPassword} />
        <Stack.Screen name={Screen.PASSWORD} component={Password} />
        <Stack.Screen name={Screen.REGISTER} component={Register} />
        <Stack.Screen name={'Home'} component={CustomDrawer} />
        <Stack.Screen name={Screen.MAP} component={Map} />
        <Stack.Screen name={Screen.MAPSECOND} component={MapSecond} />
        <Stack.Screen name={Screen.CATEGORY} component={Category} />
        <Stack.Screen name={Screen.CALENDER} component={Outstations} />
        {/* <Stack.Screen name={Screen.HOME} component={Home} /> */}
        <Stack.Screen name={Screen.DETAILS} component={BookingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
