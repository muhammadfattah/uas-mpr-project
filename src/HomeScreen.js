/* eslint-disable */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [JSON, setJSON] = useState([]);
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/erdem/8c7d26765831d0f9a8c62f02782ae00d/raw/248037cd701af0a4957cce340dabb0fd04e38f4c/countries.json',
    )
      .then(response => response.json())
      .then(json => setJSON(json))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({index}) => {
    const country = JSON[index];
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('Detail', {...country})}
        style={styles.touchable}
        underlayColor="#EEEEEE"
        activeOpacity={0.6}>
        <View>
          <Text style={styles.textCountryName}>
            {country.name} ({country.country_code})
          </Text>
          {country.capital && (
            <Text style={styles.text}>Capital : {country.capital}</Text>
          )}
        </View>
      </TouchableHighlight>
    );
  };

  return <FlatList data={JSON} renderItem={renderItem} />;
};

export default HomeScreen;

const styles = StyleSheet.create({
  touchable: {
    borderBottomWidth: 0.1,
    borderTopWidth: 0.3,
    padding: 15,
    backgroundColor: 'white',
  },
  textCountryName: {
    textAlign: 'left',
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  text: {
    textAlign: 'left',
    color: 'gray',
  },
});
