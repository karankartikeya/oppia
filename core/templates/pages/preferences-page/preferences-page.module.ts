// Copyright 2019 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Module for the preferences page.
 */

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from 'services/request-interceptor.service';
import { SharedComponentsModule } from 'components/shared-component.module';
import { OppiaAngularRootComponent } from
  'components/oppia-angular-root.component';
import { platformFeatureInitFactory, PlatformFeatureService } from
  'services/platform-feature.service';
import { PreferencesPageComponent } from './preferences-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { PreferredSiteLanguageSelectorComponent } from './form-fields/preferred-language-selector.component';
import { PreferredLanguagesComponent } from './form-fields/preferred-languages.component';
import { SubjectInterestsComponent } from './form-fields/subject-interests.component';
import { EditProfilePictureModalComponent } from './modal-templates/edit-profile-picture-modal.component';
import { PreferencesPageRootComponent } from './preferences-page-root.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbPopoverModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  declarations: [
    EditProfilePictureModalComponent,
    OppiaAngularRootComponent,
    PreferencesPageComponent,
    PreferencesPageRootComponent,
    PreferredLanguagesComponent,
    PreferredSiteLanguageSelectorComponent,
    SubjectInterestsComponent
  ],
  entryComponents: [
    EditProfilePictureModalComponent,
    OppiaAngularRootComponent,
    PreferencesPageComponent,
    PreferencesPageRootComponent,
    PreferredLanguagesComponent,
    PreferredSiteLanguageSelectorComponent,
    SubjectInterestsComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: platformFeatureInitFactory,
      deps: [PlatformFeatureService],
      multi: true
    }
  ],
  bootstrap: [PreferencesPageRootComponent]
})
export class PreferencesPageModule {}
