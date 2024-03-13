import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Svgs
import Location from '../../assets/svg/location.svg';
import Search from '../../assets/svg/search.svg';
import Filter from '../../assets/svg/Filter.svg';
import Seat from '../../assets/svg/Seat.svg';

import styles from './Style';
import {Cars, CarsInfo, Category} from '../../utils/DemoData';
const Home = ({navigation}) => {
  const [selected, setSelected] = useState(1);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      contentContainerStyle={styles.mainContainer}>
      <StatusBar backgroundColor={'#952D24'} />
      <View style={styles.topView}>
        <Image
          source={require('../../assets/images/Header.png')}
          style={{
            width: wp('100%'),
            height: hp('28%'),
            resizeMode: 'cover',
          }}
        />

        <View style={styles.locationRow}>
          {/* drawer bars icon */}
          <View>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{padding: 10}}>
              <Image
                source={require('../../assets/icons/bars.png')}
                style={{
                  width: wp('5%'),
                  height: hp('2%'),
                  tintColor: '#FFF',
                }}
              />
            </TouchableOpacity>
          </View>
          {/* Location and Headding */}
          <View>
            <View style={styles.locationView}>
              <Location width={wp('5%')} height={hp('3%')} />
              <Text style={[styles.locationTxt]}>2972 Westheimer Rd.</Text>
            </View>
            <View style={{marginRight: hp('3%')}}>
              <Text style={styles.FindTxt}>Find your perfect</Text>
              <Text style={[styles.FindTxt, {color: '#FFDE00'}]}>
                Car Rent !
              </Text>
            </View>
          </View>
          {/* Profile Picture */}
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.profileImg}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Search */}
      <View style={styles.mainView}>
        <View style={styles.searchView}>
          <View style={{flex: 0.5}}>
            <Search width={wp('6%')} height={hp('5%')} />
          </View>
          <View style={{flex: 4}}>
            <TextInput placeholderTextColor={'#000'} placeholder="Search" />
          </View>
          <TouchableOpacity style={{flex: 0.5}}>
            <Filter width={wp('10%')} height={hp('6%')} />
          </TouchableOpacity>
        </View>

        {/* Car banner */}
        <View style={styles.bannerView}>
          <Image source={require('../../assets/images/car.png')} />
          <View>
            <Text style={styles.FindTxt}>safe Ride</Text>
            <Text
              style={{
                marginVertical: hp('0.1%'),
                width: wp('60%'),
              }}>{`Lorem Ipsum is simply dummy text  of the printing and`}</Text>
            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookBtnTxt}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Category */}
        {/*
         <View style={styles.categoryView}>
          <Text style={styles.categoryTxt}>Category</Text>
          <View style={styles.categoryRow}>
            {Cars.map(item => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.categoryItem,
                  {
                    backgroundColor:
                      selected === item.id ? '#952D24' : 'transparent',
                  },
                ]}
                onPress={() => setSelected(item.id)}>
                <item.image width={wp('10%')} height={hp('6%')} />
                <Text
                  style={[
                    styles.carsTxt,
                    {
                      color: selected === item.id ? '#FFF' : '#cccccc',
                    },
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View> */}
        {/* Cars card */}
        <View>
          <TouchableOpacity
            style={[
              styles.rowContainer,
              {justifyContent: 'space-between', marginVertical: hp('2%')},
            ]}>
            <Text style={styles.categoryTxt}>Taxi Type</Text>
            <Text style={styles.seeallTxt}>See all</Text>
          </TouchableOpacity>
          <FlatList
            data={CarsInfo}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item}) => {
              return (
                <View style={styles.carbox}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/images/Car2.png')}
                      style={styles.catImg}
                    />
                    {/* <TouchableOpacity style={styles.infoBox}>
                      <View style={styles.rowContainer}>
                        <Text style={styles.colorTxt}>Color</Text>
                        <View
                          style={[
                            styles.colorView,
                            {backgroundColor: item.colorCode},
                          ]}></View>
                      </View>
                      <Text style={styles.colorValueTxt}>Blue</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.infoBox}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.colorTxt}>Seats</Text>
                        <Seat width={wp('5%')} height={hp('3%')} />
                      </View>
                      <Text style={styles.colorValueTxt}>{item.seats}</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={[
                      styles.rowContainer,
                      {justifyContent: 'space-between'},
                    ]}>
                    <View>
                      <View style={styles.rowContainer}>
                        <Text style={styles.carNameTxt}>Car Type : </Text>
                        <Text style={styles.carValueTxt}>{item.name}</Text>
                      </View>
                      {/* <View style={styles.rowContainer}>
                        <Text style={styles.carNameTxt}>Car no : </Text>
                        <Text style={styles.carValueTxt}>{item.carNo}</Text>
                      </View> */}
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Category')}
                        style={[
                          styles.categoryItem,
                          {backgroundColor: '#952D24'},
                        ]}>
                        <Text
                          style={[
                            styles.carsTxt,
                            {color: '#fff', marginLeft: 0},
                          ]}>
                          Enquiry Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>

        {/* Category List */}
        <View style={styles.categoryView}>
          <Text style={styles.categoryTxt}>Service Type</Text>
          <View style={{marginBottom: hp('2%')}}>
            <FlatList
              data={Category}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Mapsecond')}
                  key={item.id}
                  style={{alignItems: 'center', marginRight: hp('2%')}}>
                  <item.image width={wp('30%')} height={hp('20%')} />
                  <Text style={styles.colorTxt}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
