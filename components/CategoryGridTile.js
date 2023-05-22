import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'

const {width, height } = Dimensions.get('screen')
const CategoryGridTile = ({title, color}) => {
  return (
    <View style = {{margin : height /20}}>
      <Pressable >
        <View style = {{backgroundColor : 'red', margin : 10}}>
            <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}
export default CategoryGridTile

const styles = StyleSheet.create({})