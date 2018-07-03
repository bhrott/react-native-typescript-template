import React from 'react'
import { SafeAreaView, View, Platform, ViewProps } from 'react-native'

const Container: any = Platform.OS == 'android' ? View : SafeAreaView

interface Props {
    viewProps?: ViewProps
}

export class APSafeAreaView extends React.PureComponent<Props> {
    render() {
        return (
            <Container {...this.props.viewProps}>
                {this.props.children}
            </Container>
        )
    }
}