import {ListItem} from 'react-native-elements';
import {Text, View} from 'react-native';
import * as React from 'react';

const storages = [
  {
    name: 'Kho hang loi',
    id: 'loi',
  },
  {
    name: 'Nguyen Tri Phuong',
    id: 'ntp',
  },
];

export default function StorageScreen({navigation}) {
  return (
    <View>
      {storages.map((storage, index) => (
        <ListItem
          key={index}
          title={storage.name}
          bottomDivider
          onPress={() => {
            navigation.navigate('StorageDetail', {
              storageId: storage.id,
            });
          }}
        />
      ))}
    </View>
  );
}
