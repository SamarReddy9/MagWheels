import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  PermissionsAndroid
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import R from '../assets/R';
import {COLOR, FONT, FONT_SIZE} from '../config/Globles';
import LocationCurrent from '../assets/svg/LocationCurrent.svg';
import MapView, {Marker} from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Map = ({navigation}) => {
  const [SelectLocation, setSelectLocation] = useState({
    pickUp: '',
    dropOff: '',
  });

  const handleNextPress = async () => {
    navigation.navigate('Outstations');
    await AsyncStorage.setItem('location', JSON.stringify(SelectLocation));
  };

  let location = {
    latitude: 30.259933,
    longitude: 31.412613,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };

  useEffect(() => {
    Permission();
  }, []);
  const Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool App Location Permission',
          message: 'Cool App needs access to your Location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#ffff'} barStyle={'dark-content'} />
      <MapView
        style={{flex: 1}}
        showsUserLocation
        PROVIDER_GOOGLE
        MAP_TYPES="STANDARD">
        <Marker
          title="Home"
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
      <View style={{position: 'absolute', alignSelf: 'center'}}>
        <View style={[styles.mainContainer, styles.SectionStyle]}>
          <TextInput
            style={styles.textContainer}
            placeholder="your current location"
            placeholderTextColor="#464444"
          />
        </View>
      </View>
      <ScrollView style={{height: hp('10%')}}>
        <View style={styles.mapSection}>
          <View style={styles.MapBottomContainer}>
            <View style={styles.mapLocation}>
              <Image source={R.Icons.ic_current} />
              <Image
                source={R.Icons.Line}
                style={{alignSelf: 'center', height: hp('10.2%')}}
              />
              <Image source={R.Icons.ic_pin} />
            </View>
            <View style={styles.TextSection}>
              <Text
                style={{
                  color: COLOR.GRAY,
                  fontSize: FONT_SIZE.F_2,
                  fontFamily: FONT.REGULAR,
                  marginHorizontal: hp('1%'),
                }}>
                PICKUP
              </Text>

              <TextInput
                placeholder="Source"
                placeholderTextColor={'#000'}
                style={{
                  fontSize: hp('2.3%'),
                }}
                onChangeText={val => {
                  setSelectLocation({
                    ...SelectLocation,
                    pickUp: val,
                  });
                }}
              />

              <View
                style={{
                  borderTopColor: COLOR.GRAY,
                  borderTopWidth: 1,
                  width: wp('100%'),
                  marginTop: hp('2%'),
                }}>
                <Text
                  style={{
                    color: COLOR.GRAY,
                    fontSize: FONT_SIZE.F_2,
                    fontFamily: FONT.REGULAR,
                    marginTop: hp('2%'),
                    marginHorizontal: hp('1%'),
                  }}>
                  DROP-OFF
                </Text>
                <TextInput
                  placeholder="Destination"
                  placeholderTextColor={'#000'}
                  style={{
                    fontSize: hp('2.3%'),
                  }}
                  onChangeText={val => {
                    setSelectLocation({
                      ...SelectLocation,
                      dropOff: val,
                    });
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => handleNextPress()}
              style={styles.BtnStyle}>
              <Text style={styles.BtnText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Map;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: hp('8%'),
    borderColor: '#fff',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 17,
    padding: 3,
    width: wp('88%'),
  },
  BtnStyle: {
    backgroundColor: '#952D24',
    padding: 13,
    width: wp('88%'),
    marginTop: hp('8%'),
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffff',
  },
  BtnText: {
    color: '#fff',
    fontSize: FONT_SIZE.F_25,
    textAlign: 'center',
  },
  passwordeye: {
    height: hp('2.5%'),
    width: wp('6%'),
    marginRight: hp('3%'),
  },
  lock: {
    padding: 10,
    marginLeft: hp('2%'),
    height: hp('3%'),
    width: wp('6%'),
    alignItems: 'center',
  },
  RectangleImage: {
    alignSelf: 'center',
    width: wp('100%'),
    height: hp('100%'),
  },
  textContainer: {
    flex: 1,
    marginHorizontal: hp('1.2%'),
    backgroundColor: '#FFFFFF',
    width: wp('85%'),
    fontFamily: FONT.REGULAR,
    fontSize: FONT_SIZE.F_23,
    borderRadius: 12,
    padding: 8,
    color: COLOR.BLACK,
  },
  mapSection: {
    borderTopRightRadius: hp('5%'),
    borderTopLeftRadius: hp('5%'),
    backgroundColor: '#FFFFFF',
    height: hp('70%'),
  },
  MapBottomContainer: {
    flexDirection: 'row',
    borderEndStartRadius: 30,
  },
  TextSection: {
    marginHorizontal: hp('2%'),
    marginTop: hp('6%'),
  },
  mapLocation: {
    marginTop: hp('11.6%'),
    marginLeft: hp('2.3%'),
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: hp('7%'),
    width: wp('80%'),
    borderRadius: 12,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
