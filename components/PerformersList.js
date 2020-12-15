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

const PerformersList = ({ performers, loading }) => {
  const renderItem = ({item}) => (
    <View style={performerStyles.wrapper}>
      <View style={performerStyles.avatarWrapper}>
        <Image
          source={{ uri: item.hero_image_url }}
          style={performerStyles.avatar}
        />
      </View>
      <View style={performerStyles.contentWrapper}>
        <Text style={performerStyles.title}>{item.name}</Text>
        <Text style={performerStyles.subTitle}>{item.category}</Text>
      </View>
    </View>
  );

  const keyExtractor = (item) => `performer_${item.id}`;

  return (
    <FlatList
      data={performers}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={<EmptyState loading={loading} />}
    />
  );
}

const performerStyles = StyleSheet.create({
  wrapper: {
    padding: 8,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
    marginRight: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
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

export default PerformersList;
