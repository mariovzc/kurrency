import React from 'react'
import {
  TouchableHighlight,
  View,
  Text
} from 'react-native'
import style from '../assets/styles/buttonStyle'

export default class Button extends React.PureComponent {
  render() {
    const { onPress, title } = this.props;
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
              {title}
            </Text>
        </View>
      </TouchableHighlight>
    )
  }
}