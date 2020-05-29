import {Text, View} from 'react-native';
import * as React from 'react';

export default function StorageDetailScreen({route, navigate}) {
  const {storageId} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Storage detail screen</Text>
      <Text>{storageId}</Text>
    </View>
  );
}
