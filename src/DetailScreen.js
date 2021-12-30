/* eslint-disable */

import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const DetailScreen = ({route}) => {
  const {latlng, name, capital, country_code} = route.params;
  const [region, setRegion] = useState({
    latitude: latlng[0],
    longitude: latlng[1],
    latitudeDelta: 15,
    longitudeDelta: 15,
  });
  return (
    <View style={styles.view}>
      <View style={styles.containerText}>
        <Text style={styles.text}>Country name{'\t: ' + name}</Text>
        <Text style={styles.text}>
          Country code{'\t\t: (' + country_code + ')'}
        </Text>
        {capital && (
          <Text style={styles.text}>Capital{'\t\t\t\t\t\t\t: ' + capital}</Text>
        )}
      </View>

      <View style={styles.containerTextLatLng}>
        <Text style={styles.textLatLng}>
          {region.latitude}, {region.longitude}
        </Text>
      </View>

      <MapView
        style={styles.mapView}
        initialRegion={region}
        onRegionChange={region => setRegion({...region})}>
        <Marker
          coordinate={{latitude: latlng[0], longitude: latlng[1]}}
          title={name}
          description={capital && 'Capital : ' + capital}
        />
      </MapView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  view: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,
  },
  containerText: {
    position: 'relative',
    zIndex: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 13,
    fontWeight: '500',
  },
  containerTextLatLng: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    zIndex: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLatLng: {
    color: '#555555',
    fontSize: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
});
