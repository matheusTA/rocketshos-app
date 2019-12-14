import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(createBottomTabNavigator({
  Home,
  Cart,
}));

export default Routes;
