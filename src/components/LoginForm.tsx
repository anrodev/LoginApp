import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Icon from 'react-native-vector-icons/Ionicons';
import { useLoader } from '../context/LoaderContext';
import Toast from 'react-native-toast-message';

const LoginFormSchema = z.object({
  email: z.string().min(1, 'El correo es requerido').email('Correo inválido'),
  password: z
    .string()
    .min(1, 'La contraseña es requerida')
    .min(6, 'Mínimo 6 caracteres'),
});

type LoginFormType = z.infer<typeof LoginFormSchema>;

type LoginFormProps = {
  navigation: any;
};

export default function LoginForm({ navigation }: LoginFormProps) {
  const { showLoader, hideLoader } = useLoader();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data: LoginFormType) => {
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

      navigation.navigate('Panel');

    }, 3000);
  };

  return (
    <>
      <Text style={styles.label}>CORREO</Text>

      {/* Mail input */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Escribe tu correo"
            keyboardType="email-address"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}

      {/* Enter password */}
      <Text style={styles.label}>CONTRASEÑA</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Escribe tu contraseña"
              secureTextEntry={!passwordVisible}
              value={value}
              onChangeText={onChange}
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
        )}
      />

      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      {/* Start button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.loginButtonText}>INICIAR SESIÓN</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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
  errorText: {
    color: '#dd4343ff',
  },
});
