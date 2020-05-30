import {Text, View} from 'react-native';
import * as React from 'react';
import {ButtonGroup, Button} from 'react-native-elements';

function getList(id) {
  const storageDatas =
    id === 1
      ? {
          name: 'Kho hang abc Panh',
          description: 'kho hang dau tien',
          phoneNumber: '123566',
          address: '19 Nguyen Huu Tho',
        }
      : {
          name: 'Kho hang abc Hao',
          description: 'kho hang thu hai',
          phoneNumber: '000000',
          address: '65 Nam Ky Khoi Nghia',
        };

  return storageDatas;
}

export default function StorageDetailScreen({route, navigation}) {
  const {storageId} = route.params;

  const storageData = getList(storageId);

  return (
    <View>
      <Text>{storageData.name}</Text>
      <Text>{storageData.description}</Text>
      <Text>{storageData.phoneNumber}</Text>
      <Text>{storageData.address}</Text>

      <View style={{flexDirection: 'row'}}>
        <Button
          title="View import"
          onPress={() => {
            navigation.navigate('StorageImport', {
              storageId: storageId,
            });
          }}
        />
        <Button
          title="View export"
          onPress={() => {
            navigation.navigate('StorageExport', {
              storageId: storageId,
            });
          }}
        />
      </View>
    </View>
  );
}
