import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {ActionButton} from 'react-native-enhanced-action-button';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <ActionButton />
    </SafeAreaView>
  );
};

export default App;
