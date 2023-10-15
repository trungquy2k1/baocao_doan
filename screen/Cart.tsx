import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import firebase from '../firebase/Firebase';
import ChitietSP from './ChitietSP';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  useEffect(() => {
    const ref = firebase.database().ref('thuyhaisan');

    ref.on('value', snapshot => {
      const data = snapshot.val();
      setData(data);
    });

    return () => {
      ref.off();
    };
  }, []);

  const handleProductPress = (product) => {
    navigation.navigate('ChitietSP', { product });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {data ? (
          Object.keys(data).map(key => (
            <View
              style={{justifyContent: 'space-evenly'}}>
              <TouchableOpacity onPress={() => handleProductPress(data[key])}>
                <View>
                  <View key={key}>
                    {/* <Text style={styles.text}>{data[key].createdAt}</Text> */}

                    {data[key].imageUrl && (
                      <Image
                        source={{uri: data[key].imageUrl}}
                        style={{height: 140, width: '100%', borderRadius:10}}
                      />
                    )}
                    <View style={styles.dess}>
                      <Text style={styles.text}>{data[key].text}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom:10
  },
  text: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  dess: {
    // backgroundColor: 'lightblue',
    borderRadius: 6,
    padding: 8,
    alignItems: 'center',
    width: 180,
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 7,
    marginBottom:3,
    borderWidth:1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
});

export default Cart;
