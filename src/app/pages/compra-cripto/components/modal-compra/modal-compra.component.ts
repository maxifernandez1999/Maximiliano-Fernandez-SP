import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cripto } from 'src/app/shared/models/cripto';

@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.scss']
})
export class ModalCompraComponent implements OnInit {
  formGP:FormGroup;
  @Input('criptoToCompra') criptoToCompra:Cripto;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGP = this.fb.group({
      cantidad: ['', [Validators.required, Validators.max(99)]],
    });
  }
  public get form(): any {
    return this.formGP.controls;
  }
  get nombreValue(): number {
    return this.formGP.get('cantidad').value;
  }

}
