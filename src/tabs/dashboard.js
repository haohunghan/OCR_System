import * as React from 'react';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

import DashboardScreen from '../screen/dashboard/DashboardScreen';
import Test from '../screen/dashboard/Test';

const DashboardStack = createStackNavigator();

function dashboard() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={DashboardScreen} />
      <DashboardStack.Screen name="Test" component={Test} />
    </DashboardStack.Navigator>
  );
}

export default dashboard;
