import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  activeTab: string = 'favorites'; // Define a aba ativa por padrão

  constructor() { }

  ngOnInit(): void {
  }

  // Método para alternar as abas
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
