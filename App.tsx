/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react'
import { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { Hello } from './src/Hello'

type Props = {}
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Hello name={'Ben'} enthusiasmLevel={1} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
})
