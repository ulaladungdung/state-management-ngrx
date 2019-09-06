import { Action } from '@ngrx/store';

export enum ZipcodeActionTypes {
  AddZipcode = '[Zipcode] Add Zipcode',
  RemoveZipcode = '[Zipcode] Remove Zipcodes',
  GetZipcodes = '[Zipcode] Get Zipcodes',

}

export class AddZipcode implements Action {
  readonly type = ZipcodeActionTypes.AddZipcode;

  constructor(public zipcode: string) { }

}

export class GetZipcodes implements Action {

  readonly type = ZipcodeActionTypes.GetZipcodes;

}

export class RemoveZipcode implements Action {
  readonly type = ZipcodeActionTypes.RemoveZipcode;

  constructor(public zipcode: string) { }

}

export type ZipcodeActions = AddZipcode | GetZipcodes | RemoveZipcode;
