import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste_sprint1';
}

// function mostrarSenha(): void {
//   const senha = document.getElementById("senha") as HTMLInputElement;
//   if (senha.type === "password") {
//     senha.type = "text";
//   } else {
//     senha.type = "password";  
//   }
// }
