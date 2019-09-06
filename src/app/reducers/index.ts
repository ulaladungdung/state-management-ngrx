import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ZipcodeState, zipcodeReducer } from './zip-codes.reducer';
import { CurrentConditionsState, currentConditionsReducer } from './current-conditions.reducer';

/// Register the zipcode state to the pool of states
export interface State {
  zipcode: ZipcodeState,
  currentConditions: CurrentConditionsState
}

/// Register the zipcode reducer to the pool of reducer 
/// that maps to zipcode state
export const reducers: ActionReducerMap<State> = {
  zipcode: zipcodeReducer,
  currentConditions: currentConditionsReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
