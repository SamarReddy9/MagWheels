import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FONT } from '../../config/Globles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  mainView: {
    paddingHorizontal: hp('3.5%'),
  },
  carImg: {
    width: wp('100%'),
    height: hp('25%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoBox: {
    height: hp('8%'),
    padding: hp('2%'),
    borderRadius: hp('2%'),
    justifyContent: 'center',
    borderColor: '#cccccc',
    borderWidth: hp('0.1%'),
  },
  locationView: {
    flexDirection: 'row',
    gap: 5,
    height: hp('15%'),
    marginVertical: hp('2%'),
  },
  locationTxt: {
    color: '#001D4C',
    fontSize: hp('2.2%'),
  },
  borderView: {
    height: hp('6%'),
    borderColor: '#cccccc',
    borderLeftWidth: hp('0.2%'),
    borderStyle: 'dashed',
    marginLeft: hp('1.5%'),
    marginVertical: hp('1 %'),
  },
  dateInputBox: {
    width: wp('40%'),
    borderColor: '#cccccc',
    borderWidth: hp('0.2%'),
    borderRadius: hp('2%'),
    padding: hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateView: {
    marginVertical: hp('2%'),
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('10%'),
    marginBottom: hp('1%'),
  },
  priceTxt: {
    color: '#02141F',
    fontSize: hp('3%'),
    fontWeight: '500',
  },
  enquiryBtn: {
    backgroundColor: '#952D24',
    width: wp('90%'),
    height: hp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('2%'),
  },
  btnTxt: {
    color: '#fff',
    fontSize: hp('2.6%'),
    fontFamily: FONT.MEDIUM
  },
  // Model
  modelBox: {
    backgroundColor: '#fff',
    width: wp('85%'),
    height: hp('40%'),
    alignItems: 'center',
    borderRadius: hp('2%'),
    padding: hp('2%'),
  },
  headingTxt: {
    color: '#242E42',
    fontSize: hp('3%'),
    marginTop: hp('3%'),
  },
  descriptionTxt: {
    color: '#8A8A8F',
    fontSize: hp('2%'),
    marginVertical: hp('3%'),
    textAlign: 'center'
  },
  btnView: {
    borderTopColor: '#EFEFF4',
    borderTopWidth: hp('0.1%'),
    width: wp('85%'),
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
