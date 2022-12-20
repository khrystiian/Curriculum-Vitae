import { Injectable } from "@angular/core";
import { Contact } from "src/app/components/contact/models/contact";
import { default as JSONContacts } from "../../../assets/json-data/contact.json";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  public getContactDetails(): Contact[] {
    const result: Contact[] = [];

    const list = JSONContacts.contacts;
    Array.from(list).forEach((contact: any) =>
      result.push(new Contact(contact.label, contact.ref, contact.hasLink))
    );
    return result;
  }
}
