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
import {COLOR, WHITE, FONT, FONT_SIZE} from '../../config/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Lock from '../../assets/svg/lock.svg';
import EyeSlash from '../../assets/svg/eye_slash.svg';
const Password = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.RectangleContainer}>
        <Text style={[styles.PasswordText,{fontSize:FONT_SIZE.F_3}]}>Password</Text>
        <Text style={[styles.PasswordText,{fontSize:FONT_SIZE.F_22}]}>
          Lorem Ipsum is simply dummy text of the printing and
        </Text>
        <ImageBackground
          source={R.Icons.Rectangle}
          resizeMode="contain"
          style={styles.RectangleImage}>
            <View style={{marginVertical:hp("20%")}}>
            <View style={styles.mainContainer}>
            <Lock style={styles.svgIcon} />
              <TextInput
                style={styles.textContainer}
                placeholder="New Password"
                placeholderTextColor="#464444"
              />
              <EyeSlash style={styles.passwordeye} />

            </View>
            <View style={styles.mainContainer}>
            <Lock style={styles.svgIcon} />
              <TextInput
                style={styles.textContainer}
                placeholder="Re-new Password"
                placeholderTextColor="#001D4C"
                
              />
              <EyeSlash style={styles.passwordeye} />
            </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={styles.BtnStyle}>
              <Text style={styles.BtnText}>Change Password</Text>
            </TouchableOpacity>
          </View>
            </View>
         
        </ImageBackground>
      </View>
    </View>
  );
};

export default Password;
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
  PasswordText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_25,
    fontFamily:FONT.BOLD,
    marginHorizontal: hp('2.4%'),
  },
  BtnStyle: {
    backgroundColor: '#952D24',
    padding: 18,
    width: wp('75%'),
    marginTop: hp('7%'),
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffff',
  },
  BtnText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_2,
    textAlign: 'center',
    fontFamily:FONT.MEDIUM
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
    fontFamily: FONT.REGULAR,
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
  passwordeye: {
    height: hp('2.5%'),
    width: wp('6%'),
    marginRight: hp('3%'),
  },
});
