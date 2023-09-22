import { Component } from '@angular/core';
import { KitchenSinkConfigureComponent } from '../kitchen-sink-configure';
import { FsExampleComponent } from '@firestitch/example';
import { FsMessage } from '@firestitch/message';

@Component({
  selector: 'multiple',
  templateUrl: 'multiple.component.html',
  styleUrls: ['multiple.component.scss']
})
export class MultipleComponent {

  public config = {};
  public weekdays = null;

  public weekdaysList = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

}
