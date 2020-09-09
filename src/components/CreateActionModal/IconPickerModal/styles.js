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
  headerTitle: {
    height: '15%',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: Constants.Fonts.primaryBoldFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
    color: Constants.Colors.darkText,
    alignSelf: 'center',
  },
  iconRow: {
    width: '90%',
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    height: Constants.Fonts.xLargeFontSize + 20,
    width: Constants.Fonts.xLargeFontSize + 20,
    backgroundColor: Constants.Colors.backgroundColorDarker,
    borderRadius: Constants.Fonts.xLargeFontSize + 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  selctButtonContainer: {
    height: '60%',
    width: '55%',
    backgroundColor: Constants.Colors.agreeColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
  },
  selctButtonText: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: Constants.Fonts.primaryFontFamily,
    fontSize: Constants.Fonts.smallFontSize,
    color: Constants.Colors.primaryText,
  },
});
