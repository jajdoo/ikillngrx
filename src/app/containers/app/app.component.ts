import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store/store";
import * as fromRoot from "../../reducers/index";
import { Observable } from "rxjs/Observable";
import * as Nav from "../../actions/nav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Kill Stas!";
  navVisible$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.navVisible$ = this.store.select<boolean>(fromRoot.getNavVisibile);
  }

  changeNavVisibility(visible: boolean) {
    this.store.dispatch(new Nav.ChangeNavVisibility(visible));
  }
}
