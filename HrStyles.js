import { PixelRatio, StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";
import { Fonts, Colors } from "../../Themes/";

const defaultMargin = PixelRatio.getPixelSizeForLayoutSize(5);

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  row: {
    flexDirection: "row"
  },
  leftSide: {
    backgroundColor: "white",
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  rightSide: {
    backgroundColor: "white",
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  textStyle: {
    color: Colors.white,
    marginTop: defaultMargin,
    marginBottom: defaultMargin,
    paddingHorizontal: 5
  }
});
