import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private ClienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {

  }

save():void{

this.ClienteService.addCliente(this.cliente).subscribe()
this.saida();

} 
saida():void{
 this.router.navigate(['/clientes']);
}
}
