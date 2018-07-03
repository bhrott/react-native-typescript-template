import React from 'react'
import { View, StyleSheet } from 'react-native'

import BasePage from '../BasePage'

interface Props { }

interface State { }

export class MyPage extends BasePage<Props, State> {
    renderContent(): React.ReactNode {
        return (
            <View style={styles.container} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})