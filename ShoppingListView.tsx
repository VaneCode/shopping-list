import React, { useState } from "react"
import { Modal, StyleSheet, TextInput, View, Text, TouchableOpacity, 
    KeyboardAvoidingView } from 'react-native';
import IItem from "../models/item.model";

interface IShoppingListProps {
  isVisible: boolean
  onClose: () => void
  onSave: (data: any) => void
  data?: IItem
}

const ShoppingListView = (props: IShoppingListProps) => {

  
  const title = 'Add item'
  const [text, setText] = useState(props.data?.text || '')


  const onSave = () => {
      const newData = {
        id: 'id-' + Math.floor(Math.random() * 10000000),
        text,
        bought: false,
      }
      props.onSave(newData)
  }

  return (
    <Modal visible={props.isVisible} style={styles.modal} 
        animationType="slide" 
        transparent={true}
        >
      <KeyboardAvoidingView style={styles.container} >
      <Text style={styles.title}>{title}</Text>

        <View style={styles.content}>
          <Text style={styles.label}>ToDo Text:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={props.data?.text}
            multiline={true}
            numberOfLines={10}
          />

        </View>

        <View style={styles.menu} >
          <TouchableOpacity
                  style={styles.button}
                  onPress={() => props.onClose()}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
                  style={styles.button}
                  onPress={onSave}
                >
                  <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default ShoppingListView
