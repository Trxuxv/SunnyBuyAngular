import { Client } from 'src/app/pages/client/models/client.model';
import { ClientService } from 'src/app/pages/client/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {

  form: FormGroup = null;
  client: Client;
  
  constructor(private clientService : ClientService, private route: Router) { }

  public ngOnInit(): void 
  {
    this.form = this.createSignUp();
  }

  createSignUp() : FormGroup
  {
    return new FormGroup
    (
      {
        name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [Validators.minLength(4), Validators.maxLength(50)]), 
      }
    )
  }

  saveSignUp()
  {
    const model = 
    {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }

    this.clientService._postClient(model)
    .subscribe(x => 
      {
        if(x){
          this.clientService._showMessageSuccess('Operation executed successfully')
          this.route.navigate(['/auth']);
          // window.location.reload();
        }
        else{
          this.clientService._showMessageError('Occurred an error while creating a new user')
        }
      });
  }
}
