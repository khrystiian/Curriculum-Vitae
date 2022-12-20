import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { HobbiesComponent } from "./components/hobbies/hobbies.component";
import { ProfileService } from "./services/profile.service";
import { LanguagesComponent } from './components/languages/languages.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { ToolsComponent } from './components/tools/tools.component';
import { StrengthsComponent } from './components/strengths/strengths.component';
import { IntroComponent } from './components/intro/intro.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [AppComponent, HobbiesComponent, LanguagesComponent, SoftSkillsComponent, ToolsComponent, StrengthsComponent, IntroComponent, ContactComponent],
  imports: [BrowserModule],
  providers: [ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
