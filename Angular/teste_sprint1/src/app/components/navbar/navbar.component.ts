import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  // bloco para criar o 'warning'

  title = 'Página indisponível'
  
  constructor(private toastr: ToastrService) {}

  showWarning(){
  this.toastr.warning('DESCULPE HUMENO', 'PÁGINA INDISPONÍVEL',{
    progressBar: true,
    positionClass: 'toast-bottom-right'
  })
  } 

}
