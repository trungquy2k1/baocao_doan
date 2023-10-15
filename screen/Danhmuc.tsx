import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from './Header';
import Drawer from '../navigation/Drawer';

const Danhmuc = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Drawer tile="DANH MỤC SẢN PHẨM" />
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => navigation.navigate('THỊT BÒ')}>
            <View>
              <Image
                source={require('../Image/anh1.jpg')}
                style={styles.image1}
              />
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Thịt bò</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cơm - Xôi - Cháo')}>
            <View>
              <Image
                source={require('../Image/anh4.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Cơm - Xôi - Cháo</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Thủy hải sản')}>
            <View>
              <Image
                source={require('../Image/anh2.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Thủy Hải Sản</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Pasta - Spaghetti')}>
            <View>
              <Image
                source={require('../Image/anh3.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Pasta & Spaghetti</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Phanbon')}>
            <View>
              <Image
                source={require('../Image/phanbon/anhnen.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Phân bón</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Dattrong')}>
            <View>
              <Image
                source={require('../Image/dattrong/anhnen.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Đất trồng</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Dungcu')}>
            <View>
              <Image
                source={require('../Image/dattrong/anhnen.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Dụng cụ làm vườn</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex:1,

    alignItems:'center',
    justifyContent: 'space-evenly',
    // justifyContent:'center',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  image1: {
    marginTop: 20,
    height: 140,
    width: '100%',
    borderWidth: 2,
    borderColor: '#FF9900',
  },
  item: {
    width: '45%',
    // justifyContent:'center',
  },
  text1: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
  dess: {
    backgroundColor: '#99FFCC',
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FF9900',
  },
});

export default Danhmuc;
