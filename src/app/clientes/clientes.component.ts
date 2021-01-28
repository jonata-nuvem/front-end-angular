import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
clientes: Cliente[];
  

constructor(private ClienteService: ClienteService) { }



  ngOnInit(): void {
    this.getClientes();
  }

delete(cliente:Cliente):void{
  //
}

getClientes(): void{
this.ClienteService.getClientes().subscribe(clientes => this.clientes=clientes)

}

}
