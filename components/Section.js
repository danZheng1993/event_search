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

const Section = ({ title, children }) => (
  <View style={styles.sectionWrapper}>
    <View style={styles.sectionTitleWrapper}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <View style={styles.sectionContent}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 16,
  },
  sectionTitleWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  sectionContent: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});

export default Section;
