import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { Inventory } from './inventory/inventory';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Inventory, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('primeNgProva');
}
