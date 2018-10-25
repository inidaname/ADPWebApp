import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  facebook = faFacebook;
  twitter = faTwitter;
  instagram = faInstagram;
  medium = faMedium;
  youtube = faYoutube;
  sentMessage = false;
  lat = 9.0442358;
  lng = 7.5100474;


  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      contactName: ['', [Validators.required, Validators.minLength(3)]],
      contactEmail: ['', Validators.required],
      contactMessage: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]]
    });
  }

  closeModal(event) {
    if (event.path[0].classList.contains('modal-container') || event.path[0].id === 'close') {
      this.sentMessage = false;
    }
  }


  sendMessage() {
    if (this.contactForm.invalid) {
      return;
    }

    const obs = this.contactService.sendMessage(this.contactForm.value);
    obs.subscribe((sent: any) => {
      if (sent.msg) {
        this.sentMessage = true;
      }
    });
  }

}
