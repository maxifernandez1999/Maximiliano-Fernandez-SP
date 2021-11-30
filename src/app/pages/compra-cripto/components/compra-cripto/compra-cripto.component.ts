import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cripto } from 'src/app/shared/models/cripto';
import { User } from 'src/app/shared/models/user';
import { CriptoService } from 'src/app/shared/services/cripto.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-compra-cripto',
  templateUrl: './compra-cripto.component.html',
  styleUrls: ['./compra-cripto.component.scss']
})
export class CompraCriptoComponent implements OnInit {
  @Input('criptoInput') criptoInput:Cripto[] = [];
  formG:FormGroup;
  criptosVende: Cripto[] = [];
  email:string;
  users:User[] = [];
  dataToModal:Cripto;
  password:string;
  constructor(private criptoService: CriptoService,
    private userService: UserService,
    private fb : FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.getUserData();
    // this.getCriptosFromUser();
    this.getSellers();
  }
  initForm() {
    this.formG = this.fb.group({
      email: ['', [Validators.required]]
    });
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log(changes.criptoInput.currentValue)
    for (const cripto of this.criptoInput) {
      this.criptosVende.push(cripto);
    }
    console.log(this.criptosVende);
    
  }
  get emailValue(): string {
    return this.formG.get('email').value;
  }
  public changeEmailValue():void{
    this.getCriptosFromUser(this.emailValue);
  }
  public reset():void{
    this.criptosVende = [];
  }
  public getUserData():void{
    this.email = JSON.parse(localStorage.getItem('user')).email;
    this.password = JSON.parse(localStorage.getItem('user')).password;
  }
  public sendDataToModal(cripto:Cripto):void{
    this.dataToModal = cripto;
  }
  public getCriptosFromUser(emailFromSelect:any): void {
    this.userService.getUsers().subscribe((response) => {
      response.forEach(user => {
        if (user.email === emailFromSelect) {
          if(user.vende !== []){
            user.vende.forEach(us => {
              let cripto: Cripto = {
                nombre: us.nombre,
                costoActual:us.costoActual,
                comision:us.comision,
                ano:us.ano
              }
              this.criptosVende.push(cripto)
            });
          }
        }
      });
    });
    console.log(this.criptosVende);
  }
  public getSellers():void{
    this.userService.getUsers().subscribe(response => {
      response.forEach(seller => {
        if (seller.type === "Vendedor") {
          this.users.push(seller);
        }
      })
      
    })
  }


}
