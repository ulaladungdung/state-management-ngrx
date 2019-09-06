import { ZipcodeActionTypes, ZipcodeActions } from '../actions/zipcode.actions';


export const zipCodesFeatureKey = 'zipCodes';

// The data that zipcode state should hold.
export interface ZipcodeState {
  zipcodes: Array<String>;
}

// The initial state of the data mentioned in the state.
export const initialState: ZipcodeState = {
  zipcodes: ["test"]
};

export function zipcodeReducer(state = initialState, action: ZipcodeActions): ZipcodeState {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcode:
      // `...state` copies all the previous state
      // `zipcodes: [...state.zipcodes, action.zipcode]` and merges it with  a new state
      //  which has a zipcode array of `...state.zipcodes` merged with a new zipcode from `action.zipcode`.
      console.log(state.zipcodes);
      return { ...state, zipcodes: [...state.zipcodes, action.zipcode] };
    case ZipcodeActionTypes.RemoveZipcode:
      console.log(state.zipcodes);
      return {
        ...state, zipcodes: state.zipcodes
          .filter(item => item !== action.zipcode)
      };
      action;
    default:
      return state;
  }
}
