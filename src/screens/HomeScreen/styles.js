import { StyleSheet } from 'react-native';
import Constants from 'config/constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: Constants.Colors.backgroundColor,
  },
  titleLastWorkouts:{
    marginBottom:10,
    fontFamily: Constants.Fonts.primaryFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
    color: Constants.Colors.primaryText,
  },
});
