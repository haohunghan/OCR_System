import {Text, View, StyleSheet} from 'react-native';
import * as React from 'react';
import {ButtonGroup, Button} from 'react-native-elements';

function getList(id) {
  const storageDatas =
    id === 1
      ? {
          name: 'Kho Hàng của Panh xinh Gái',
          description: 'Kho Hàng thứ 1',
          phoneNumber: '123566',
          address: '19 Nguyen Huu Tho',
        }
      : {
          name: 'Kho hàng của Hào Béo',
          description: 'Kho Hàng Thứ 2',
          phoneNumber: '098xxxx',
          address: '65 Nam Ky Khoi Nghia',
        };

  return storageDatas;
}

export default function StorageDetailScreen({route, navigation}) {
  const {storageId} = route.params;

  const storageData = getList(storageId);

  return (
    <View>
      <Text style={styles.contain}>{storageData.name}</Text>
      <Text style={styles.contain}>{storageData.description}</Text>
      <Text style={styles.contain}>{storageData.phoneNumber}</Text>
      <Text style={styles.contain}>{storageData.address}</Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginLeft: 16,
        }}>
        <View style={styles.import}>
          <Button
            title="View Import"
            onPress={() => {
              navigation.navigate('StorageImport', {
                storageId: storageId,
              });
            }}
          />
        </View>

        <View style={styles.export}>
          <Button
            title="View Export"
            onPress={() => {
              navigation.navigate('StorageExport', {
                storageId: storageId,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  import: {
    paddingRight: 20,
    width: 200,
    borderRadius: 25,
  },

  export: {
    paddingRight: 20,
    width: 200,
  },
  contain: {
    marginTop: 20,
    fontSize: 22,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    width: 375,
    marginLeft: 20,
  },
});
