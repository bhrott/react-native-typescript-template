import React from 'react'
import { Text, TextProps } from 'react-native'

const translations = {
    pt_br: () => require('./translations/pt-br.json')
}

let currentTranslation: {
    [key: string]: string
}

function getText(key: string): string {
    return currentTranslation[key]
}

currentTranslation = translations['pt_br']()

interface Props {
    textKey: string,
    textProps?: TextProps
}

export class APText extends React.PureComponent<Props> {
    render() {
        return (
            <Text {...this.props.textProps}>{getText(this.props.textKey)}</Text>
        )
    }
}