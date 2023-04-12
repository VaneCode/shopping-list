import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import IItem from "../models/item.model";

interface IItemProps {
    data: IItem
}

const Item = (props: IItemProps) => {
    const [bought, setBought] = useState(false);

    return (
        <View>
            <BouncyCheckbox isChecked={bought} onPress={setBought}/>
            <Text></Text>
        </View>
    )
}

export default Item;