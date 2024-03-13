import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import R from '../../assets/R';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Sms from '../../assets/svg/sms.svg';
import Lock from '../../assets/svg/lock.svg';
import EyeSlash from '../../assets/svg/eye_slash.svg';
import {COLOR, FONT, FONT_SIZE} from '../../config/Globles';
const LogIn = ({navigation}) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
    <View style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.text}>
          Enter your mobile number We will send you OTP to verify
        </Text>
      </View>
      <View style={styles.imageSection}>
        <ImageBackground
          source={R.Icons.Rectangle}
          resizeMode="contain"
          style={styles.image}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            enabled={true}
           >
            <View style={styles.LogInPage}>
              <View style={styles.mainContainer}>
              <Sms style={styles.svgIcon} />
                <TextInput
                  style={styles.textContainer}
                  placeholder="Email"
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
              <Text
                onPress={() => navigation.navigate('Forgotpassword')}
                style={styles.forgotPassword}>
                Forgot Password?
              </Text>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Home')}
                  style={styles.logInBtn}>
                  <Text style={styles.BtnText}>Login</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <Text
                    style={{
                      marginVertical: hp('3%'),
                      color: '#001D4C',
                      fontSize:FONT_SIZE.F_22,
                      textAlign: 'center',
                      fontFamily: FONT.BOLD,
                    }}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        {/* <View style={{position: 'absolute'}}>
        <Rectangle width={wp('100%')} height={hp('60%')} />
        </View> */}
      </View>
    </View>
    </ScrollView>
  );
};

export default LogIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#952D24',
  },
  imageSection: {
    marginVertical: hp('10%'),
  },
  image: {
    alignSelf: 'center',
    width: wp('90%'),
    height: hp('63.7%'),
  },
  textSection: {
    marginHorizontal: hp('2%'),
    marginTop: hp('10%'),
  },
  text: {
    fontFamily: FONT.REGULAR,
    color: '#fff',
    fontSize: FONT_SIZE.F_25,
  },

  mainContainer: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    marginHorizontal: '8%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderColor: COLOR.GRAY,
    borderWidth: 1,
    borderRadius: 17,
    padding: 3,
  },
  forgotPassword: {
    marginTop: hp('2%'),
    marginLeft: hp('26%'),
    color: '#952D24',
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.F_17,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: hp('1.2%'),
    backgroundColor: '#FFFFFF',
    width: wp('80%'),
    // height: hp('7%'),
    borderRadius: 12,
    padding: 10,
  },
  LogInPage: {
    marginVertical: hp('17%'),
  },
  logInBtn: {
    backgroundColor: '#952D24',
    padding: 15,
    width: wp('70%'),
    marginTop: hp('4%'),
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffff',
  },
  BtnText: {
    color: '#fff',
    fontSize: wp('5%'),
    textAlign: 'center',
    // borderColor:""
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
