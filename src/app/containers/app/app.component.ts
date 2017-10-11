import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import * as fromCore from '../../reducers/index';
import {SetStasHatered} from '../../actions/feelings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hateStas$: Observable<boolean>;

  constructor(private store: Store<fromCore.State>) {
    this.hateStas$ = this.store.select(fromCore.getHateStas);
  }
  setHate(hating: boolean) {
    this.store.dispatch(new SetStasHatered(hating));
  }
}
