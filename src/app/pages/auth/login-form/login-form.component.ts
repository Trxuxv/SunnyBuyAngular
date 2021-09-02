import { ClientService } from 'src/app/pages/client/client.service';
import { Client } from 'src/app/pages/client/models/client.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit 
{
  public form: FormGroup = null;
  client: Client;
  
  constructor(private clientService : ClientService, private route: Router) { }

  ngOnInit(): void 
  {
    this.form = this.createLogin();
  }

  createLogin() : FormGroup
  {
    return new FormGroup
    (
      {
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [Validators.minLength(4), Validators.maxLength(50)]), 
      }
    )
  }

  saveLogin()
  {
    const model = 
    {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }

    this.clientService
    ._login(model)
    .subscribe(x =>
      {
        console.log(x)

        if (x != 0)
        {
          this.clientService._showMessageSuccess('Operation executed successfully')
          this.route.navigate(['']);
        }else
        {
          this.clientService._showMessageError('Email or password incurrect')
        }
      });
  }
}
