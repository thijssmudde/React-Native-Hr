import React, { Component } from "react";
import { View } from "react-native";
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
            styles.side,
            { height: this.props.width, backgroundColor: this.props.color }
          ]}
        />
        {this.props.children}
        <View
          style={[
            styles.side,
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
  color: PropTypes.color,
  children: PropTypes.children
};
