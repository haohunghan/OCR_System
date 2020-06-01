import React, {Component} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button} from 'react-native-elements';

function getCategories() {
  const categories = [
    {
      name: 'T-shirt',
      id: '1',
    },
    {
      name: 'Shoe',
      id: '2',
    },
    {
      name: 'Package',
      id: '3',
    },
  ];

  const responseCategories = [];

  categories.forEach(function (category, index) {
    responseCategories.push({label: category.name, value: category.id});
  });

  return responseCategories;
}

function getBrands() {
  const brands = [
    {
      name: 'Adidas',
      id: '11',
    },
    {
      name: 'Nike',
      id: '12',
    },
    {
      name: 'Apple',
      id: '13',
    },
  ];

  const responseBrands = [];

  brands.forEach(function (category, index) {
    responseBrands.push({label: category.name, value: category.id});
  });

  return responseBrands;
}

function getTags() {
  const tags = [
    {
      name: 'tag1',
      id: '21',
    },
    {
      name: 'tag2',
      id: '22',
    },
    {
      name: 'something',
      id: '23',
    },
  ];

  const responseTags = [];

  tags.forEach(function (category, index) {
    responseTags.push({label: category.name, value: category.id});
  });

  return responseTags;
}

function initFilterItem() {
  const categories = getCategories();
  const brands = getBrands();
  const tags = getTags();
  const filteredItem = {};

  filteredItem.categories = categories;
  filteredItem.brands = brands;
  filteredItem.tags = tags;

  return filteredItem;
}

function initSelectedFilterItem(filteredItem) {
  let selectedFilterItem = {};

  selectedFilterItem.category = filteredItem.categories[0]
    ? filteredItem.categories[0]
    : '';

  selectedFilterItem.brand = filteredItem.brands[0]
    ? filteredItem.brands[0]
    : '';

  selectedFilterItem.tag = filteredItem.tags[0] ? filteredItem.tags[0] : '';

  return selectedFilterItem;
}

export default function ProductScreen({navigation}) {
  const filteredItem = initFilterItem();
  var selectedFilterItem = initSelectedFilterItem(filteredItem);

  return (
    <View>
      <DropDownPicker
        items={filteredItem.categories}
        defaultIndex={0}
        containerStyle={{height: 40}}
        onChangeItem={(item) => (selectedFilterItem.category = item.label)}
      />
      <DropDownPicker
        items={filteredItem.brands}
        defaultIndex={0}
        containerStyle={{height: 40}}
        onChangeItem={(item) => (selectedFilterItem.brand = item.label)}
      />
      <DropDownPicker
        items={filteredItem.tags}
        defaultIndex={0}
        containerStyle={{height: 40}}
        onChangeItem={(item) => (selectedFilterItem.tag = item.label)}
      />

      <Button
        title="View import"
        onPress={() => {
          navigation.navigate('ProductDetail', {
            selectedFilterItem: selectedFilterItem,
          });
        }}
      />
    </View>
  );
}
