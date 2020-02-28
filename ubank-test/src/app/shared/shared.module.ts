import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExploreContainerComponentModule } from './components/explore-container/explore-container.module';


// Pipes


// Directives

// Components
import { ExploreContainerComponent } from './components/explore-container/explore-container.component';
import { NoRegisterYetComponent } from './components/no-register-yet/no-register-yet.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    NoRegisterYetComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    NoRegisterYetComponent
  ],
  
})
export class SharedModule {}
