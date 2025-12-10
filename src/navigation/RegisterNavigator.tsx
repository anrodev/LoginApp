import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterStackParamList } from './registerTypes';
import RegisterOptionsScreen from '../screens/Register/RegisterOptionsScreen';
import RegisterStep1Screen from '../screens/Register/RegisterStep1Screen';
import RegisterStep2Screen from '../screens/Register/RegisterStep2Screen';

const RegisterStack = createNativeStackNavigator<RegisterStackParamList>();

export default function RegisterNavigator() {
  return (
    <RegisterStack.Navigator screenOptions={{ title: 'Registro' }}>
      <RegisterStack.Screen name="RegisterOptions" component={RegisterOptionsScreen}/>
      <RegisterStack.Screen name="RegisterStep1" component={RegisterStep1Screen}/>
      <RegisterStack.Screen name="RegisterStep2" component={RegisterStep2Screen}/>
    </RegisterStack.Navigator>
  );
}