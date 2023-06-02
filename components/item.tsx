import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import IItem from "../models/item.model";

interface IItemProps {
  data: IItem;
}

const Item = (props: IItemProps) => {
  const [isBought, setBought] = useState(false);

  return (
    <View style={[styles.container]}>
      <BouncyCheckbox
        fillColor="black"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "black" }}
        isChecked={isBought}
        onPress={setBought}
        style={styles.checkbox}
      />

      <Text style={styles.text}>{props.data.text}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "3rem",
    height: "auto",
    color: "white",
    backgroundColor: "#ff6666",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "row",
    //marginBottom: 5,
    //padding: 10,
    gap: 5,
    borderRadius: 5,
  },
  checkbox: {
    width: 40,
    minWidth: 40,
    height: 40,
  },
  text: {
    color: "black",
    width: "100%",
  },
});
