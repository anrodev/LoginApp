import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export default function ScreenContainer({ children }: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});