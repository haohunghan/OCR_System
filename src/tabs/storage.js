import * as React from 'react';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

import StorageDetailScreen from '../screen/storage/StorageDetailScreen';
import StorageScreen from '../screen/storage/StorageScreen';

const StorageStack = createStackNavigator();

function orders() {
  return (
    <StorageStack.Navigator>
      <StorageStack.Screen name="Storage" component={StorageScreen} />
      <StorageStack.Screen
        name="StorageDetail"
        component={StorageDetailScreen}
      />
    </StorageStack.Navigator>
  );
}

export default orders;
