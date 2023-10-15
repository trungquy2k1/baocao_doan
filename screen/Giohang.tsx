
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import firebase from '../../../firebase/Firebase';
import { useNavigation } from '@react-navigation/native';
import firebase from '../firebase/Firebase';
import Drawer from '../navigation/Drawer';
const Giohang = () => {
  const [products, setProducts] = useState([]);
const navigation=useNavigation()
  useEffect(() => {
    // Lắng nghe các thay đổi đối với thông tin sản phẩm trong giỏ hàng
    firebase
      .database()
      .ref('cart')
      .on('value', snapshot => {
        const cartData = snapshot.val();
        const products = [];

        if (cartData) {
          for (const key in cartData) {
            products.push(cartData[key]);
          }
        }

        setProducts(products);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Drawer tile="GIỎ HÀNG" />
      <ScrollView>
        {products.map((product, index) => (
          <View key={index} style={styles.product}>
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.price}>{product.price} VNĐ</Text>
              <Text style={styles.quantity}>x{product.quantity}</Text>
              <Text>______________________________________</Text>
            </View>
          </View>
        ))}
        
      </ScrollView>
      <View style={styles.total}>
        <Text style={styles.totalText}>Tổng tiền:</Text>
        <Text style={styles.totalText}>{products.reduce((total, product) => total + product.price * product.quantity, 0)} VNĐ</Text>
      </View>
      <View style={styles.thanhtoan}>
        <TouchableOpacity onPress={() =>
            Alert.alert('Thanh toán thành công', 'Cảm ơn bạn đã đặt hàng', [
              {text: 'Cancel'},
              {
                text: 'OK',
                onPress: () => navigation.navigate('Home'),
                style: 'default',
              },
            ])
          }>
        <Text style={styles.totalText}>Thanh Toán</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center',
  },
  product: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  info: {
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
  },
  quantity: {
    fontSize: 18,
  },
  total: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  thanhtoan:{
    backgroundColor: '#ffff4d',
    width:'50%',
    height: 40,
    marginVertical: 20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 20
  },
});

export default Giohang;