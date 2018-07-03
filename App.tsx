/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react'
import { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { RootRouter } from './src/ui/router'
import { NavigationService } from './src/ui/services'

type Props = {}
export default class App extends Component<Props> {
	render() {
		return (
			<RootRouter ref={(navigatorRef: any) => {
				NavigationService.useNavigator(navigatorRef)
			}} />
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
