import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeTabParamList } from '../../navigation/HomeTypes';

type Props = NativeStackScreenProps<HomeTabParamList, 'RequestsList'>;
export default function RequestsListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No hay registros</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 10 }
});
