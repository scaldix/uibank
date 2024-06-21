import { Component } from '@angular/core';
import { EmailService} from "../../service/email.service";
import {EmailJSResponseStatus} from "emailjs-com";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.scss'
})
export class AProposComponent {

  contactForm: FormGroup

  constructor(private fb: FormBuilder, private emailService: EmailService){
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      tel: ['', Validators.required],
      fonction: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      objet: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void{
    if (this.contactForm.valid){
      this.emailService.sendEmail(this.contactForm.value)
        .then((result: EmailJSResponseStatus)=> {
        console.log(result.text);
        alert('Message envoyé avec succés!');
        this.contactForm.reset(); // Réinitialiser le formulaire
      }, (error) => {
          console.error(error.text);
          alert('Une erreur est survenue lors de l\'envoi du message.');
        });
    }else{
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

}
