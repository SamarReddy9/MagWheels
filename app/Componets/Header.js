import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// svg
import Arrowleft from '../assets/svg/Arrowleft.svg';
import Edit from '../assets/svg/Edit.svg';

const Header = (props) => {
  return (
    <View style={styles.mainView}>
      <View style={{flex: 1.5}}>
        {props.leftIcon &&
        (<TouchableOpacity onPress={() => props.handleLeftIconPress()}>
          <Arrowleft width={wp('8%')} height={hp('8%')} />
        </TouchableOpacity>)}
      </View>
      <View style={{flex: 3, alignItems: 'center'}}>
        <Text style={styles.headingTxt}>{props.heading}</Text>
      </View>
      <View style={{flex: 1.5, alignItems: 'flex-end'}}>
        {props.rightIcon &&
        (<TouchableOpacity>
          <Edit width={wp('8%')} height={hp('6%')} />
        </TouchableOpacity>)}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: hp('1.5')
  },
  headingTxt: {
    color: '#fff',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
});
