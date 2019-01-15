import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
 clients:any;

  constructor(private clientDataService:ClientService) { 
    
  }

  ngOnInit() {
    this.clientDataService.getData().subscribe(client=>{
      this.clients =client;
    })
  }

}
