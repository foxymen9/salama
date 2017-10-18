import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import ExtraDimensions from 'react-native-extra-dimensions-android';

// export const window = Dimensions.get('window');
// if (Platform.OS === 'ios') {
  export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');;
// }
// else {
//   export const statusBarHeight = ExtraDimensions.get('STATUS_BAR_HEIGHT');
//   export const softMenuBarHeight = ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT');
//   export const height = ExtraDimensions.get('REAL_WINDOW_HEIGHT');
//   export const screenWidth = ExtraDimensions.get('REAL_WINDOW_WIDTH');
//   export const screenHeight = height - statusBarHeight - softMenuBarHeight;
// }
export const navBarHeight = 70;