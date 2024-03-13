import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import R from '../../assets/R';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { COLOR, FONT } from '../../config/Globles';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.ImageContainer}>
        <Image source={R.Icons.Rentel} style={styles.ImageContainer} />
      </View>
      <View style={{marginHorizontal: '7%'}}>
        <Text style={styles.textSection}>Rentel</Text>
        <Text style={styles.textSection_1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been{' '}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('LogIn')}
          style={styles.logInBtn}>
          <Text style={styles.BtnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
 backgroundColor:COLOR.WHITE
  },
  ImageContainer: {
    width: wp('100%'),
  },
  textSection: {
    textAlign: 'center',
    fontSize: hp('3.5%'),
    color: '#13263D',
    fontWeight: 'bold',
    marginTop: hp('10%'),
  },
  textSection_1: {
    fontFamily:FONT.REGULAR,
    fontSize: wp('4%'),
    marginTop: hp('3%'),
    // fontWeight: '100',
    color: '#13263D',
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: hp('1.2%'),
    backgroundColor: 'white',
    width: wp('80%'),
    height: hp('7%'),
    // borderRadius: 14,
  },
  text: {
    color: 'black',
  },
  logInBtn: {
    backgroundColor: '#952D24',
    padding: 19,
    width: wp('85%'),
    marginTop: hp('10%'),
    alignSelf: 'center',
    borderRadius: 20,
  },
  BtnText: {
    color: '#fff',
    fontSize: wp('5%'),
    textAlign: 'center',
    fontWeight:"600"
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
  },
});
