import * as React from 'react';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

import OrderDetailScreen from '../screen/orders/OrderDetailScreen';
import OrdersScreen from '../screen/orders/OrdersScreen';

const OrdersStack = createStackNavigator();

function orders() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="OrderDetail" component={OrderDetailScreen} />
    </OrdersStack.Navigator>
  );
}

export default orders;
