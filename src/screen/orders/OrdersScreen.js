import {Button, Text, View} from 'react-native';
import * as React from 'react';

export default function OrdersScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Orders screen</Text>
      <Button
        title="Go to order detail"
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
}
