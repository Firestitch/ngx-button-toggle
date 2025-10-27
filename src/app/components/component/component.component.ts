import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'fs-component',
    templateUrl: 'component.component.html',
    styleUrls: ['component.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class FsComponentComponent {

  constructor() {
  }
}
