import { StyleSheet } from 'react-native';
import Constants from 'config/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom:
      (Constants.Layout.window.height - Constants.Layout.headerHeight) / 2 -
      Constants.Layout.window.height * 0.4,
    paddingBottom:10,
    height: Constants.Layout.window.height * 0.8,
    width: Constants.Layout.window.width * 0.9,
    backgroundColor: Constants.Colors.backgroundColorLight,
    borderRadius: Constants.Layout.window.height * 0.015,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  actionsList: {
    width: '100%',
    height: '100%',
  },
  headerTitle:{
    height:'15%',
    width:'100%',
    textAlign:'center',
    textAlignVertical:'center',
    fontFamily: Constants.Fonts.primaryBoldFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
    color: Constants.Colors.darkText,
    alignSelf: 'center',
  },
});
