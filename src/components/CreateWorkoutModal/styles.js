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
    width: Constants.Layout.window.width*0.9,
    height: '100%',
  },
  titleMyWorkouts: {
    width:'90%',
    textAlign:'center',
   textAlignVertical:'center',
    marginVertical: 10,
    fontFamily: Constants.Fonts.primaryFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
    color: Constants.Colors.primaryText,
  },
  createCicleButtonContainer:{
    marginVertical: 10,
    height:'8%',
    width:"60%",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:Constants.Layout.window.height*0.2,
    backgroundColor:Constants.Colors.agreeColor,
    elevation:2,
  },
  createCicleButtonText:{
    width:'90%',
    textAlign:'center',
    textAlignVertical:'center',
    fontFamily: Constants.Fonts.primaryBoldFontFamily,
    fontSize: Constants.Fonts.mediumFontSize,
    color: Constants.Colors.primaryText,
  }
});
