import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooterContentService {
  private footerData = {
    company: {
      name: "LTIMindtree",
      description: "LTIMindtree is a new kind of technology consulting company. We help businesses transform – from core to experience – to thrive in the marketplace of the future."
    },
    products: [
      { name: "Customers view", url: "/opportunities-view" },
      { name: "add customer", url: "/add-customer-view" },
      { name: "BrandFlow", url: "#!" },
      { name: "Bootstrap Angular", url: "#!" }
    ],
    usefulLinks: [
      { name: "Your Account", url: "#!" },
      { name: "Become an Affiliate", url: "#!" },
      { name: "Shipping Rates", url: "#!" },
      { name: "Help", url: "#!" }
    ],
    contact: {
      address: "New York, NY 10012, US",
      email: "info@example.com",
      phone: "+01 234 567 88",
      fax: "+01 234 567 89"
    },
    socialLinks: [
      { platform: "facebook", url: "#", iconClass: "fab fa-facebook-f" },
      { platform: "twitter", url: "#", iconClass: "fab fa-twitter" },
      { platform: "google", url: "#", iconClass: "fab fa-google" },
      { platform: "instagram", url: "#", iconClass: "fab fa-instagram" },
      { platform: "linkedin", url: "#", iconClass: "fab fa-linkedin" },
      { platform: "github", url: "#", iconClass: "fab fa-github" }
    ]
  };

  getFooterData() {
    return this.footerData;
  }
}
