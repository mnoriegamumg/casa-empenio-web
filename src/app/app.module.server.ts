import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    AppModule, 
    ServerModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [provideServerRouting(serverRoutes)],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
