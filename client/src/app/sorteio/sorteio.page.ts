import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserCrudService } from '../services/user-crud.service';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.page.html',
  styleUrls: ['./sorteio.page.scss'],
})
export class SorteioPage implements OnInit {

  Users: any = [];
  array: any = [];

  constructor( 
    public formBuilder: FormBuilder,
    private userCrudService: UserCrudService,  
  ) { }

  ngOnInit() { 
    this.userCrudService.getUsers().subscribe((response: any =  []) => this.Users = response)
  }

  ionViewDidEnter() {
    this.ngOnInit()
  }

}