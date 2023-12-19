import { injectContentFiles } from "@analogjs/content";
import { AsyncPipe, NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { BlogPost } from "src/app/models/post";


@Component({
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe],
  template: `
  <h2>Posts</h2>
  <ul>
      <li *ngFor="let post of post$">
      <a [routerLink]="['/blog', post.slug]">{{post.attributes.title}}</a>
    </li>

  </ul>
  `
})

export default class IndexPage{
  post$ = injectContentFiles<BlogPost>();
}
