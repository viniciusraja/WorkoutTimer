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
  ViewBase,
  Alert,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Constants from 'config/constants';
import { styles } from './styles';
import Footer from 'components/Footer';
import MainRectangleButton from 'components/MainRectangleButton';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import CreateActionModal from 'components/CreateActionModal';
import {
  setShowRepeatingActionComponent,
  setStartOfActionRepetition,
  setEndOfActionRepetition,
} from 'store/myWorkouts/actions';

export default function RepeatAction() {
  const [timesOfRepetition, setTimesOfRepetition] = useState('');
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const showRepeatingActionComponent = useSelector(
    (state) => state.getWorkouts.showRepeatingActionComponent
  );
  const editingWorkoutComponet = useSelector(
    (state) => state.getWorkouts.editingWorkoutComponet
  );

  function isEndPointBigger(endPointId) {
    if (!!editingWorkoutComponet.startActionId && !!endPointId) {
      if (editingWorkoutComponet.startActionId < endPointId) {
        dispatch(setEndOfActionRepetition(endPointId));
      } else {
        Alert.alert('Selecione um fim de ciclo maior que o de ínicio!');
      }
    }
  }
  return (
    <View style={styles.container}>
      {editingWorkoutComponet.startActionId ? (
        <Text style={styles.titleMyWorkouts}>
          Selecione o fim da repetição.
        </Text>
      ) : (
        <Text style={styles.titleMyWorkouts}>
          Selecione o início da repetição.
        </Text>
      )}
      <FlatList
        style={styles.actionsList}
        contentContainerStyle={styles.contentContainerStyleList}
        data={[
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
        ]}
        renderItem={({ item, separators }) => {
          return (
            <>
              <View style={styles.actionContainer}>
                <View
                  style={[
                    styles.actionButtonContainer,
                    editingWorkoutComponet.startActionId <= item.id &&
                      editingWorkoutComponet.endActionId >= item.id && {
                        width: '70%',
                      },
                      editingWorkoutComponet.startActionId == item.id && {
                        width: '70%',
                      },
                  ]}>
                  {editingWorkoutComponet.startActionId == item.id && (
                    <Text style={styles.actionRepetitionMarkerText}>
                      Início do ciclo
                    </Text>
                  )}
                  <TouchableOpacity
                    style={[styles.actionButton]}
                    onPress={() => {
                     

                      editingWorkoutComponet.startActionId
                        ? isEndPointBigger(item.id)
                        : dispatch(setStartOfActionRepetition(item.id));
                    }}>
                    <MainRectangleButton />
                  </TouchableOpacity>
                  {editingWorkoutComponet.endActionId == item.id && (
                    <Text style={styles.actionRepetitionMarkerText}>
                      Fim do ciclo
                    </Text>
                  )}
                </View>
                {editingWorkoutComponet.startActionId == item.id && (
                  <View
                    style={{
                      width: 40,
                      height: 3,
                      backgroundColor: Constants.Colors.backgroundColorLight,
                      position: 'absolute',
                      right: 30,
                      top: 0,
                    }}
                  />
                )}
                {editingWorkoutComponet.endActionId == item.id && (
                  <View
                    style={{
                      width: 40,
                      height: 3,
                      backgroundColor: Constants.Colors.backgroundColorLight,
                      position: 'absolute',
                      right: 30,
                      bottom: 0,
                    }}
                  />
                )}

                {!!editingWorkoutComponet.startActionId &&
                  item.id >= editingWorkoutComponet.startActionId &&
                  item.id <= editingWorkoutComponet.endActionId && (
                    <View style={[styles.intervalMarker]} />
                  )}
                {!!editingWorkoutComponet.startActionId &&
                  item.id == editingWorkoutComponet.startActionId && (
                    <View style={[styles.intervalMarker]} />
                  )}
                {editingWorkoutComponet.startActionId == item.id && (
                  <View style={styles.actionRepetitionMarkerContainer}>
                    <TouchableOpacity
                      style={[
                        styles.actionRepetitionMarkerButton,
                        { alignSelf: 'flex-start' },
                      ]}
                      onPress={() => dispatch(setStartOfActionRepetition(''))}>
                      <Text style={[styles.actionRepetitionMarkerButtonText]}>
                        Desfazer
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                {editingWorkoutComponet.endActionId == item.id && (
                  <View style={styles.actionRepetitionMarkerContainer}>
                  <View >
                   <Text style={styles.actionRepetitionMarkerContainerTitle}>Repetir</Text>
                    <View style={{flexDirection:'row'}}>
                   <Text style={[styles.actionRepetitionMarkerContainerTitle,{alignSelf:'flex-end',marginRight:5}]}>X</Text>
                    <TextInput
                    style={styles.inputActionRepetition}
                    placeholder="0"
                    placeholderTextColor={Constants.Colors.darkText}
                    onChangeText={(text) => setTimesOfRepetition(text)}
                    defaultValue={timesOfRepetition}
                    />
                    </View>
                    </View>
                    <TouchableOpacity
                      style={[styles.actionRepetitionMarkerButton]}
                      onPress={() => {
                        dispatch(setEndOfActionRepetition(''))
                        setTimesOfRepetition('')
                        }}>
                      <Text style={[styles.actionRepetitionMarkerButtonText]}>
                        Desfazer
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View
                style={{ width: Constants.Layout.window.width, height: 10 }}>
                {!!editingWorkoutComponet.startActionId &&
                  item.id >= editingWorkoutComponet.startActionId &&
                  item.id <= editingWorkoutComponet.endActionId - 1 && (
                    <View style={[styles.intervalMarker]} />
                  )}
              </View>
            </>
          );
        }}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={(item) => <></>}
        ListHeaderComponent={() => (
          <View style={{ width: '100%', height: 10 }} />
        )}
        ListFooterComponent={() => (
          <>
            <View style={{ width: '100%', height: 10 }} />
          </>
        )}
      />
      <View style={styles.footerButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.createCicleButtonContainer,
            { backgroundColor: Constants.Colors.cancelColor },
          ]}
          onPress={() => {
            dispatch(setShowRepeatingActionComponent());
            dispatch(setEndOfActionRepetition(''));
            dispatch(setStartOfActionRepetition(''));
          }}>
          <Text style={styles.createCicleButtonText}>CANCELAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createCicleButtonContainer}
          onPress={() => setRepeatActionsIsOn(!repeatActionsIsOn)}>
          <Text style={styles.createCicleButtonText}>SALVAR CICLO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
