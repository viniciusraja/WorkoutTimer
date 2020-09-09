import { StyleSheet } from 'react-native';
import Constants from 'config/constants';

export const styles = StyleSheet.create({
  container: {
    height: Constants.Layout.window.height * 0.12,
    width: Constants.Layout.window.width * 0.8,
    borderRadius: Constants.Layout.window.height * 0.015,
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: Constants.Colors.backgroundColorDarker,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 2,
  },
  title: {
    height: '100%',
    width: '100%',
    paddingLeft: 20,
    textAlign: 'left',
    textAlignVertical: 'center',
    fontFamily: Constants.Fonts.primaryBoldFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
    color: Constants.Colors.primaryText,
  },
});
