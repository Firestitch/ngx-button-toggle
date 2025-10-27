import { Component } from '@angular/core';
import { KitchenSinkConfigureComponent } from '../kitchen-sink-configure';
import { FsExampleComponent } from '@firestitch/example';
import { FsMessage } from '@firestitch/message';
import { FsLabelModule } from '@firestitch/label';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'multiple',
    templateUrl: 'multiple.component.html',
    styleUrls: ['multiple.component.scss'],
    standalone: true,
    imports: [FsLabelModule, MatButtonToggleGroup, FormsModule, MatButtonToggle]
})
export class MultipleComponent {

  public config = {};
  public weekdays = null;

  public weekdaysList = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

}
