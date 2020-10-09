
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Comps
import { PostsComponent } from './posts.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';

import { MaterialModule } from '../../shared/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PostsComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ]})

export class PostsModule {}
