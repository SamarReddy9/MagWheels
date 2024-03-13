import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../config/Styles';
import {COLOR, WHITE, FONT, FONT_SIZE} from '../../config/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const OTP = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.RectangleContainer}>
           <Text style={[styles.otpText,{fontSize:FONT_SIZE.F_3}]}>OTP</Text>
        <Text style={[styles.otpText,{fontSize:FONT_SIZE.F_22}]}>
          Lorem Ipsum is simply dummy text of the printing and
        </Text>
        <ImageBackground
          source={R.Icons.Rectangle}
          resizeMode="contain"
          style={styles.RectangleImage}>
          <View style={styles.OTPcontainer}>
            {/* {otpValues.map((value, index) => ( */}
            <View style={[styles.inputContainer]}>
              <TextInput
                style={[styles.input]}
                keyboardType="numeric"
                maxLength={1}
                // onChangeText={(text) => handleInputChange(text, index)}
                // value={value}
              />
            </View>
            <View style={[styles.inputContainer]}>
              <TextInput
                style={[styles.input]}
                keyboardType="numeric"
                maxLength={1}
                // onChangeText={(text) => handleInputChange(text, index)}
                // value={value}
              />
            </View>
            <View style={[styles.inputContainer]}>
              <TextInput
                style={[styles.input]}
                keyboardType="numeric"
                maxLength={1}
                // onChangeText={(text) => handleInputChange(text, index)}
                // value={value}
              />
            </View>
            <View style={[styles.inputContainer]}>
              <TextInput
                style={[styles.input]}
                keyboardType="numeric"
                maxLength={1}
                // onChangeText={(text) => handleInputChange(text, index)}
                // value={value}
              />
            </View>

            {/* ))} */}
          </View>
          <Text
            style={{
              marginLeft: hp('32%'),
              marginTop: hp('2%'),
              color: COLOR.ThemeColor,
              fontFamily: FONT.REGULAR,
            }}>
            Resend OTP
          </Text>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Password')}
              style={styles.BtnStyle}>
              <Text style={styles.BtnText}>Verification</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default OTP;
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
    height: hp('63%'),
    marginVertical: hp('7%'),
  },
  otpText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_25,
    fontFamily: FONT.BOLD,
    marginHorizontal: hp('2.4%'),
  },
  BtnStyle: {
    backgroundColor: '#952D24',
    padding: 13,
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
    fontFamily:FONT.REGULAR,
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
});
