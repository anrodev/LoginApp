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
import TermsModal from '../../components/TermsModal';
import { useFormContext } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { useLoader } from '../../context/LoaderContext';
import Toast from 'react-native-toast-message';
import { RegisterFormType } from '../../context/RegisterFormContext';

type Props = NativeStackScreenProps<RegisterStackParamList, 'RegisterStep2'>;

export default function RegisterStep2Screen({ navigation }: Props) {
  const { showLoader, hideLoader } = useLoader();

  const {
    control,
    trigger,
    reset,
    handleSubmit,
    formState: { errors },
  } = useFormContext<RegisterFormType>();

  const [showTermsModal, setShowTermsModal] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const onSubmit = async (data: RegisterFormType) => {
    const isValid = await trigger();
    if (!isValid || !accepted) return;
    showLoader();

    console.log(data);

    setTimeout(() => {
      hideLoader();
      reset();

      Toast.show({
        type: 'success',
        text1: 'Login exitoso 🎉',
        text2: 'Bienvenido de nuevo',
      });
    }, 3000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScreenContainer>
        {/* Upper tabs */}
        <View style={styles.tabsRow}>
          <TouchableOpacity style={styles.tabInactive}>
            <Text style={styles.tabInactiveText}>Datos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabActiveText}>Contraseña</Text>
          </TouchableOpacity>
        </View>

        {/* Message */}
        <Text style={styles.infoText}>
          Su contraseña debe tener un mínimo de 8 caracteres
        </Text>

        {/* Inputs */}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Contraseña"
              style={styles.input}
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        {errors.password && (
          <Text style={styles.errorText}>
            {String(errors.password?.message)}
          </Text>
        )}

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Repetir contraseña"
              style={styles.input}
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        {errors.confirmPassword && (
          <Text style={styles.errorText}>
            {String(errors.confirmPassword?.message)}
          </Text>
        )}

        {/* Checkbox */}
        <View style={styles.checkboxRow}>
          <Icon
            name={accepted ? 'checkbox-outline' : 'square-outline'}
            size={24}
            color="#333"
            onPress={() => setAccepted(!accepted)}
          />
          <Text style={styles.checkboxText}>
            Acepto los{' '}
            <Text
              style={styles.linkText}
              onPress={() => setShowTermsModal(true)}
            >
              Términos y condiciones
            </Text>{' '}
            y la Política de Privacidad
          </Text>
        </View>

        {/* Save button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.saveText}>GUARDAR</Text>
        </TouchableOpacity>
      </ScreenContainer>
      <TermsModal
        visible={showTermsModal}
        onClose={() => setShowTermsModal(false)}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
  infoText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  saveButton: {
    backgroundColor: '#BEBEBE',
    paddingVertical: 15,
    borderRadius: 10,
  },
  saveText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
  },

  linkText: {
    color: '#758640',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: '#dd4343ff',
  },
});
