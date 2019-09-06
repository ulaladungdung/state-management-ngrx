import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { AddZipcode, RemoveZipcode } from './actions/zipcode.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'state-management-ngrx';

  zipcodes: Array<String>;

  /// Inititate the Store such as we can access the state from there
  constructor(public store: Store<State>) {
    store.select(state => state.zipcode)
      .subscribe(zipcodeState => this.zipcodes = zipcodeState.zipcodes);
  }

  addZipcode(payload: string) {
    this.store.dispatch(new AddZipcode(payload));
  }

  removeZipcode(payload: string) {
    this.store.dispatch(new RemoveZipcode(payload));
  }
}
