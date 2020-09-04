import { StyleSheet } from 'react-native';
import Constants from 'config/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingVertical: 20,
    bottom:
      (Constants.Layout.window.height - Constants.Layout.headerHeight) / 2 -
      Constants.Layout.window.height * 0.3,
    height: Constants.Layout.window.height * 0.6,
    width: Constants.Layout.window.width * 0.9,
    backgroundColor: Constants.Colors.backgroundColorLight,
    borderRadius: Constants.Layout.window.height * 0.015,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  header: {
    position:'absolute',
    top:10,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: Constants.Fonts.mediumFontSize,
    fontFamily: Constants.Fonts.primaryBoldFontFamily,
    color: Constants.Colors.darkText,
    width: '40%',
    textAlign: 'center',
  },
});
