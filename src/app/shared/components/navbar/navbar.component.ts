import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  public signOut(): void {
    this.authService
      .logout()
      .then((response) => {
        this.authService.isLoged = false;
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
