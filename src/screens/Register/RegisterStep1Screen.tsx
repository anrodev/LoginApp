import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterStackParamList } from '../../navigation/registerTypes';
import ScreenContainer from '../../components/ScreenContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

type Props = NativeStackScreenProps<RegisterStackParamList, 'RegisterStep1'>;

export default function RegisterStep1Screen({ navigation }: Props) {
  const [docType, setDocType] = useState('V');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScreenContainer>
        {/* Tabs superiores */}
        <View style={styles.tabsRow}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabActiveText}>Datos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabInactive}>
            <Text style={styles.tabInactiveText}>Contraseña</Text>
          </TouchableOpacity>
        </View>

        {/* Foto perfil */}
        <View style={styles.profileWrapper}>
          <View style={styles.profileCircle}>
            <Icon name="person-circle-outline" size={100} color="#bbb" />
          </View>
        </View>

        {/* Inputs */}
        <TextInput placeholder="Nombres" style={styles.input} />

        <TextInput placeholder="Apellidos" style={styles.input} />

        {/* Selector + input */}
        <View style={styles.row}>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={docType}
              dropdownIconColor="#777"
              style={styles.picker}
              onValueChange={v => setDocType(v)}
            >
              <Picker.Item label="V" value="V" />
              <Picker.Item label="E" value="E" />
              <Picker.Item label="J" value="J" />
              <Picker.Item label="P" value="P" />
              <Picker.Item label="G" value="G" />
            </Picker>
          </View>
          <TextInput
            placeholder="Escribir"
            style={[styles.input, { flex: 1, marginLeft: 10 }]}
          />
        </View>

        {/* Upload document */}
        <TouchableOpacity style={styles.uploadButton}>
          <Icon name="cloud-upload-outline" size={20} color="#555" />
          <Text style={styles.uploadText}>Subir documento</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Teléfono"
          style={styles.input}
          keyboardType="phone-pad"
        />

        <TextInput
          placeholder="Correo"
          style={styles.input}
          keyboardType="email-address"
        />

        {/* Next button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('RegisterStep2')}
        >
          <Text style={styles.nextText}>SIGUIENTE</Text>
        </TouchableOpacity>
      </ScreenContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  /** Tabs */
  tabsRow: {
    flexDirection: 'row',
    marginBottom: 25,
    marginTop: 10,
  },
  tabActive: {
    flex: 1,
    paddingVertical: 6,
    backgroundColor: '#FAD96D',
    borderRadius: 20,
    alignItems: 'center',
  },
  tabInactive: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'center',
  },
  tabActiveText: {
    fontWeight: '600',
    color: '#333',
  },
  tabInactiveText: {
    fontWeight: '600',
    color: '#999',
  },

  /** Perfil */
  profileWrapper: {
    alignItems: 'center',
    marginBottom: 25,
  },
  profileCircle: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /** Inputs */
  input: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  /** PICKER */
   pickerWrapper: {
    width: 95,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },

  picker: {
    height: 50,
    marginTop: Platform.OS === 'android' ? -4 : 0, 
    paddingTop: Platform.OS === 'android' ? 6 : 2,
    paddingLeft: 10,
  },

  uploadButton: {
    backgroundColor: '#FDDDAA',
    borderRadius: 10,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  uploadText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#444',
  },

  /** Next button */
  nextButton: {
    backgroundColor: '#BEBEBE',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  nextText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
  },
});
