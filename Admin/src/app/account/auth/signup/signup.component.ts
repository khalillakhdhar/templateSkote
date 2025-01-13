import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { UtilisateurService } from 'src/app/shared/services/utilisateur.service';
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../../core/services/auth.service';
import { UserProfileService } from '../../../core/services/user.service';
import { Adresse, Utilisateur } from '../../../shared/classes/utilisateur';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
user:any;
  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;
  utilisateur={} as Utilisateur;
  pass:any;
adresse={} as Adresse;
  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder,private userService:UserService, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private us: UserProfileService,
  private utilisateurService:UtilisateurService
  ) { }

  ngOnInit() {
    
    this.utilisateurService.getAllUtilisateurs().subscribe(data=>{
      console.log(data);
    }
    );
   
  }

  

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;
    this.utilisateur.adresse=this.adresse;

    // stop here if form is invalid
   
      if (environment.defaultauth === 'firebase') {

        this.user=this.utilisateur;
        this.user.password=this.pass;
        
        let us=Object.assign({},this.user);
        this.userService.createNewUser(us);

        this.authenticationService.registerUser(us).then((res: any) => {
          this.utilisateurService.createUtilisateur(this.utilisateur).subscribe(data => {
            console.log(data);
            this.successmsg = true;
            if (this.successmsg) {
              this.router.navigate(['/dashboard']);
            }
          }
          );
         
        })
          .catch(error => {
            this.error = error ? error : '';
          });
      } else {
        this.us.register(this.signupForm.value)
          .pipe(first())
          .subscribe(
            data => {
              this.successmsg = true;
              if (this.successmsg) {
                this.router.navigate(['/account/login']);
              }
            },
            error => {
              this.error = error ? error : '';
            });
      }
    }
  }

