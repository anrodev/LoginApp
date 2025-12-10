import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeTabParamList } from '../../navigation/HomeTypes';

type Props = NativeStackScreenProps<HomeTabParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const code = 'OFG9988775';

  const handleShare = async () => {
    try {
      await Share.share({
        message: `codigo: ${code}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CÓDIGO</Text>
      <Text style={styles.code}>{code}</Text>

      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Icon
          name="share-social-outline"
          size={25}
          color="#75853B"
          style={styles.icon}
        />
        <Text style={styles.shareText}>COMPARTIR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
  },

  headerTitle: { fontSize: 18, fontWeight: '600' },
  title: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontWeight: '500',
  },
  code: {
    fontSize: 40,
    fontWeight: '900',
    color: '#000',
    marginBottom: 25,
    letterSpacing: 2,
  },

  shareButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#75853B',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 25,
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  shareText: {
    color: '#75853B',
    fontSize: 20,
    fontWeight: '600',
  },
});
