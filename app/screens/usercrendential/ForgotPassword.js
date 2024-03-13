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
import Styles from '../../config/Styles';
import {COLOR, WHITE, FONT, FONT_SIZE} from '../../config/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Sms from '../../assets/svg/sms.svg';
const ForgotPassword = ({navigation}) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={styles.container}>
        <View style={styles.RectangleContainer}>
          <Text style={[styles.PasswordText, {fontSize: FONT_SIZE.F_3}]}>
            Forgot Password?
          </Text>
          <Text style={[styles.PasswordText, {fontSize: FONT_SIZE.F_22}]}>
            Lorem Ipsum is simply dummy text of the printing and
          </Text>

          <ImageBackground
            source={R.Icons.Rectangle}
            resizeMode="contain"
            style={styles.RectangleImage}>
                <KeyboardAvoidingView
            style={{flex: 1}}
            enabled={true}
           >
            <View style={{marginVertical: hp('20%')}}>
              <View style={styles.mainContainer}>
              <Sms style={styles.svgIcon} />
                <TextInput
                  style={styles.textContainer}
                  placeholder="Email"
                  placeholderTextColor="#464444"
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Otp')}
                  style={styles.BtnStyle}>
                  <Text style={styles.BtnText}>OTP</Text>
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

export default ForgotPassword;
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
    height: hp('63.2%'),
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
    padding: 16,
    width: wp('75%'),
    marginTop: hp('10%'),
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
    borderColor: 'gray',
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
    marginTop: hp('2%'),
    marginHorizontal: '8%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderColor: '#001D4C',
    borderWidth: 1,
    borderRadius: 17,
    padding: 3,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: hp('1.2%'),
    backgroundColor: '#FFFFFF',
    width: wp('80%'),
    // height: hp('7%'),
    fontSize:FONT_SIZE.F_22,
    borderRadius: 12,
    padding: 12,
  },
  svgIcon: {
    padding: 10,
    marginLeft: hp('2%'),
    // height: hp('5%'),
    // width: wp('10%'),
    alignItems: 'center',
  },
});
