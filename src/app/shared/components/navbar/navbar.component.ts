import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  type:string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.type = JSON.parse(localStorage.getItem('user')).type;
  }
  public signOut(): void {
    this.authService
      .logout()
      .then((response) => {
        this.authService.isLoged = false;
        localStorage.clear();
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  public redirect(redir: string): void {
    switch (redir) {
      case 'add':
        this.router.navigate(['add']);
        break;
      case 'cripto':
        this.router.navigate(['cripto']);
        break;
      case 'compra':
        this.router.navigate(['compra']);
        break;

      default:
        break;
    }
  }
}
