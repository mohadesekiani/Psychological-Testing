import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ABDataService } from './core/services/data/abstract-data.service';
import { DataService } from './core/services/data/data.service';
import { FakeDataService } from './core/services/data/fake-data.service';
import { ABStorageService } from './core/services/storage/ab-storage.service';
import { SecureStorageService } from './core/services/storage/secure-storage.service';
import { StorageService } from './core/services/storage/storage.service';
import { SharedModule } from './shared/shared.module';

//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//import { LoadingComponent } from './loading/loading.component';
//import { NotFoundComponent } from './not-found/not-found.component';
// import { LayoutModule } from './layout/layout.module';
// import { AuthModule } from './auth/auth.module';
//import { PsychologicalTestComponent } from './psychological-test/psychological-test.component';
// import { AuthComponent } from './auth/auth.component';
// import { LoginComponent } from './auth/components/login/login.component';
// import { SighnupComponent } from './auth/components/sighnup/sighnup.component';
// import { FormlyModule } from '@ngx-formly/core';
//import { ReactiveFormsModule } from '@angular/forms';
// import { FormlyMaterialModule } from '@ngx-formly/material';

//// change this variable to env.production.
let production = false;

@NgModule({
  declarations: [
    AppComponent,
    //LoadingComponent,
    //NotFoundComponent,
    //PsychologicalTestComponent,
    // AuthComponent,
    // LoginComponent,
    // SighnupComponent,
  ],
  imports: [
    // MatProgressSpinnerModule,
    //AuthModule,
    //LayoutModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    //MaterialModule,
    //FormlyModule.forRoot(),
    //ReactiveFormsModule,
    // FormlyMaterialModule
  ],
  providers: [
    {
      provide: ABStorageService,
      useClass: production ? SecureStorageService : StorageService,
    },
    {
      provide: ABDataService,
      useClass: production ? DataService : FakeDataService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
