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
  actionInformationContainer: {
    width: '90%',
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  addImageIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: Constants.Colors.backgroundColorDarker,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: Constants.Colors.backgroundColor,
    borderRadius: Constants.Layout.window.height * 0.02,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '60%',
    height: '45%',
    fontSize: Constants.Fonts.mediumFontSize,
    fontFamily: Constants.Fonts.primaryBoldFontFamily,
    color: Constants.Colors.primaryText,
  },
  actionImage: {
    height: '100%',
    width: '100%',
    borderRadius: Constants.Layout.window.height * 0.18,
  },
  selectButton: {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Constants.Colors.backgroundColor,
    borderRadius: Constants.Layout.window.height * 0.02,
    width: '60%',
    height: '45%',
  },
  selectText: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: Constants.Fonts.mediumFontSize,
    fontFamily: Constants.Fonts.primaryBoldFontFamily,
    color: Constants.Colors.primaryText,
  },
});
