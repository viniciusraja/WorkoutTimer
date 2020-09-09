import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Constants from 'config/constants';
import { styles } from './styles';
import Footer from 'components/Footer';
import MainRectangleButton from 'components/MainRectangleButton';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import CreateActionModal from 'components/CreateActionModal';
import { setShowCreateActionComponent } from 'store/myActions/actions';
import RepeatAction from 'components/CreateWorkoutModal/RepeatAction'
import { setShowRepeatingActionComponent } from 'store/myWorkouts/actions';
export default function CreateWorkoutModal() {
  const [repeatActionsIsOn, setRepeatActionsIsOn] = useState(false);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const showRepeatingActionComponent = useSelector(
    (state) => state.getWorkouts.showRepeatingActionComponent
  );
  
  return (
    showRepeatingActionComponent?
    <RepeatAction/>:
    <View style={styles.container}>
      <Text style={styles.titleMyWorkouts}>Crie seu treino adicionando as ações em ordem.</Text>
      <TouchableOpacity style={styles.createCicleButtonContainer}
      onPress={()=>dispatch(setShowRepeatingActionComponent())}
      >
        <Text style={styles.createCicleButtonText}>
          REPETIR   AÇÕES
        </Text>
      </TouchableOpacity >
      <FlatList
        style={[styles.actionsList]}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems:'center',
        }}
        data={[
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
        ]}
        renderItem={({ item }) => <MainRectangleButton />}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ width: '100%', height: 10 }} />
        )}
        ListHeaderComponent={() => (
          <View style={{ width: '100%', height: 10 }} />
        )}
        ListFooterComponent={() => (
        <>
        <TouchableOpacity
        >
          <Ionicons style={{marginTop:Constants.Layout.window.height*0.02}} name="md-add-circle" size={Constants.Fonts.xLargeFontSize} color={Constants.Colors.primaryText} />
        </TouchableOpacity>
          <View style={{ width: '100%', height: Constants.Layout.footerHeight+10 }} />
        </>
        )}
      />
     
    </View>
  );
}
