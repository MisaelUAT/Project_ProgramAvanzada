import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculadoraComponent } from './content/calculadora/calculadora.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { PortafolioComponent } from './content/portafolio/portafolio.component';
import { AngularFireModule } from '@angular/fire/compat';

const appRoutes: Routes = [
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent,
    CalculadoraComponent,
    InicioComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBeoeBWBGmgTV_zyYhUEP5iDhcPzgDiNN4",
      authDomain: "techmex-57.firebaseapp.com",
      projectId: "techmex-57",
      storageBucket: "techmex-57.firebasestorage.app",
      messagingSenderId: "703863408934",
      appId: "1:703863408934:web:e5c4587fd60c83c6c7d9e7",
      measurementId: "G-JTMS1Z6Y0Y"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
