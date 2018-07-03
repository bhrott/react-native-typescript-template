import React from 'react'
import { NavigationActions, NavigationNavigateAction } from 'react-navigation';

type Navigator = {
    dispatch: (action: NavigationNavigateAction) => {}
}

let _navigatorInstance: Navigator | null = null

function navigate(routeName: string, params: object) {
    _navigatorInstance!.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}

export class NavigationService {
    static useNavigator(navigatorInstance: Navigator) {
        _navigatorInstance = navigatorInstance
    }
}