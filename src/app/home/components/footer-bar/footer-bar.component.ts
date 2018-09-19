import { Component, OnInit } from '@angular/core';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent implements OnInit {
  whatsapp = faWhatsapp;
  telegram = faTelegram;
  envelope = faEnvelopeOpen;
  phone = faPhone;

  iniMemView: boolean;

  constructor () {}

  ngOnInit() {
  }

}
