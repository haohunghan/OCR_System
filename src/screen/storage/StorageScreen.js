import {ListItem} from 'react-native-elements';
import {Text, View, StyleSheet,} from 'react-native';
import * as React from 'react';

const storages = [
  {
    name: 'Kho hàng lỗi',
    id: '1',
  },
  {
    name: 'Nguyễn Tri Phương',
    id: '2',
  },
];

export default function StorageScreen({navigation}) {
  return (
    <View style={styles.ContainerBtn}>
      {storages.map((storage, index) => (
        <ListItem
          style={styles.Btn}
          key={index}
          title={storage.name}
          onPress={() => {
            navigation.navigate('StorageDetail', {storageId: storage.id});
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerBtn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  Btn: {
    marginTop: 30,
    marginLeft: 20,
    width: 370,
    borderRadius: 25,
  },
});
