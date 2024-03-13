import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLOR, FONT, FONT_SIZE} from './Globles';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.ThemeColor,
  },
  RectangleContainer: {
    marginVertical: hp('10%'),
  },
  RectangleImage: {
    alignSelf: 'center',
    width: wp('90%'),
    height: hp('65%'),
  },
});
