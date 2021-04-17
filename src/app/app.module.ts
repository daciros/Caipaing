import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintComponent } from './components/admin/print/print.component';
import { UsersComponent } from './components/admin/users/users.component';
import { CotizadorComponent } from './components/admin/cotizador/cotizador.component';
import { ProductsComponent } from './components/user/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/user/services/services.component';
import { ServicesdevComponent } from './components/admin/servicesdev/servicesdev.component';
import { ProductsdevComponent } from './components/admin/productsdev/productsdev.component';
import { MDBBootstrapModule, MDBRootModule, MdbValidateDirective} from 'angular-bootstrap-md';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PrintComponent,
    UsersComponent,
    CotizadorComponent,
    ProductsComponent,
    LoginComponent,
    ServicesComponent,
    ServicesdevComponent,
    ProductsdevComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBRootModule,
    MDBBootstrapModule,
    MdbValidateDirective,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
