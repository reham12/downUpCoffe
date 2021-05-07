import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import styles from './style';

const Introduction = ({navigation}) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.ScrollView}>
      <View style={styles.sectionFooter}>
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            style={styles.btnSkip}>
            <Text style={styles.textSkip}>Skip test</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Introduction;
