import { Injectable } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from "emailjs-com";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(FormData: any): Promise<EmailJSResponseStatus>{
    return emailjs.send('service_dxj8lnj','template_9j61vtr', FormData, 'Maoq18lb7IptQlzkc')
  }
}
