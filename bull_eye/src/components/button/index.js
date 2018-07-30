/**
 * @flow
 */

import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import Styles from './styles';

interface Props {
  onPress: Function;
  styles?: Object;
  titleStyle?: Object;
  title: string;
}

const ButtonCustom = (props: Props) => {
    return (
      <TouchableOpacity 
      onPress={props.onPress}
      style={[Styles.button, props.styles]}>
        <Text style={[Styles.title, props.titleStyle]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    );
}

export default ButtonCustom;

