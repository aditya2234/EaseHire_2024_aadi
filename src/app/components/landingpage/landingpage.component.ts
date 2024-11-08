import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LandingpageComponent
  {
    testimonials = [
      {
        name: 'Smith',
        position: 'HR Manager',
        company: 'Google',
        image: 'https://cdn.ndtv.com/tech/images/sundar_pichai.jpg',
        message: 'EaseHire has transformed our hiring process! It\'s an indispensable tool for our HR team.'
      },
      {
        name: 'Abhijit',
        position: 'HR Manager',
        company: 'ABC Corp',
        image: 'https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg',
        message: 'An indispensable tool for our HR team. EaseHire has made our recruitment process so much easier and more efficient.'
      },
      {
        name: 'Payal',
        position: 'Recruiter',
        company: 'XYZ Inc',
        image: 'https://thumbs.dreamstime.com/b/profile-picture-young-indian-woman-renter-headshot-portrait-confident-tenant-pose-modern-own-new-apartment-house-226719004.jpg',
        message: 'EaseHire is a game-changer for our hiring process. We\'ve been able to find top talent quickly and efficiently.'
      }
    ];
  }