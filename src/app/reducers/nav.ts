import * as Nav from "../actions/nav";

export interface State {
    navVisible: boolean;
}

const initialState: State = {
    navVisible: true
};

export function reducer(state: State = initialState, action: Nav.Actions) {
    switch (action.type) {
        case Nav.CHANGE_NAV_VISIBILITY:
            return {...state, navVisible: action.visible };
    }
    return state;
}

export const getNavVisible = (state: State): boolean => state.navVisible;
