import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { noisesLevels } from '../../services/constants';
import styles from './infoStyles';

const AboutScreen = ({ homeReducer }) => {
    const { currentLevel } = homeReducer;
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.currentLevel}>{currentLevel} dB</Text>
                <Text style={styles.note}>
                    Microphones in most android devices are aligned to human voice. The maximum values are limited by the device. Very loud sounds(over ~90 dB) may not be recognized in most device. So please use it as just an auxiliary tools. If you need more accurate dB values, we recommend a actual sound level meter for that.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent} style={{flex: 1}}>
                { noisesLevels.map(level => <Text style={[{fontSize: 18, padding: 5},handleInfoColor(currentLevel,level)]} key={level.level}>{level.info}</Text>) }
            </ScrollView>
        </SafeAreaView>
    )
};

const handleInfoColor = (currentLevel, levelData) => {
  if(currentLevel >= levelData.level[0] && currentLevel <= levelData.level[1]) {
      const colorStyles = {
          borderColor: levelData.color,
          backgroundColor: levelData.color,
      };
      const activeStyles = { ...styles.currentInfo, ...colorStyles};
      return activeStyles
  }
};

function mapStateToProps(state) {
    return {
        homeReducer: state.homeReducer,
    };
}

export default connect(mapStateToProps, null)(AboutScreen);
