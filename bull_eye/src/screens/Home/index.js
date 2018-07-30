/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Fragment } from 'react';
import {
  View,
  Alert
} from 'react-native';

import Assets from '../../assets';
import Styles from './style';
import Label from '../../components/label';
import Slider from '../../components/slider';
import Button from '../../components/button';
import Modal from '../../components/modal';
import getRandomNumber from '../../utils/random-number';

interface Props {

}

interface State {
  score: number;
  round: number;
  isModalOpen: boolean;
  sliderValue: number,
  bullEyes: number
}

export default class Home extends Component<Props, State> {
  state = {
    score: 0,
    round: 1,
    isModalOpen: false,
    sliderValue: getRandomNumber(),
    bullEyes: getRandomNumber()
  }
  
  onReset = () => {
    this.setState({
      score: 0,
      round: 1,
      bullEyes: getRandomNumber()
    });
  }

  onSucess = () => {
    const {score, round} = this.state;
    this.setState({
      score: score + 10,
      round: round + 1,
      bullEyes: getRandomNumber(),
      sliderValue: getRandomNumber()
    })
  }

  onFail = () => {
    const {score, round} = this.state;
    const reduceValue = score > 0 ? 2 : 0;
    this.setState({
      score: score - reduceValue,
      round: round + 1,
      bullEyes: getRandomNumber(),
      sliderValue: getRandomNumber()
    })
  }

  onHitMe = () => {
    const {sliderValue, bullEyes} = this.state;
    if (sliderValue === bullEyes) {
      Alert.alert(
        'Good Job',
        'You did it!',
        [
          {text: 'OK', onPress: this.onSucess},
        ],
      )
    } else {
      Alert.alert(
        'Too bad',
        `The value selected was: ${sliderValue}`,
        [
          {text: 'OK', onPress: this.onFail},
        ],
      )
    }
  }

  onValueChange = (value: number) => {
    this.setState({
      sliderValue: Math.round(value)
    });
  }

  onPressModal = (value: boolean) => {
    this.setState({
      isModalOpen: value
    });
  }

  renderHeader() {
    const {score, round, bullEyes} = this.state;
    return (
      <Fragment>
        <View style={Styles.labels}>
            <Label
              name={'Score'}
              value={score}
              nameStyle={{fontSize: 20}}
              valueStyle={{fontWeight: 'bold'}}
            />
            <Label
              name={'Round'}
              value={round}
              nameStyle={{fontSize: 20}}
              valueStyle={{fontWeight: 'bold'}}
            />
        </View>
        <View style={{flex: 1, alignItems:'center'}}>
          <Label
            name={"Bull's eyes"}
            value={bullEyes}
            nameStyle={{fontSize: 20}}
            valueStyle={{fontWeight: 'bold'}}
          /> 
        </View>
      </Fragment>
    );
  }

  renderSlider() {
    return (
      <View style={{flex: 1}}>
        <Slider 
          thumbImage={Assets.BullEye}
          minimumTrackTintColor={'red'}
          value={this.state.sliderValue}
          minimumValue={1}
          onValueChange={this.onValueChange}
          maximumValue={100}
        />

        <Button
            onPress={this.onHitMe}
            styles={{alignSelf: 'center', marginTop: 16}}
            title="Hit me"
        />
      </View>
    );
  }

  renderOptions() {
    return (
      <View style={Styles.options}>
        <Button
              onPress={this.onReset}
              styles={{alignSelf: 'center'}}
              title="Reset"
          />
          <Button
              onPress={() => this.onPressModal(true)}
              styles={{alignSelf: 'center'}}
              title="Help"
          />
        <Modal modalVisible={this.state.isModalOpen} onPress={this.onPressModal} />
      </View>
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.renderHeader()}
        {this.renderSlider()}
        {this.renderOptions()}
      </View>
    );
  }
}

