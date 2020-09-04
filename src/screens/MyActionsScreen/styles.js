import { StyleSheet } from 'react-native';
import Constants from 'config/constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    backgroundColor: Constants.Colors.backgroundColor,
  },
  actionsList: {
    width: Constants.Layout.window.width,
    height: '100%',
  },
  titleLastWorkouts: {
    marginBottom: 10,
    fontFamily: Constants.Fonts.primaryFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
    color: Constants.Colors.primaryText,
  },
});
