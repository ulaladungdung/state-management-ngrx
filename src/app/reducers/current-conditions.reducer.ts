import { CurrentConditionsActionTypes, CurrentConditionsActions } from '../actions/current-conditions.actions';


export interface CurrentConditionsState {
    conditions: Map<String, any>;
}

export const initialState: CurrentConditionsState = {
    conditions: new Map()
};

export function currentConditionsReducer(state = initialState, action: CurrentConditionsActions): CurrentConditionsState {
    switch (action.type) {
        case CurrentConditionsActionTypes.CurrentConditionsLoaded: {
            const newMap = new Map(state.conditions);
            newMap.set(action.zipcode, action.conditions); /// Making new state
            console.log(action.conditions);
            return { ...state, conditions: newMap };
        }
        default:
            return state;
    }
}