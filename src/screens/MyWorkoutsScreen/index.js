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
import CreateWorkoutsScreen from 'components/CreateWorkoutModal';

export default function MyWorkoutsScreen() {
  const [repeatActionsIsOn, setRepeatActionsIsOn] = useState(false);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const showCreateWorkoutComponent = useSelector(
    (state) => state.getWorkouts.showCreateWorkoutComponent
  );
 
  return (
    showCreateWorkoutComponent?
    <CreateWorkoutsScreen/>:
    <View style={styles.container}>
      <Text style={styles.titleMyWorkouts}>Selecione um treino para iniciar.</Text>
      <FlatList
        style={styles.actionsList}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={[
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
        ]}
        renderItem={({ item }) => <MainRectangleButton {...item}/>}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => ( 
          <View style={{ width: '100%', height: 10 }} />
        )}
        ListHeaderComponent={() => (
          <View style={{ width: '100%', height: 10 }} />
        )}
        ListFooterComponent={() => (
          <View style={{ width: '100%', height: Constants.Layout.footerHeight+10 }} />
        )}
      />
     
    </View>    
  );
}
