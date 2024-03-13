import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../Componets/Header';

import Seat from '../../assets/svg/Seat.svg';
import BlueLocation from '../../assets/svg/BlueLocation.svg';

import styles from './Style';
import HomeStyle from '../Home/Style';
import CommonModal from '../../Componets/CommonModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const HandleStatus = ({navigation}) => {
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAceept, setIsAceept] = useState(false);
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

  const handleAcceptPress = () => {
    console.log('handleAcceptPress: ', handleAcceptPress);
    setIsVisible(false);
    setIsAceept(true);
    setSelected(1)
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
            heading={'Booking detail'}
            leftIcon={true}
            handleLeftIconPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <View style={styles.mainView}>
        {/* Booking Buttons */}
        <View
          style={[
            styles.rowContainer,
            {justifyContent: 'space-around', marginVertical: hp('1.5%')},
          ]}>
          <TouchableOpacity
            onPress={() => setSelected(0)}
            style={[
              styles.btnView,
              {backgroundColor: selected === 0 ? '#952D24' : 'transparent'},
            ]}>
            <Text
              style={[
                styles.btnTxt,
                {color: selected === 0 ? '#fff' : '#001D4C'},
              ]}>
              Enquiry
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(1)}
            style={[
              styles.btnView,
              {backgroundColor: selected === 1 ? '#952D24' : 'transparent'},
            ]}>
            <Text
              style={[
                styles.btnTxt,
                {color: selected === 1 ? '#fff' : '#001D4C'},
              ]}>
              Accept
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(2)}
            style={[
              styles.btnView,
              {backgroundColor: selected === 2 ? '#952D24' : 'transparent'},
            ]}>
            <Text
              style={[
                styles.btnTxt,
                {color: selected === 2 ? '#fff' : '#001D4C'},
              ]}>
              Reject
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card */}
        <TouchableOpacity
          onPress={() => {
            if (selected === 1) {
              navigation.navigate('details', {type: 'accept'});
            }
          }}
          style={styles.carCard}>
          <View style={styles.rowContainer}>
            <Image source={require('../../assets/images/Car2.png')} />
            <View style={{marginLeft: hp('3%')}}>
              <Text style={styles.carNameTxt}>Honda I20</Text>
              <Text style={styles.carValueTxt}>MU dfh 1542</Text>
            </View>
          </View>
          {/* Color, seats and price */}
          <View
            style={[
              styles.rowContainer,
              {justifyContent: 'space-between', marginVertical: hp('1.5%')},
            ]}>
            <View style={styles.rowContainer}>
              {/* <TouchableOpacity
                style={[HomeStyle.infoBox, { marginRight: hp('1.5%') }]}>
                <View style={HomeStyle.rowContainer}>
                  <Text style={HomeStyle.colorTxt}>Color</Text>
                  <View
                    style={[
                      HomeStyle.colorView,
                      { backgroundColor: '#2850E0' },
                    ]}></View>
                </View>
                <Text style={HomeStyle.colorValueTxt}>Blue</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={HomeStyle.infoBox}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={HomeStyle.colorTxt}>Seats</Text>
                  <Seat width={wp('5%')} height={hp('3%')} fill={'#952D24'} />
                </View>
                <Text style={HomeStyle.colorValueTxt}>5</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.priceTxt}>$125.00</Text>
          </View>
          {/* Location */}
          <View style={styles.locationView}>
            <View>
              <BlueLocation width={wp('5%')} height={hp('3%')} />
              <View style={styles.borderView}></View>
              <BlueLocation width={wp('5%')} height={hp('3%')} />
            </View>
            <View style={{marginLeft: hp('3%')}}>
              <View
                style={[
                  styles.rowContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <View>
                  <Text style={HomeStyle.colorValueTxt}>Pick-Up</Text>
                  <Text style={styles.locationTxt}>
                    {location?.pickUp ? location?.pickUp : 'New york'}
                  </Text>
                </View>
                <View>
                  <Text style={HomeStyle.colorValueTxt}>{moment(dateTime?.time).format('LT')}</Text>
                  <Text style={styles.locationTxt}>{moment(dateTime?.date).format('Do MMMM')}</Text>
                </View>
              </View>
              <View style={styles.borderBottomView}></View>
              <View
                style={[
                  styles.rowContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <View>
                  <Text style={HomeStyle.colorValueTxt}>Drop-Of</Text>
                  <Text style={styles.locationTxt}>
                    {location?.dropOff ? location?.dropOff : 'Dubai'}
                  </Text>
                </View>
                <View>
                  <Text style={HomeStyle.colorValueTxt}>{moment(dateTime?.time).format('LT')}</Text>
                  <Text style={styles.locationTxt}>{moment(dateTime?.date).format('Do MMMM')}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Accept and Reject button */}
          {selected === 0 && (
            <View
              style={[
                styles.rowContainer,
                {justifyContent: 'space-around', marginTop: hp('2%')},
              ]}>
              <TouchableOpacity
                style={styles.btnView}
                onPress={() => setIsVisible(true)}>
                <Text style={styles.btnTxt}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnView, {backgroundColor: '#952D24'}]}>
                <Text style={[styles.btnTxt, {color: '#fff'}]}>Reject</Text>
              </TouchableOpacity>
            </View>
          )}
          {/* Label View */}
          {selected === 1 && (
            <View style={styles.labelView}>
              <Text style={styles.labelTxt}>Accept</Text>
            </View>
          )}
          {selected === 2 && (
            <View style={[styles.labelView, {backgroundColor: '#952D24'}]}>
              <Text style={styles.labelTxt}>Reject</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      {/* Accept, reject Model */}
      {!isAceept ? (
        <CommonModal
          heading={'Quotation'}
          description={
            'Your Quotation for Ride from Indore to Bangalore is 2000 INR'
          }
          btn1={'Accept'}
          btn2={'Reject'}
          multiple={true}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          handleAcceptPress={handleAcceptPress}
        />
      ) : (
        <CommonModal
          heading={'Successful'}
          description={'Your ride is booked successfuly'}
          isVisible={isAceept}
          setIsVisible={setIsAceept}
        />
      )}
    </ScrollView>
  );
};

export default HandleStatus;
