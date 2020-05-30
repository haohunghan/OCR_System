import * as React from 'react';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

import StorageDetailScreen from '../screen/storage/StorageDetailScreen';
import StorageScreen from '../screen/storage/StorageScreen';
import StorageImport from '../screen/storage/StorageImport';
import StorageExport from '../screen/storage/StorageExport';

const StorageStack = createStackNavigator();

function orders() {
  return (
    <StorageStack.Navigator>
      <StorageStack.Screen name="Storage" component={StorageScreen} />
      <StorageStack.Screen
        name="StorageDetail"
        component={StorageDetailScreen}
      />
      <StorageStack.Screen name="StorageImport" component={StorageImport} />
      <StorageStack.Screen name="StorageExport" component={StorageExport} />
    </StorageStack.Navigator>
  );
}

export default orders;
