import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLOR, WHITE, FONT, FONT_SIZE} from '../../config/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import R from '../../assets/R';
import Sms from '../../assets/svg/sms.svg';
import Lock from '../../assets/svg/lock.svg';
import Profile from '../../assets/svg/profile.svg';
import Call from '../../assets/svg/call.svg';
import EyeSlash from '../../assets/svg/eye_slash.svg';
import Location from '../../assets/svg/location.svg';
const Register = ({navigation}) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.RectangleContainer}>
          <Text style={[styles.PasswordText, {fontSize: FONT_SIZE.F_3}]}>
            Register
          </Text>
          <Text style={[styles.PasswordText, {fontSize: FONT_SIZE.F_22}]}>
            Lorem Ipsum is simply dummy text of the printing and
          </Text>
          <ImageBackground
            source={R.Icons.Rectangle}
            resizeMode="contain"
            style={styles.RectangleImage}>
            <KeyboardAvoidingView style={{flex: 1}} enabled={true}>
              <View style={{marginTop: hp('14%')}}>
                <View style={styles.mainContainer}>
                  <Profile style={styles.svgIcon} />
                  {/* <Image style={styles.lock} source={R.Icons.profile} /> */}
                  <TextInput
                    style={styles.textContainer}
                    placeholder="Name"
                    placeholderTextColor="#464444"
                  />
                </View>
                <View style={styles.mainContainer}>
                  <Sms style={styles.svgIcon} />
                  {/* <Image style={styles.lock} source={R.Icons.sms} /> */}
                  <TextInput
                    style={styles.textContainer}
                    placeholder="Email"
                    placeholderTextColor="#464444"
                  />
                </View>
                <View style={styles.mainContainer}>
                  <Call style={styles.svgIcon} />
                  {/* <Image style={styles.lock} source={R.Icons.call} /> */}
                  <TextInput
                    style={styles.textContainer}
                    placeholder="Number"
                    placeholderTextColor="#464444"
                  />
                </View>
                <View style={styles.mainContainer}>
                  <Location style={styles.svgIcon} />
                  {/* <Image style={styles.lock} source={R.Icons.location} /> */}
                  <TextInput
                    style={styles.textContainer}
                    placeholder="Address"
                    placeholderTextColor="#464444"
                  />
                </View>
                <View style={styles.mainContainer}>
                  <Lock style={styles.svgIcon} />
                  {/* <Image style={styles.lock} source={R.Icons.lock} /> */}
                  <TextInput
                    style={styles.textContainer}
                    placeholder="Password"
                    placeholderTextColor="#464444"
                  />
                  <EyeSlash style={styles.passwordeye} />
                  {/* <Image style={styles.passwordeye} source={R.Icons.eye_slash} /> */}
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.BtnStyle}>
                    <Text style={styles.BtnText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ThemeColor,
  },
  RectangleContainer: {
    marginVertical: hp('7%'),
  },
  RectangleImage: {
    alignSelf: 'center',
    width: wp('90%'),
    height: hp('63.7%'),
    marginVertical: hp('7%'),
  },
  PasswordText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_25,
    fontFamily: FONT.BOLD,
    marginHorizontal: hp('2.4%'),
  },
  BtnStyle: {
    backgroundColor: '#952D24',
    padding: 13,
    width: wp('75%'),
    marginTop: hp('3%'),
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffff',
  },
  BtnText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_23,
    textAlign: 'center',
  },
  OTPcontainer: {
    marginTop: hp('23%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLOR.GRAY,
    borderRadius: 8,
    marginHorizontal: hp('1.3%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('15%'),
    // backgroundColor: COLOR.ThemeColor,
    height: hp('8%'),
  },
  input: {
    fontSize: 20,
  },
  mainContainer: {
    flexDirection: 'row',
    marginTop: hp('1%'),
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
    padding: 9,
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
});
