import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export default function CustomTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const iconName =
          route.name === 'Home'
            ? 'home-outline'
            : route.name === 'RequestsList'
            ? 'document-text-outline'
            : 'cash-outline';

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            onPress={() => navigation.navigate(route.name)}
            style={[styles.circleButton, isFocused && styles.activeButton]}
          >
            <Icon name={iconName} size={isFocused?40:35} color="black" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  circleButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    borderRadius: 30,
    backgroundColor: '#C5CCAB',
    borderWidth: 4,
    borderColor: '#fff',
    elevation: 6,
    marginBottom: 60,
  },
});
