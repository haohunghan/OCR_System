import {ListItem} from 'react-native-elements';
import {Text, View} from 'react-native';
import * as React from 'react';

const storages = [
  {
    name: 'Kho hang loi',
    id: '1',
  },
  {
    name: 'Nguyen Tri Phuong',
    id: '2',
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
