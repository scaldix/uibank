import {booleanAttribute, Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {FormsModule} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  message: string = 'Vous êtes déconnecté';
  password!: string;
  email!: string;
  auth!: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage(){
    if(this.auth.isLoggedIn){
      this.message = 'voes êtes connecté.';
    }else{
      this.message = 'Login ou mot de passe incorrect!';
    }
  }

  login() {
    this.message = 'Tentative de connexion...';
    this.auth.login(this.email, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if(isLoggedIn){
          this.router.navigate(['/user']);
        }else {
          this.password = '';
          this.router.navigate(['/login']);
        }
      })
  }

}
