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
  StyleSheet,
} from 'react-native';

const EmptyState = ({ loading }) => (
  <View style={styles.emptyStateWrapper}>
    {
      loading ? (
        <Text style={styles.emptyState}>Loading Data</Text>
      ) : (
        <Text style={styles.emptyState}>No items in the list</Text>
      )
    }
  </View>
)

const styles = StyleSheet.create({
  emptyStateWrapper: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyState: {
    color: 'white',
    textAlign: 'center',
  }
});

export default EmptyState;