import {Button, Text, View} from 'react-native';
import * as React from 'react';

export default function StorageScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Products screen</Text>
      <Button
        title="Go to storage detail"
        onPress={() => navigation.navigate('StorageDetail')}
      />
    </View>
  );
}
