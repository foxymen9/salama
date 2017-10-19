
import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

// import ExtraDimensions from 'react-native-extra-dimensions-android';

// export const { width: screenWidth, height: screenHeightIOS } = Dimensions.get('window');

// export const RealHeight = ExtraDimensions.get('REAL_WINDOW_HEIGHT');
// export const softMenubarHeight = ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT');
// export const statusbarHeight = ExtraDimensions.get('STATUS_BAR_HEIGHT');
// export const smartbarHeight = ExtraDimensions.get('SMART_BAR_HEIGHT');


// function getScreenHeight() {
//   if (Platform.OS === "ios") {
//     return screenHeightIOS;
//   }
//   else {
//     return RealHeight - softMenubarHeight - statusbarHeight - smartbarHeight;
//   }
// }

// export let screenHeight = getScreenHeight();

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const navBarHeight = 70;