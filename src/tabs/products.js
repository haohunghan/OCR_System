import * as React from 'react';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

import ProductDetailScreen from '../screen/products/ProductDetailScreen';
import ProductsScreen from '../screen/products/ProductsScreen';

const ProductsStack = createStackNavigator();

function products() {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen name="Products" component={ProductsScreen} />
      <ProductsStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
    </ProductsStack.Navigator>
  );
}

export default products;
