import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

// Svgs
import Seat from '../../assets/svg/Seat.svg';
import BlueLocation from '../../assets/svg/BlueLocation.svg';
import Calendar from '../../assets/svg/Calendar.svg';
import Clock from '../../assets/svg/Clock.svg';
import Check from '../../assets/svg/Check.svg';

import styles from './Style';
import HomeStyle from '../Home/Style';
import Header from '../../Componets/Header';
import Modal from 'react-native-modal';

const BookingDetails = ({navigation, route}) => {
  const {type} = route.params || {};
  const [enquiryModel, setEnquiryModel] = useState(false);
  const [location, setLocation] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  
  useEffect(() => {
    getDeatils();
  }, []);

  const getDeatils = async () => {
    const locationsData = await AsyncStorage.getItem('location');
    const dateTimeData = await AsyncStorage.getItem('dateTime');
    setLocation(JSON.parse(locationsData));
    setDateTime(JSON.parse(dateTimeData));
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar backgroundColor={'#952D24'} />
      <View>
        <Image
          source={require('../../assets/images/Header.png')}
          style={{
            width: wp('100%'),
            height: hp('20%'),
            resizeMode: 'cover',
          }}
        />
        <View style={styles.headerView}>
          <Header
            heading={type === 'accept' ? 'Accept Booking' : 'Booking detail'}
            leftIcon={true}
            handleLeftIconPress={() => {
              if (type === 'accept') {
                navigation.navigate('Status');
              } else {
                navigation.goBack();
              }
            }}
          />
        </View>
      </View>
      <View style={styles.mainView}>
        <Image
          source={require('../../assets/images/BigCar.png')}
          style={styles.carImg}
        />
        {/* Car name and color */}
        <View style={styles.nameView}>
          <View>
            <Text style={HomeStyle.carNameTxt}>Honda I20</Text>
            <Text style={HomeStyle.colorValueTxt}>MU dfh 1542</Text>
          </View>
          {/* <TouchableOpacity style={styles.infoBox}>
            <View style={HomeStyle.rowContainer}>
              <Text style={HomeStyle.colorTxt}>Color</Text>
              <View
                style={[
                  HomeStyle.colorView,
                  {backgroundColor: '#2850E0'},
                ]}></View>
            </View>
            <Text style={HomeStyle.colorValueTxt}>Yellow</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.infoBox}>
            <View style={{flexDirection: 'row'}}>
              <Text style={HomeStyle.colorTxt}>Seats</Text>
              <Seat width={wp('5%')} height={hp('3%')} fill={'#952D24'} />
            </View>
            <Text style={HomeStyle.colorValueTxt}>5</Text>
          </TouchableOpacity>
        </View>
        {/* Pickup and drop location */}
        <View style={styles.locationView}>
          <View>
            <BlueLocation width={wp('5%')} height={hp('3%')} />
            <View style={styles.borderView}></View>
            <BlueLocation width={wp('5%')} height={hp('3%')} />
          </View>
          <View>
            <View style={{flex: 1}}>
              <Text style={HomeStyle.colorValueTxt}>Pick-Up</Text>
              <Text style={styles.locationTxt}>
                {location?.pickUp ? location?.pickUp : 'New york'}
              </Text>
            </View>
            <View>
              <Text style={HomeStyle.colorValueTxt}>Drop-Of</Text>
              <Text style={styles.locationTxt}>
                {location?.dropOff
                  ? location?.dropOff
                  : '2464 Royal Ln. Mesa, New Je....'}
              </Text>
            </View>
          </View>
        </View>
        {/* Date and time */}
        <View style={styles.dateView}>
          <View
            style={[
              HomeStyle.rowContainer,
              {marginBottom: hp('2%'), justifyContent: 'space-between'},
            ]}>
            <View style={styles.dateInputBox}>
              <View>
                <Text style={[HomeStyle.colorTxt, {marginBottom: hp('0.8%')}]}>
                  Date
                </Text>
                <Text style={HomeStyle.colorValueTxt}>
                  {moment(dateTime?.date).format('Do MMMM')}
                </Text>
              </View>
              <Calendar width={wp('5%')} height={hp('3%')} />
            </View>
            <View style={styles.dateInputBox}>
              <View>
                <Text style={[HomeStyle.colorTxt, {marginBottom: hp('0.8%')}]}>
                  Time
                </Text>
                <Text style={HomeStyle.colorValueTxt}>
                  {moment(dateTime?.time).format('LT')}
                </Text>
              </View>
              <Calendar width={wp('5%')} height={hp('3%')} />
            </View>
          </View>
          {/* <View
            style={[HomeStyle.rowContainer, {justifyContent: 'space-between'}]}>
            <View style={styles.dateInputBox}>
              <View>
                <Text style={[HomeStyle.colorTxt, {marginBottom: hp('0.8%')}]}>
                  From
                </Text>
                <Text style={HomeStyle.colorValueTxt}>DD / MM / YYYY</Text>
              </View>
              <Clock width={wp('5%')} height={hp('3%')} />
            </View>
            <View style={styles.dateInputBox}>
              <View>
                <Text style={[HomeStyle.colorTxt, {marginBottom: hp('0.8%')}]}>
                  To
                </Text>
                <Text style={HomeStyle.colorValueTxt}>DD / MM / YYYY</Text>
              </View>
              <Clock width={wp('5%')} height={hp('3%')} />
            </View>
          </View> */}
        </View>
        {/* Price (Accept Booking) */}
        {type === 'accept' ? (
          <View style={styles.priceView}>
            <Text style={styles.priceTxt}>Price</Text>
            <Text style={[styles.priceTxt, {color: '#952D24'}]}>$125.00</Text>
          </View>
        ) : (
          // {/* Enquiry Button (Booking Details) */}
          <View
            style={{
              marginTop: hp('10%'),
              marginBottom: hp('1%'),
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.enquiryBtn}
              onPress={() => setEnquiryModel(true)}>
              <Text style={styles.btnTxt}>Enquiry</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* Enquiry Model */}
      <Modal
        isVisible={enquiryModel}
        onBackButtonPress={() => setEnquiryModel(false)}
        onBackdropPress={() => setEnquiryModel(false)}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.modelBox}>
            <Check />
            <Text style={styles.headingTxt}>Enquiry</Text>
            <Text style={styles.descriptionTxt}>
              Your enquiry is submitted successfully our concern department will
              contact you soon{' '}
            </Text>
            <TouchableOpacity
              style={styles.btnView}
              onPress={() => {
                setEnquiryModel(false);
                navigation.navigate('Booking');
              }}>
              <Text style={[styles.btnTxt, {color: '#242E42'}]}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default BookingDetails;
