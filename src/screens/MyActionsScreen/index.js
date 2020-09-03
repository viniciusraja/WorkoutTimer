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
import Footer from 'components/Footer/HomeScreen';
import MainRectangleButton from 'components/MainRectangleButton';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import CreateActionModal from 'components/CreateActionModal';
import {setShowCreateActionComponent} from 'store/myActions/actions'

export default function MyActionsScreen() {
  const [userCelNumeber, setUserCelNumeber] = useState('');
  const { navigate } = useNavigation();
  const dispatch=useDispatch()

  const showCreateActionComponent = useSelector((state) => state.getActions.showCreateActionComponent);
  return (
    <View style={styles.container}> 
      <FlatList
        // especificar tamanho do componente e criar uma condicional se tiver selecionando para reduzir o width
        // style={{width:Constants.Layout.window.width}}
        style={styles.actionsList}
        contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
        data={[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]}
        renderItem={({ item }) => <MainRectangleButton/>}
        keyExtractor={(item) => `${item.id}`}
        // horizontal={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ width: "100%", height: 10 }} />
        )}    
        ListHeaderComponent={()=><View style={{ width: "100%", height: 10 }} />}
        ListFooterComponent={()=><View style={{ width: "100%", height: 10 }} />}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCreateActionComponent}
        onRequestClose={() => {
          dispatch(setShowCreateActionComponent())
        }}
      >
       <CreateActionModal/>
      </Modal>
    </View>
  );
}
