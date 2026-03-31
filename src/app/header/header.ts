import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
