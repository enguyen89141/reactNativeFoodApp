import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  'Business Search': SearchScreen,
  Results: ResultsShowScreen
}, {
  initialRouteName: 'Business Search',
  defaultNaviationOptions: {
    title: 'Search'
  }
});


export default createAppContainer(navigator);
