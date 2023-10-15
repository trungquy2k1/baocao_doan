import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../../firebase/Firebase';
import ChitietSP from '../../ChitietSP';

const Listccvp = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [originalData, setOriginalData] = useState(null);
  useEffect(() => {
    const ref = firebase.database().ref('comxoi');

    ref.on('value', snapshot => {
      const data = snapshot.val();
      setData(data);
    });

    return () => {
      ref.off();
    };
  }, []);
  const handleProductPress = product => {
    navigation.navigate('ChitietSP', {product});
  };

  // const handleSearch = () => {
  //   const filteredData = Object.values(data).filter(product => {
  //     return product.text.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  //   setData(filteredData);
  // };
  
  const handleSearch = () => {
    if (originalData) {
      const filteredData = Object.values(originalData).filter(product => {
        return product.text.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setData(filteredData);
    }
  };

  const handleShowAll = () => {
    setData(originalData);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* tim kiem */}
        <View style={styles.timkiem}>
          <TextInput
            placeholder="Search by product name"
            onChangeText={text => setSearchTerm(text)}
          />
          {/* <Button
            title="Search"
            onPress={() => handleSearch()}
          /> */}
          <TouchableOpacity
            style={styles.btntim}
            onPress={() => handleSearch()}>
            <Text style={styles.tim}>TÌm kiếm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btntim}
            onPress={() => handleShowAll()}>
            <Text style={styles.tim}>Hiện</Text>
          </TouchableOpacity>
        </View>
        {data ? (
          Object.keys(data).map(key => (
            <View style={{justifyContent: 'space-evenly'}} key={key}>
              <TouchableOpacity onPress={() => handleProductPress(data[key])}>
                <View style={{marginTop: 8}}>
                  {/* <Text style={styles.text}>{data[key].createdAt}</Text> */}

                  {data[key].imageUrl && (
                    <Image
                      source={{uri: data[key].imageUrl}}
                      style={{
                        height: 180,
                        width: '100%',
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: 'black',
                      }}
                    />
                  )}
                  <View style={styles.dess}>
                    <Text style={styles.text}>{data[key].text}</Text>
                    <View style={styles.bodertext}>
                      <Text style={styles.text2}>{data[key].gia} VNĐ</Text>
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
  timkiem: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  btntim: {
    borderLeftWidth: 1,
  },
  tim: {
    color: 'green',
    fontSize: 18,
    // alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    backgroundColor: '#FFE4C4',
  },
  text: {
    fontSize: 20,
    color: '#009933',
    textAlign: 'center',
  },
  text2: {
    color: 'red',
    fontSize: 20,
    borderTopWidth: 1,
    borderColor: 'black',
  },
  bodertext: {},
  dess: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 8,
    alignItems: 'center',
    width: 180,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
});

export default Listccvp;
