// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import the FormsModule



// Angular Material imports for toolbar and sidenav components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MAT_DATE_FORMATS } from "@angular/material/core";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';


// Prome Material imports 
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SplitterModule } from 'primeng/splitter';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating'; // Import the RatingModule from PrimeNG
import { TagModule } from 'primeng/tag';
import { PrimeIcons } from 'primeng/api';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { MealsComponent } from './meals/meals.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MealGeneratorComponent } from './meal-generator/meal-generator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotoService } from './service/photo.service';
import { MealApiService } from './service/meal-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    MealsComponent,
    FavoritesComponent,
    MealGeneratorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  CommonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatInputModule,
  MatTabsModule,
  MatTableModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatOptionModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatProgressBarModule,
  BrowserAnimationsModule,
  GalleriaModule,
  ButtonModule,
  ToastModule,
  HttpClientModule,
  SplitterModule,
  RippleModule,
  MatRippleModule,
  CardModule,
  DataViewModule,
  RatingModule,
  FormsModule,
  TagModule
  ],
  providers: [PhotoService , MealApiService, PrimeIcons],
  bootstrap: [AppComponent ]
})
export class AppModule { }
