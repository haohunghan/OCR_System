import * as React from 'react';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

import MoreScreen from '../screen/more/MoreScreen';

const MoreStack = createStackNavigator();

function more() {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen name="More" component={MoreScreen} />
    </MoreStack.Navigator>
  );
}

export default more;
