import { Component, OnInit } from "@angular/core";
import { Contact } from "./components/contact/models/contact";
import { ContactService } from "./services/contact/contact.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  public contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getAll();
  }
}
