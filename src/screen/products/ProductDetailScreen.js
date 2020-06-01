import {Text, View} from 'react-native';
import * as React from 'react';

export default function ProductDetailScreen({route}) {
  const {selectedFilterItem} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{selectedFilterItem.category}</Text>
      <Text>{selectedFilterItem.brand}</Text>
      <Text>{selectedFilterItem.tag}</Text>
    </View>
  );
}
