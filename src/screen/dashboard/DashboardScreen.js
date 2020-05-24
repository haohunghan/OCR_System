import {Text, View, Button} from 'react-native';
import * as React from 'react';

export default function DashboardScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Dashboard</Text>
      <Button title="Go to Test" onPress={() => navigation.navigate('Test')} />
    </View>
  );
}
