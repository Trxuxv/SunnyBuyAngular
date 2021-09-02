import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Client } from './models/client.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClientService 
{
  id: number;
  private _client = new BehaviorSubject<Client[]>([]);
  public client = this._client.asObservable();
  
  constructor(private request: HttpClient, private snackBar: MatSnackBar) { }

  _showMessageSuccess(message: string): void
  {
    const configuration = new MatSnackBarConfig();
    configuration.panelClass = ['snack-success'];
    configuration.duration = 5000;
    configuration.horizontalPosition = "left";

    this.snackBar.open(message, "undo", configuration)
  }

  _showMessageError(message: string): void
  {
    const configuration = new MatSnackBarConfig();
    configuration.panelClass = ['snack-error'];
    configuration.duration = 5000;
    configuration.horizontalPosition = "left";

    this.snackBar.open(message, "undo", configuration)
  }

  _postClient(model: {name: string, email: string, password: string})
  {
    return this.postClient(model);
  }

   private postClient(model: {name: string, email: string, password: string}): Observable<boolean>
  {
    console.log(apiUrl)
    return this.request.post<boolean>(apiUrl + '/Client/', model)
    .pipe(
      take(1)
    );
  } 

  _login(model : {email: string, password: string})
  {
    return this.login(model);
  }

  private login(model : {email: string, password: string}): Observable<number>
  {
    return this.request.post<number>(apiUrl + '/Client/login/', model)
    .pipe(
      tap(a => this.id = a),
      take(1)
    );
  }

  _getClient()
  {
    return this.getClient();
  }

  private getClient()
  {
    return this.request
    .get<Client>(apiUrl + "/Client/11")
    .pipe
    (
      take(1)
    );
  }
}
