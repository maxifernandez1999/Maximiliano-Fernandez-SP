import { Component, OnChanges, OnInit } from '@angular/core';
import { Cripto } from 'src/app/shared/models/cripto';
import { CriptoService } from 'src/app/shared/services/cripto.service';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from'sweetalert2';
@Component({
  selector: 'app-cripto',
  templateUrl: './cripto.component.html',
  styleUrls: ['./cripto.component.scss'],
})
export class CriptoComponent implements OnInit {
  criptos: Cripto[] = [];
  habilitado:boolean;
  currentCriptos: Cripto[] = [];
  criptosSave: Cripto[] = [];
  constructor(private criptoService: CriptoService, private userService:UserService) {}

  ngOnInit(): void {
    this.habilitado = JSON.parse(localStorage.getItem('user')).habilitado;
    this.getCriptos();
  }
  
  public getCriptos(): void {
    this.criptoService.getCripto().subscribe((response) => {
      this.criptos = response;
    });
  }
  
  public enableValue(e:any, cripto:Cripto):void{
    if(e.target.checked){
      this.currentCriptos.push(cripto);
    }
    console.log(this.currentCriptos);
  }
  public save():void{
    let vende:any = JSON.parse(localStorage.getItem('user')).vende;
    this.criptosSave.push(...vende);
    this.criptosSave.push(...this.currentCriptos);
    let id = JSON.parse(localStorage.getItem('user')).id
    this.userService.updateCriptoUser(id, this.criptosSave).then(()=>{
      Swal.fire(
        'Good job!',
        'Updated!',
        'warning'
      ).then(()=>{
      })
    })
  }
}
