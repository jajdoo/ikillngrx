
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as fromCore from '../../reducers/index';
import {SetStasHatered} from '../../actions/feelings';

@Component({
selector: 'app-hate-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hate-stas-status
      [hateStas]="hateStas$ | async"
      (setHate)="setHate($event)">
    </app-hate-stas-status>`
})
export class HateContainerComponent {
  hateStas$: Observable<boolean>;

  constructor(private store: Store<fromCore.State>) {
    this.hateStas$ = store.select<boolean>(fromCore.getHateStas);
  }

  setHate(hating: boolean) {
    this.store.dispatch(new SetStasHatered(hating));
  }
}
