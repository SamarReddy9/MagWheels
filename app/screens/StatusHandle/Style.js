import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
    marginHorizontal: hp('2%')
  },
  carCard: {
    width: '100%',
    backgroundColor: '#E8F1FD',
    borderRadius: hp('2%'),
    padding: hp('2%'),
    overflow: 'hidden',
    position: "relative"
  },
  carNameTxt: {
    color: '#02141F',
    fontSize: hp('2%'),
    fontWeight: '500',
  },
  carValueTxt: {
    color: '#02141F',
    fontSize: hp('1.8%'),
    opacity: 0.5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceTxt: {
    color: '#02141F',
    fontSize: hp('2.7%'),
    fontWeight: 'bold',
    marginRight: hp('2%')
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('15%'),
    marginVertical: hp('1.5%'),
  },
  locationTxt: {
    color: '#001D4C',
    fontSize: hp('2%'),
  },
  borderView: {
    height: hp('6%'),
    borderColor: '#cccccc',
    borderLeftWidth: hp('0.2%'),
    borderStyle: 'dashed',
    marginLeft: hp('1.4%'),
    marginVertical: hp('1 %'),
  },
  borderBottomView: {
    borderColor: '#cccccc',
    borderBottomWidth: hp('0.2%'),
    borderStyle: 'dashed',
    marginVertical: hp('1.5 %'),
    width: wp('60%'),
  },
  btnView: {
    backgroundColor: '#98E076',
    padding: hp('1.5 %'),
    borderRadius: hp('2%'),
    width: wp('25%'),
    borderColor: '#cccccc',
    borderWidth: hp('0.1 %'),
  },
  btnTxt: {
    color: '#001D4C',
    fontSize: hp('2.2%'),
    textAlign: 'center',
  },
  labelView: {
    position: 'absolute',
    backgroundColor: '#98E076',
    width: wp('30%'),
    height: hp('4.5%'),
    right: 0,
    borderBottomLeftRadius: hp('10%'),
    justifyContent: 'center'
  },
  labelTxt: {
    color: '#fff',
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default styles;
