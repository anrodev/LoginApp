import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterStackParamList } from '../../navigation/registerTypes';
import ScreenContainer from '../../components/ScreenContainer';
import { useFormContext } from "react-hook-form";
import Logo from '../../components/Logo';

type Props = NativeStackScreenProps<RegisterStackParamList, 'RegisterOptions'>;

export default function RegisterOptionsScreen({ navigation }: Props) {
  const { setValue } = useFormContext();

  const handleSelect = (type: 'user' | 'affiliate' | 'seller') => {
    setValue('registerType', type);
    navigation.navigate('RegisterStep1');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScreenContainer>
        {/* LOGO */}
        <Logo />
        {/* Títle */}
        <Text style={styles.title}>Iniciemos</Text>
        <Text style={styles.subtitle}>Inicia sesión o crea una cuenta.</Text>

        {/* Subtitle */}
        <Text style={styles.optionTitle}>Elije como deseas registrarte</Text>

        {/* User Button */}
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleSelect('user')}
        >
          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Icon name="person-outline" size={28} color="white" />
            </View>
            <Text style={styles.optionText}>Usuario</Text>
            <Icon name="chevron-forward-outline" size={20} color="#777" />
          </View>
        </TouchableOpacity>

        {/* Affiliate Button */}
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleSelect('affiliate')}
        >
          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Icon name="people-outline" size={28} color="white" />
            </View>
            <Text style={styles.optionText}>Afiliado</Text>
            <Icon name="chevron-forward-outline" size={20} color="#777" />
          </View>
        </TouchableOpacity>

        {/* Seller/Agent Button */}
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleSelect('seller')}
        >
          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Icon name="briefcase-outline" size={28} color="white" />
            </View>
            <Text style={styles.optionText}>Vendedor/Agente de Afiliación</Text>
            <Icon name="chevron-forward-outline" size={20} color="#777" />
          </View>
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
  optionTitle: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 25,
    color: '#333',
  },
  optionButton: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingVertical: 35,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    padding: 10,
    backgroundColor: '#758640',
    borderRadius: 5,
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
  },
});
