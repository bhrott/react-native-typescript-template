import React from 'react'
import { StyleSheet } from 'react-native'

import { APSafeAreaView } from '../components'

export default abstract class BasePage<TProps, TState> extends React.Component<TProps, TState> {

    abstract renderContent(): React.ReactNode;

    render() {
        return (
            <APSafeAreaView viewProps={{ style: styles.container }}>
                {this.renderContent()}
            </APSafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})