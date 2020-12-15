/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

import EmptyState from './EmptyState';

const VenuesList = ({ venues, loading }) => {
  const renderItem = ({item}) => (
    <View style={venueStyles.wrapper}>
      <View style={venueStyles.avatarWrapper}>
        <Image
          source={{ uri: item.image_url }}
          style={venueStyles.image}
          resizeMode="contain"
        />
      </View>
      <View style={venueStyles.contentWrapper}>
        <Text style={venueStyles.title}>{item.name}</Text>
        <Text style={venueStyles.subTitle}>{item.city}, {item.state}</Text>
      </View>
    </View>
  );

  const keyExtractor = (item) => `venue_${item.id}`;

  return (
    <FlatList
      data={venues}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={<EmptyState loading={loading} />}
    />
  );
}

const venueStyles = StyleSheet.create({
  wrapper: {
    padding: 8,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  contentWrapper: {
    flex: 1
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: 'bold',
    fontSize: 14,
  }
});

export default VenuesList;
