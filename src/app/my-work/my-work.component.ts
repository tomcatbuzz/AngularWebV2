import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Ionic', cols: 1, rows: 1 },
          { title: 'Angular', cols: 1, rows: 1 },
          { title: 'VueJS', cols: 1, rows: 1 },
          { title: 'UI/UX', cols: 1, rows: 1 },
          { title: 'Logo', cols: 1, rows: 1 },
          { title: 'Design', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Ionic', cols: 2, rows: 1 },
        { title: 'Angular', cols: 1, rows: 1 },
        { title: 'VueJS', cols: 1, rows: 2 },
        { title: 'UI/UX', cols: 1, rows: 1 },
        { title: 'Logo', cols: 2, rows: 1 },
        { title: 'Design', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
