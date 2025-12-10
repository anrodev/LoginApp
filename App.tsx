import AppNavigator from './src/navigation/AppNavigator';
import { LoaderProvider } from './src/context/LoaderContext';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <LoaderProvider>
      <AppNavigator />
      <Toast />
    </LoaderProvider>
  );
}
