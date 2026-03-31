import { Component, input, model } from '@angular/core';

import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-item-dialog',
  imports: [DialogModule],
  templateUrl: './item-dialog.html',
  styleUrl: './item-dialog.css',
})
export class ItemDialog {
  visible = model.required<boolean>();
}
