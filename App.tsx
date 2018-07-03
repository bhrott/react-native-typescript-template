/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react'
import { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { MyPage } from './src/ui/pages'

type Props = {}
export default class App extends Component<Props> {
	render() {
		return (
			<MyPage />
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
