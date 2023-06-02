
import React, { useState } from "react";
import { StyleSheet, FlatList } from 'react-native';
import IItem from "../models/item.model";
import Item from "./item";
interface IShoppingListProps {
  data: IItem[]
}

const ShoppingList = (props: IShoppingListProps) => {
  const [isBought, setBought] = useState(false);
  
  return (
    <FlatList 
        style={styles.container}
        data={props.data}
        renderItem={
          (item: any) => {
            return (
              <Item data={item.item} />
            )
          }
        }
        keyExtractor={(item, index) => item.id}
      />
  );
}

export default ShoppingList

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    overflow: 'scroll',
  },
});
