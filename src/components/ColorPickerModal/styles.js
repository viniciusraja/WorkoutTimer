import { StyleSheet } from 'react-native';
import Constants from 'config/constants';

export const styles = StyleSheet.create({
  container: {
    height: Constants.Layout.window.height * 0.6,
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
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
