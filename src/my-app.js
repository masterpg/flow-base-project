/* @flow */

import '@polymer/polymer/polymer';
import {Element as PolymerElement} from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import './shared-styles';
import * as api from './api';

export class MyApp extends PolymerElement {

  static get template() {
    return `
      <style include="shared-styles">
        :host {
          display: block;
          margin: 10px;
        }
        
        paper-button {
          font-size: 14px;
          color: var(--paper-indigo-500);
          --paper-button: {
            margin: 0;
            padding: 0;
          }
        }
        
        .posts {
          border-collapse: collapse; 
        }
        
        .posts thead th {
          text-align: left;
          font-weight: normal;
        }
        
        .posts thead th.id {
          width: 40px;
        }
        
        .posts thead th.title {
          width: 150px;
        }
        
        .posts thead th.author {
          width: 150px;
        }
      </style>

      <div class="main">
        <paper-button on-click="__buttonOnClick">Load posts</paper-button>
        <table class="posts">
          <thead>
            <th class="id">ID</th>
            <th class="title">Title</th>
            <th class="author">Author</th>
          </thead>
          <tbody>
            <template is="dom-repeat" items="[[__posts]]">
              <tr>
                <td>[[item.id]]</td>
                <td>[[item.title]]</td>
                <td>[[item.author]]</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    `;
  }

  constructor() {
    super();
  }

  __posts: api.Post[];

  __buttonOnClick(e: mixed) {
    api.getPosts().then((posts) => {
      this.__posts = posts;
      posts.forEach((post, index, posts) => {
        console.log('id:', post.id, ', title:', post.title, ', author:', post.author);
      });
    });
  }
}

customElements.define('my-app', MyApp);