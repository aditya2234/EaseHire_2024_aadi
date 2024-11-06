import { Component } from '@angular/core';
import { FooterContentService } from '../../services/footer-content.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerData: any;

  constructor(private footerService: FooterContentService) { }

  ngOnInit(): void {
    this.footerData = this.footerService.getFooterData();
  }
}
