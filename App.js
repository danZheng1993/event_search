/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Section, VenuesList, EventsList, PerformersList } from './components';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [renderData, setRenderData] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchData = async (keyword) => {
    try {
      setLoading(true);
      const result = await fetch(`https://mobile-staging.gametime.co/v1/search?q=${keyword}`)
        .then(response => response.json());
      setRenderData(result);
    } catch (err) {
      console.log({ err });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (keyword !== '') {
      fetchData(keyword);
    } else {
      setRenderData({
        events: [],
        venues: [],
        performers: [],
      })
    }
  }, [keyword]);

  const { events = [], venues = [], performers = [] } = renderData;
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContent}>
            <TextInput
              style={styles.input}
              placeholder="Team, performer or venue"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              value={keyword}
              onChangeText={setKeyword}
            />
            {keyword !== '' && (
              <TouchableOpacity onPress={() => setKeyword('')} style={styles.cancelCircleBtn}>
                <Text style={styles.cancelCircleBtnText}>X</Text>
              </TouchableOpacity>
            )}
          </View>
          {keyword !== '' && (
            <TouchableOpacity onPress={() => setKeyword('')} style={styles.cancelBtn}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView style={styles.content}>
          <Section title="Events">
            <EventsList loading={loading} events={events} />
          </Section>
          <Section title="Performers">
            <PerformersList loading={loading} performers={performers} />
          </Section>
          <Section title="Venues">
            <VenuesList loading={loading} venues={venues} />
          </Section>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: 32
  },
  inputWrapper: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
  },
  inputContent: {
    flex: 1,
  },
  input: {
    flex: 1,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
  cancelCircleBtn: {
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    position: 'absolute',
    top: 6,
    right: 8,
  },
  cancelCircleBtnText: {
    color: 'black',
    textAlign: 'center'
  },
  cancelBtn: {
    paddingHorizontal: 16,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtnText: {
    color: '#FFF',
  },
  content: {
    flex: 1,
  },
});

export default App;
