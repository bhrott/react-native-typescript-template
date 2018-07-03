import { createStackNavigator } from 'react-navigation';

import { MyPage } from '../pages'

export default createStackNavigator({
    MyPage: {
        screen: MyPage
    }
})