import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';
import { Router } from '@angular/router';
import { Contacts } from './contacts';

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
  contacts: Contacts[] = [];
  @ViewChild('modalSent') modalSent: ElementRef<any>;


  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) { }
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      subject: ['Member contact head Office'],
      message: ['', [Validators.required, Validators.minLength(5)]],
      tags: ['Messgae']
    });

    this.contactService.contacts().subscribe((res: Contacts[]) => {
      if (res.length >= 1) {
        this.contacts = res;
      }
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
        this.contactForm.reset();
        this.sentMessage = true;
    });
  }

}
