import React,{useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native';
import { COLOR, FONT, FONT_SIZE } from '../config/Globles';
import {  heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Header from '../Componets/Header';
const RadioBtn = [{
    id: 1,
    name:'Airport Pick and Drop',

  },
  {
    id: 2,
    name: 'Daily Rentals',

  },
  {
    id: 3,
    name: 'Outstations',

  }
]
const Category = ({navigation}) => {
  const [selectRedio, setSelectRedio] = useState(1);
  return (
    <View style={{flex:1,backgroundColor:COLOR.WHITE}}>
       <View>
        <Image
          source={require('../assets/images/Header.png')}
          style={{
            width: wp('100%'),
            height: hp('20%'),
            resizeMode: 'cover',
          }}
        />
        <View style={styles.headerView}>
          <Header heading={'schedule'} leftIcon={true} handleLeftIconPress={() => navigation.goBack()} />
        </View>
      </View>
     <View style={{marginHorizontal:hp("5%"),marginVertical:hp("10%")}}>
     {RadioBtn.map((v, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectRedio(v.id)}>
          <View style={styles.wrapper}>
            <View style={styles.redio}>
              {selectRedio === v.id ? (
                <View style={styles.redioBg}></View>
              ) : null}
            </View>
            <Text style={styles.rbText}>{v.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
     </View>
     <View style={{marginVertical:hp("10%")}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Map')}
                style={styles.BtnStyle}>
                <Text style={styles.BtnText}>Next</Text>
              </TouchableOpacity>
            </View>
    </View>
  );
};

export default Category;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  redio: {
    borderColor: COLOR.ThemeColor,
    borderWidth: 2,
    height: 40,
    width: 40,
    borderRadius: 20,
    marginTop:hp("1.8%")
  },
  redioBg: {
    backgroundColor: COLOR.YELLOW,
    alignSelf:"center",
    // borderWidth: 2,
    marginTop:hp("0.7%"),
    height: 25,
    width: 25,
    borderRadius: 20,
  },
  rbText:{
    marginLeft:hp("2%"),
    color:COLOR.BLACK,
    fontSize:FONT_SIZE.F_22,
    fontFamily:FONT.MEDIUM,
    marginTop:hp("1.9%")

  },
  BtnStyle: {
    backgroundColor: '#952D24',
    padding: 16,
    width: wp('88%'),
    marginTop: hp('8%'),
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffff',
  },
  BtnText: {
    color: '#fff',
    fontSize: FONT_SIZE.F_3,
    textAlign: 'center',
  },
  headerView: {
    width: wp('90%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    marginHorizontal: hp('2%'),
    marginTop: hp('2%'),
  },
});
