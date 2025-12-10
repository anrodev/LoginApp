import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import ScreenContainer from '../components/ScreenContainer';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScreenContainer>
        {/* LOGO */}

        <Logo />

        {/* Title */}
        <Text style={styles.title}>Iniciemos</Text>
        <Text style={styles.subtitle}>Inicia sesión o crea una cuenta.</Text>

        {/* login form */}

        <LoginForm navigation={navigation}/>

        {/* Forgot password */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Olvidé contraseña</Text>
        </TouchableOpacity>

        {/* Register button */}
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
