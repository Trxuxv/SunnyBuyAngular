import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  client : Client;
  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
    this.get();
  }

  
 get()
 {
   this.clientService._getClient()
   .subscribe(data => 
    {
      this.client = data;
    })
 }
}
