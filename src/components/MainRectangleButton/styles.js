import { StyleSheet } from 'react-native';
import Constants from 'config/constants';

export const styles = StyleSheet.create({
  container: {
    height: Constants.Layout.window.height * 0.18,
    width: '80%',
    borderRadius: Constants.Layout.window.height * 0.015,
    padding: 10,
    flexDirection: 'row',
    backgroundColor:Constants.Colors.backgroundColorDarker,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 2,
  },
  actionImageContainer: {
    height: Constants.Layout.window.height * 0.1,
    width: Constants.Layout.window.height * 0.1,
    borderRadius: Constants.Layout.window.height * 0.18 - 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionImage: {
    height: '100%',
    width: '100%',
    borderRadius: Constants.Layout.window.height * 0.18 - 5,
  },
  actionMainInformationContainer: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    textAlign:'left',
    width:'100%',
    fontFamily: Constants.Fonts.primaryFontFamily,
    fontSize: Constants.Fonts.largeFontSize,
    color: Constants.Colors.primaryText,
  },
  actionInformationTimeText: {
    textAlign:'left',
    width:'100%',
    fontFamily: Constants.Fonts.secondaryFontFamily,
    fontSize: Constants.Fonts.smallFontSize,
    color: Constants.Colors.primaryText,
  },
  actionSubInformationContainer: {
    height: '100%',
    width: '20%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  actionTimeText: {
    fontFamily: Constants.Fonts.primaryFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
    color: Constants.Colors.primaryText,
  },
});
