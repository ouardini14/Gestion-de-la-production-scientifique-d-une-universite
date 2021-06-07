import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule}from '@angular/fire';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';


import { NotificationsComponent } from './notifications/notifications.component';
import {
  AgmCoreModule
} from '@agm/core';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchComponent } from './search/search.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { HomeComponent } from './home/home.component';
import { HomeProfComponent } from './home-prof/home-prof.component';
import { HomeDocComponent } from './home-doc/home-doc.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { HttpClient } from '@angular/common/http';
import { CardDocComponent } from './card-doc/card-doc.component';
import { CardProfComponent } from './card-prof/card-prof.component';
import { CardPubComponent } from './card-pub/card-pub.component';


@NgModule({
  imports: [

    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA7-Pmlewh3R63Z7_Cuv6zbFuAwTxLgcxk",
      authDomain: "prodscientifique.firebaseapp.com",
      projectId: "prodscientifique",
      storageBucket: "prodscientifique.appspot.com",
      messagingSenderId: "202798460313",
      appId: "1:202798460313:web:61059503313f7911d53708"
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatButtonModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatDialogModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTabsModule
  ],
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    AdminComponentComponent,
    HomeComponent,
    HomeProfComponent,
    HomeDocComponent,
    AddEquipeComponent,
    SearchComponent,
    CardDocComponent,
    CardProfComponent,
    CardPubComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
