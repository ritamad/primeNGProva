import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './features/card/card';
import { Inventory } from './features/inventory/inventory';
import { Sidebar } from './layout/sidebar/sidebar';
import { Header } from './layout/header/header';
import { LoginComponent } from './features/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Inventory, Sidebar, Header, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('primeNgProva');
}
