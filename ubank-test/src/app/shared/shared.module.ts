import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExploreContainerComponentModule } from './components/explore-container/explore-container.module';


// Pipes


// Directives

// Components
import { ExploreContainerComponent } from './components/explore-container/explore-container.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule
  ],
  declarations: [
  ],
})
export class SharedModule {}
