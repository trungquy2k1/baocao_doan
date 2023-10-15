import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

import Header from './Header';
import Haydung from '../navigation/Haydung';
import Cart from './Cart';
// import ListProduce from './ListProduce';
// import CcdbScreen from './Category/Caycanhdeban/CcdbHome';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View>
          <Haydung tile="Sản phẩm mới" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Danh mục')}>
          <View>
            <Text style={{fontSize: 16, color: 'blue', marginRight:5}}>xem thêm</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 16,
        }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('THỊT BÒ')}>
            <Image
              style={styles.img1}
              source={require('../Image/anh2.jpg')}
            />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text1}>BUNRT </Text>
              <Text style={styles.text1}>CHEESECAKE</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cơm - Xôi - Cháo')}>
            <Image
              style={styles.img1}
              source={require('../Image/anh1.jpg')}
            />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text1}>BÁNH CHUỐI YẾN</Text>
              <Text style={styles.text1}> MẠCH SỮA CHUA</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Thủy hải sản')}>
            <Image style={styles.img1} source={require('../Image/anh3.jpg')} />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text1}>CHÈ BÁNH</Text>
              <Text style={styles.text1}> ĐẬU XANH</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Pasta - Spaghetti')}>
            <Image
              style={styles.img1}
              source={require('../Image/anh4.jpg')}
            />
            <Text style={styles.text1}>CHÂN GÀ</Text>
            <Text style={styles.text1}>NGÂM SẢ ỚT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Haydung tile="Sản phẩm nổi bật" />
      {/* <ListProduce navigation={navigation} /> */}
      <Cart navigation={navigation} />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 12,
    color: 'black',
  },
  img1: {
    width: 80,
    height: 80,
    borderRadius: 30
  },
});

export default HomeScreen;
