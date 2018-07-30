/**
 * @flow
 */

import React from 'react';
import {
  Text,
  Modal,
  View,
} from 'react-native';

import Button from '../button';
import Styles from './styles';

interface Props {
  modalVisible: boolean;
  onPress: Function;
}

const CustomModal = (props: Props) => {
    const {modalVisible, onPress} = props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=> onPress(!modalVisible)}>
        <View style={Styles.container}>
          <View style={Styles.message}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              Bull's eyes
            </Text>
            <Text style={{fontSize: 16}}>
              This is a game that uses a slider to guess a number.
            </Text>
            <Button
              styles={{backgroundColor: 'red'}}
              titleStyle={{fontSize: 14}}
              onPress={()=> onPress(!modalVisible)}
              title="Hide Modal"
            />
          </View>
        </View>
      </Modal>
    );
}

export default CustomModal;

