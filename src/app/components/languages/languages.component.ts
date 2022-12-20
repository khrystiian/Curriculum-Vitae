import { Component, OnInit } from "@angular/core";
import { LanguageService } from "src/app/services/languages/language.service";
import { Language } from "./models/language";

@Component({
  selector: "app-languages",
  templateUrl: "./languages.component.html",
  styleUrls: ["./languages.component.scss"],
})
export class LanguagesComponent implements OnInit {
  public languages: Language[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languages = this.languageService.getLanguages();
  }
}
