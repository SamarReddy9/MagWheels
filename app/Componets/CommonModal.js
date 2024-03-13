import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Check from '../assets/svg/Check.svg';

const CommonModal = props => {
  return (
    <Modal
      isVisible={props.isVisible}
      onBackButtonPress={() => props.setIsVisible(false)}
      onBackdropPress={() => props.setIsVisible(false)}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.modelBox}>
          <Check />
          <Text style={styles.headingTxt}>{props.heading}</Text>
          <Text style={styles.descriptionTxt}>{props.description}</Text>
          {props.multiple ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: wp('85%'),
                borderTopColor: '#EFEFF4',
                borderTopWidth: hp('0.1%'),
              }}>
              <TouchableOpacity
                style={[styles.btnView, { borderTopWidth: 0 }]}
                onPress={() => props.handleAcceptPress()}
              >
                <Text style={[styles.btnTxt, { color: '#952D24' }]}>{props.btn1}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnView, { borderTopWidth: 0 }]}
                onPress={() => props.setIsVisible(false)}
              >
                <Text style={styles.btnTxt}>{props.btn2}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={[styles.btnView, { width: wp('85%') }]}
              onPress={() => props.setIsVisible(false)}
            >
              <Text style={styles.btnTxt}>Ok</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CommonModal;

const styles = StyleSheet.create({
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
    textAlign: 'center',
  },
  btnView: {
    borderTopColor: '#EFEFF4',
    borderTopWidth: hp('0.1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: '#242E42',
    fontSize: hp('3%'),
    fontWeight: '600',
  },
});
