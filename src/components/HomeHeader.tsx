import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const Avatar = 'https://randomuser.me/api/portraits/men/75.jpg';

// ---------- HEADER TITLE ----------
export function HomeHeaderTitle() {
  return (
    <View style={styles.titleWrapper}>
      {/* Avatar */}
      <Image source={{ uri: Avatar }} style={styles.avatar} />

      {/* Bubble with name */}
      <View style={styles.nameBubble}>
        <Text style={styles.nameText}>Gabriel</Text>
      </View>
    </View>
  );
}

// ---------- HEADER RIGHT ----------
export function HomeHeaderRight() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.shareBubble}
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      }
    >
      <Icon name="log-out-outline" size={30} color="black" />
    </TouchableOpacity>
  );
}

// ---------- STYLES ----------
const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 32,
    marginRight: 8,
  },

  nameBubble: {
    backgroundColor: '#8BAA55',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  nameText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },

  shareBubble: {
    backgroundColor: '#F4EED4',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
  },
});
