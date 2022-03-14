import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from './../services/user-crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  userForm: FormGroup;
  randomNumber;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private userCrudService: UserCrudService,  
  ) {
    this.userForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      cpf: [''],
      cupom: ['']
    })
  }

  ngOnInit() { 
    
  }
  
  genRandomNumber() {
      this.randomNumber = Math.floor(Math.random() * 999999)
      window.alert("Cupom gerado com sucesso!")
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.userCrudService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}