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
} from 'react-native';
import moment from 'moment';

import EmptyState from './EmptyState';

const EventList = ({ events, loading }) => {
  const renderItem = ({item}) => (
    <View style={eventStyles.wrapper}>
      <View style={eventStyles.dateWrapper}>
        <Text style={eventStyles.date}>
          {moment(item.event.datetime_local).format('M/D')}
        </Text>
        <Text style={eventStyles.weekday}>
          {moment(item.event.datetime_local).format('ddd')}
        </Text>
      </View>
      <View style={eventStyles.contentWrapper}>
        <Text style={eventStyles.eventTitle}>{item.event.name}</Text>
        <Text style={eventStyles.subTitle}>{item.venue.name}</Text>
      </View>
    </View>
  )

  const keyExtractor = (item) => `event_${item.event.id}`;
  return (
    <FlatList
      data={events}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={<EmptyState loading={loading} />}
    />
  );
}

const eventStyles = StyleSheet.create({
  wrapper: {
    padding: 8,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  dateWrapper: {
    flexDirection: 'column',
    width: 64,
    alignItems: 'flex-start',
  },
  date: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  weekday: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentWrapper: {
    flex: 1
  },
  eventTitle: {
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

export default EventList;
