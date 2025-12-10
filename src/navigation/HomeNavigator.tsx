import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import RecordsScreen from '../screens/Home/RecordsScreen';
import RequestsListScreen from '../screens/Home/RequestsListScreen';
import { HomeTabParamList } from './HomeTypes';
import CustomTabBar from '../components/CustomTabBar';
import { HomeHeaderTitle, HomeHeaderRight } from '../components/HomeHeader';

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function HomeNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerTitle: () => <HomeHeaderTitle />,
        headerRight: () => <HomeHeaderRight />,
      }}
    >
      <Tab.Screen name="RequestsList" component={RequestsListScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Records" component={RecordsScreen} />
    </Tab.Navigator>
  );
}
