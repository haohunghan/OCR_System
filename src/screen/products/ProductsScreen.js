import React, {Component} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

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

function filterItems() {
  return;
}

export default function ProductScreen() {
  const categories = getCategories();
  const brands = getBrands();
  const tags = getTags();

  return (
    <View>
      <DropDownPicker
        items={categories}
        defaultIndex={0}
        containerStyle={{height: 40}}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />
      <DropDownPicker
        items={brands}
        defaultIndex={0}
        containerStyle={{height: 40}}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />
      <DropDownPicker
        items={tags}
        defaultIndex={0}
        containerStyle={{height: 40}}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />
    </View>
  );
}
