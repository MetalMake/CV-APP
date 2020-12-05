import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnicalSkillsPageRoutingModule } from './technical-skills-routing.module';

import { TechnicalSkillsPage } from './technical-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnicalSkillsPageRoutingModule
  ],
  declarations: [TechnicalSkillsPage]
})
export class TechnicalSkillsPageModule {}
