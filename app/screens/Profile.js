import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Sms from '../assets/svg/sms.svg';
import Lock from '../assets/svg/lock.svg';
import UserProfile from '../assets/svg/profile.svg';
import Call from '../assets/svg/call.svg';
import EyeSlash from '../assets/svg/eye_slash.svg';
import Location from '../assets/svg/location.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../config/Globles';
import R from '../assets/R';
import Header from '../Componets/Header';
const Profile = ({navigation}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={true}
      style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <Image
          source={require('../assets/images/Header.png')}
          style={{
            width: wp('100%'),
            height: hp('20%'),
            resizeMode: 'cover',
          }}
        />
        <View style={styles.headerView}>
          <Header heading={'Profile'} leftIcon={true} rightIcon={true} handleLeftIconPress={() => navigation.goBack()} />
        </View>
      </View>
        <View style={{alignSelf: 'center'}}>
          <Image  source={R.Icons.MaskProfile} width={wp('40%')} height={hp('40%')} />
        </View>
        <KeyboardAvoidingView style={{flex: 1}} enabled={true}>
          <View style={{}}>
            <View style={styles.mainContainer}>
              <UserProfile style={styles.svgIcon} />
              <TextInput
                style={styles.textContainer}
                placeholder="Name"
                placeholderTextColor="#464444"
              />
            </View>
            <View style={styles.mainContainer}>
              <Sms style={styles.svgIcon} />
              <TextInput
                style={styles.textContainer}
                placeholder="Email"
                placeholderTextColor="#464444"
              />
            </View>
            <View style={styles.mainContainer}>
              <Call style={styles.svgIcon} />
              <TextInput
                style={styles.textContainer}
                placeholder="Number"
                placeholderTextColor="#464444"
              />
            </View>
            <View style={styles.mainContainer}>
              <Location style={styles.svgIcon} />
              <TextInput
                style={styles.textContainer}
                placeholder="Address"
                placeholderTextColor="#464444"
              />
            </View>
            <View style={styles.mainContainer}>
              <Lock style={styles.svgIcon} />
              <TextInput
                style={styles.textContainer}
                placeholder="Password"
                placeholderTextColor="#464444"
              />
              <EyeSlash style={styles.passwordeye} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    marginHorizontal: '7%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderColor: COLOR.GRAY,
    borderWidth: 1,
    borderRadius: 17,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: hp('1.2%'),
    backgroundColor: '#FFFFFF',
    width: wp('70%'),
    // height: hp('7%'),
    fontSize: FONT_SIZE.F_22,
    fontFamily: FONT.MEDIUM,
    borderRadius: 12,
    padding: 14,
  },
  svgIcon: {
    padding: 10,
    marginLeft: hp('2%'),
    // height: hp('5%'),
    // width: wp('10%'),
    alignItems: 'center',
  },
  passwordeye: {
    height: hp('2.5%'),
    width: wp('6%'),
    marginRight: hp('3%'),
  },
  headerView: {
    width: wp('90%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    marginHorizontal: hp('2%'),
    marginTop: hp('2%'),
  },
});
