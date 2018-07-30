/**
 * @flow
 */

import React from 'react';
import {
  Text
} from 'react-native';

interface Props {
  nameStyle?: Object;
  name: string;
  valueStyle?: Object;
  value: number;
}

const Label = (props: Props) => {
  const { 
    nameStyle,
    name,
    valueStyle,
    value
  } = props;
  return (
    <Text style={nameStyle}>
      {`${name}: `}
      <Text style={valueStyle}>
        {value}
      </Text>
    </Text>
  );
}

export default Label;

