import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Style';
import Header from '../../Componets/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Calendar, LocaleConfig} from 'react-native-calendars';

import {COLOR} from '../../config/Globles';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Outstations = ({navigation}) => {
  const [selectDate, setSelectDate] = useState({});
  const [selectTime, setselectTime] = useState(null);
  const [isDisplayTime, setisDisplayTime] = useState(false);

  const handleNextPress = async () => {
    const dateTimeData = {
      date: selectDate,
      time: selectTime,
    };
    await AsyncStorage.setItem('dateTime', JSON.stringify(dateTimeData));
    navigation.navigate('details');
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={COLOR.ThemeColor}
        barStyle={'light-content'}
      />
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
            heading={'Outstations'}
            leftIcon={true}
            handleLeftIconPress={() => navigation.goBack()}
          />
        </View>
      </View>
      {/* Callender */}
      <View>
        <Calendar
          style={{
            height: hp('50%'),
            width: '100%',
          }}
          current={'2023-08-17'}
          onDayPress={day => {
            setSelectDate(day);
          }}
          minDate={new Date().toJSON().slice(0, 10)}
          // Mark specific dates as marked
          markedDates={{
            [selectDate.dateString]: {
              startingDay: true,
              color: COLOR.ThemeColor,
              textColor: '#fff',
              selected: true,
              selectedColor: COLOR.ThemeColor,
            },
          }}
          markingType="dot"
          theme={{
            arrowColor: COLOR.ThemeColor,
          }}
        />
      </View>

      {/* Date and time */}
      <View style={styles.timeView}>
        <TouchableOpacity
          style={[styles.btnView, {width: wp('50%')}]}
          onPress={() => setisDisplayTime(true)}>
          <Text style={styles.btnTxt}>Select Time</Text>
        </TouchableOpacity>
        {isDisplayTime && (
          <RNDateTimePicker
            mode="time"
            value={new Date()}
            is24Hour={false}
            onChange={(e, val) => {
              setisDisplayTime(false);
              setselectTime(val);
            }}
          />
        )}
      </View>
      {selectDate && selectTime && (
        <View style={styles.dateview}>
          <Text style={styles.dateTimeTxt}>Pick-Up Date and Time</Text>
          <Text style={styles.dateTimeValueTxt}>{`${moment(
            selectDate.dateString,
          ).format('Do MMMM')} , ${moment(selectTime).format('LT')}`}</Text>
        </View>
      )}
      {/* Next button */}
      <View style={{alignItems: 'center', marginVertical: hp('2%')}}>
        <TouchableOpacity
          style={styles.btnView}
          onPress={() => handleNextPress()}>
          <Text style={styles.btnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Outstations;
