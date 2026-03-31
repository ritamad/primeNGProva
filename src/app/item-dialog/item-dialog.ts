import { Component, inject, input, model } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ListboxModule } from 'primeng/listbox';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-item-dialog',
  imports: [DialogModule, InputTextModule, FloatLabelModule, ListboxModule],
  providers: [MessageService],
  templateUrl: './item-dialog.html',
  styleUrl: './item-dialog.css',
})
export class ItemDialog {
  messageService = inject(MessageService);
  visible = model.required<boolean>();

  itemForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl(''),
    category: new FormControl('', [Validators.required]),
    available: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    minThreshold: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    supplier: new FormControl(''),
  });
}
