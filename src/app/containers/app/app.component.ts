import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  async goSomeWhere() {
    await this.router.navigate(['/aaa']);
  }

  async goToHate() {
    await this.router.navigate(['/hate']);
  }
}
