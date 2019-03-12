import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Tabs from './Tabs';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Tabs: { screen: Tabs },
});

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer;
