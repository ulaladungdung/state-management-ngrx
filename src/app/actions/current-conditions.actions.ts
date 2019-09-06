import { Action } from '@ngrx/store';

/// These are the actions that the effect will throw after any events.
export enum CurrentConditionsActionTypes {
  CurrentConditionsLoaded = '[CurrentConditions] CurrentConditions Loaded',
  CurrentConditionsLoadFailed = '[CurrentConditions] CurrentConditions Loading Failed',
}

/// `CurrentConditionsLoaded` action is thrown when the data form the internet
/// is succesfully loaded. 
/// The payloads are `zipcode` and `conditions`
export class CurrentConditionsLoaded implements Action {
  readonly type = CurrentConditionsActionTypes.CurrentConditionsLoaded;

  constructor(public zipcode: String, public conditions: any) { }
}

export class CurrentConditionsLoadFailed implements Action {
  readonly type = CurrentConditionsActionTypes.CurrentConditionsLoadFailed;

  constructor(public zipcode: String, public error: any) { }
}


export type CurrentConditionsActions = CurrentConditionsLoadFailed | CurrentConditionsLoaded;
