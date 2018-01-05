import React, { Component } from "react";
import { View, Text } from "react-native";
//Styles
import styles from "./HrStyles";
//Validation
import PropTypes from "prop-types";

export default class Hr extends Component {
  render() {
    return (
      <View style={styles.row}>
        <View
          style={[
            styles.leftSide,
            { height: this.props.width, backgroundColor: this.props.color }
          ]}
        />
        <Text
          style={[
            styles.textStyle,
            { paddingHorizontal: this.props.padding },
            this.props.textStyle
          ]}
        >
          {this.props.text}
        </Text>
        <View
          style={[
            styles.rightSide,
            { height: this.props.width, backgroundColor: this.props.color }
          ]}
        />
      </View>
    );
  }
}

//Validate all props
Hr.propTypes = {
  width: PropTypes.number,
  padding: PropTypes.number,
  textStyle: PropTypes.style,
  text: PropTypes.string,
  color: PropTypes.color
};
