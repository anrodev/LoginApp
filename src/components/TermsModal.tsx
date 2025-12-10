import React from 'react';
import { Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScreenContainer from './ScreenContainer';

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function TermsModal({ visible, onClose }: Props) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <ScreenContainer>
        <Text style={styles.modalTitle}>Términos y condiciones</Text>
        <Text style={styles.modalText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nulla
          suscipit animi odio doloribus exercitationem ipsam vel impedit
          eligendi autem earum modi, maxime incidunt, in ratione hic, ea cumque
          ducimus.
        </Text>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>Cerrar</Text>
        </TouchableOpacity>
      </ScreenContainer>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 30,
  },
  closeButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 8,
  },
  closeText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
