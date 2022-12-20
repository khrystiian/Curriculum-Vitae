import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { ContactComponent } from "./components/contact/contact.component";
import { EducationComponent } from "./components/education/education.component";
import { HobbiesComponent } from "./components/hobbies/hobbies.component";
import { IntroComponent } from "./components/intro/intro.component";
import { LanguagesComponent } from "./components/languages/languages.component";
import { PersonalProjectsComponent } from "./components/personal-projects/personal-projects.component";
import { SoftSkillsComponent } from "./components/soft-skills/soft-skills.component";
import { StrengthsComponent } from "./components/strengths/strengths.component";
import { ToolsComponent } from "./components/tools/tools.component";
import { WorkExperienceComponent } from "./components/work-experience/work-experience.component";
import { AvailablePipe } from "./pipes/all-available.pipe";
import { ProfileService } from "./services/profile.service";

@NgModule({
  declarations: [
    AppComponent,
    HobbiesComponent,
    LanguagesComponent,
    SoftSkillsComponent,
    ToolsComponent,
    StrengthsComponent,
    IntroComponent,
    ContactComponent,
    WorkExperienceComponent,
    EducationComponent,
    PersonalProjectsComponent,
    AvailablePipe,
  ],
  imports: [BrowserModule],
  providers: [ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
