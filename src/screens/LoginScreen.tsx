import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import ScreenContainer from '../components/ScreenContainer';
import Logo from '../components/Logo';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScreenContainer>
        {/* LOGO */}

        <Logo/>

        {/* Título */}
        <Text style={styles.title}>Iniciemos</Text>
        <Text style={styles.subtitle}>Inicia sesión o crea una cuenta.</Text>

        {/* Input correo */}
        <Text style={styles.label}>CORREO</Text>
        <TextInput
          placeholder="Escribe tu correo"
          style={styles.input}
          keyboardType="email-address"
        />

        {/* Input contraseña */}
        <Text style={styles.label}>CONTRASEÑA</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Escribe tu contraseña"
            secureTextEntry={!passwordVisible}
            style={styles.passwordInput}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.iconButton}
          >
            <Icon
              name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#777"
            />
          </TouchableOpacity>
        </View>

        {/* Botón iniciar */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Panel')}
        >
          <Text style={styles.loginButtonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>

        {/* Olvidé contraseña */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Olvidé contraseña</Text>
        </TouchableOpacity>

        {/* Botón registrarme */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>Registrarme</Text>
        </TouchableOpacity>
      </ScreenContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 25,
  },
  label: {
    marginTop: 15,
    fontSize: 12,
    color: '#777',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    marginTop: 5,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
  },
  iconButton: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#758640',
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  forgotText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#777',
  },
  registerButton: {
    backgroundColor: '#FDDDAA',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
  },
  registerText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#333',
  },
});
