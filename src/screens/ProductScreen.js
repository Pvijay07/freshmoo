import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const ProductScreen = ({route}) => {
  const {product} = route.params
  const dispatch = useDispatch()

  return (
    <View>
      <Text>
        {product.name}
      </Text>
      <Text>
        Price: $
        {product.price}
      </Text>
      <Button title='Add to Cart' onPress={;() => dispatch(addToCart(product))} />
    </View>
  )
}

export default ProductScreen
