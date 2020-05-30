import * as React from 'react';
import {ListItem} from 'react-native-elements';
import {View} from 'react-native';

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
    <View>
      {exportData.map((data, index) => (
        <ListItem
          key={index}
          title={'Status: ' + statusChanging(data.status)}
          subtitle={'Note: ' + data.note}
          bottomDivider
        />
      ))}
    </View>
  );
}
