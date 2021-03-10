import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-atualizar',
  templateUrl: './cliente-atualizar.component.html',
  styleUrls: ['./cliente-atualizar.component.css']
})
export class ClienteAtualizarComponent implements OnInit {

  cliente: Cliente
  constructor(private ClienteService: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
  this.ClienteService.getCliente(id).subscribe(cliente => this.cliente = cliente)
  }

save (): void{
  this.ClienteService.updateCliente(this.cliente).subscribe(() => this.router.navigate(["/clientes"]))
}
}
