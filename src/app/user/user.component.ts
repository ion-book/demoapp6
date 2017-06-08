import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: string;

  constructor(private user: UserService) { }

  ngOnInit() {
   this.user.setUserName("Juan Topo");
    //asignamos el valor al atributo userName.
    this.userName = this.user.getUserName();

    //TODO: asignar una edad. 

    //TODO: obtener edad y mostrarla en el componente.
  }

}
