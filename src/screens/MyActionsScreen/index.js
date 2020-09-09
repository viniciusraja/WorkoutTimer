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

export default function MyActionsScreen() {
  const [userCelNumeber, setUserCelNumeber] = useState('');
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const actionsList = useSelector(
    (state) => state.getActions.actionsList
  );
 
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.actionsList}
        contentContainerStyle={{
          justifyContent: 'center', 
          alignItems: 'center',
        }}
        data={actionsList}
        renderItem={({ item }) => <MainRectangleButton {...item} />}
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
     
        <CreateActionModal />
    </View>
  );
}
