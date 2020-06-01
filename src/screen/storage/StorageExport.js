import * as React from 'react';
import {ListItem} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

function getList() {
  const exportData = [
    {status: 1, note: 'hang nhap'},
    {status: 2, note: 'nhap cuoi tuan'},
  ];

  return exportData;
}

function statusChanging(status) {
  switch (status) {
    case 1:
      return 'On Progress';
    case 2:
      return 'Applying';
    default:
      return 'None';
  }
}

export default function StorageExport({route}) {
  const {storageId} = route.params;

  const exportData = getList();

  return (
    <View style={styles.ContainerExport}>
      {exportData.map((data, index) => (
        <ListItem
          style={styles.Export}
          key={index}
          title={'Status: ' + statusChanging(data.status)}
          subtitle={'Note: ' + data.note}
          bottomDivider
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerExport: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  Export: {
    marginTop: 30,
    backgroundColor: '#282828',
  },
});
