import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

interface CoffeeShopItem {
  name: string;
  // ... other properties
}

// Function to return array of sorted categories received from the data
const getCategoriesFromData = (data: CoffeeShopItem[]): string[] => {
  const temp: {[category: string]: number} = {};

  for (const item of data) {
    const categoryName: string = item.name;
    temp[categoryName] = (temp[categoryName] || 0) + 1;
  }

  const categories: string[] = ['All', ...Object.keys(temp)];
  return categories;
};

// Function to return coffee data based on category
const getCoffee = (category: string, data: any) => {
  if (category === 'All') {
    return data;
  } else {
    let coffeeList = data.filter((item: any) => item.name == category);
    return coffeeList;
  }
};

// Bootom Tabbar Height
const tabbarHeight = useBottomTabBarHeight();

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState(undefined);
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffee(categoryIndex.category, CoffeeList),
  );

  // Home-Page JSX starts here
  return <ScrollView></ScrollView>;
};

const styles = StyleSheet.create({});

export default HomeScreen;
