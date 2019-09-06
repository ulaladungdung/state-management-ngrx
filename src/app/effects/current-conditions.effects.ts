import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ZipcodeActionTypes, AddZipcode } from '../actions/zipcode.actions';
import { WeatherService } from '../services/weather.service';
import { CurrentConditionsLoaded, CurrentConditionsLoadFailed } from '../actions/current-conditions.actions';



@Injectable()
export class CurrentConditionsEffects {

  @Effect()
  loadCurrentConditions$: Observable<any> = this.actions$.pipe(
    ofType(ZipcodeActionTypes.AddZipcode),
    mergeMap(action =>
      this.weatherService.loadCurrentConditions(action['zipcode']).pipe(
        map(data => new CurrentConditionsLoaded(action['zipcode'], data)),
        catchError(err => of(new CurrentConditionsLoadFailed(action['zipcode'], err))
        )
      )
    )
  )
  constructor(private actions$: Actions<AddZipcode>, private weatherService: WeatherService) { }

}
