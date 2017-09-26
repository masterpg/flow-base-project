/* @flow */

import axios from 'axios';

export function getPosts(id?: number): Promise<Post[]> {
  let url = 'http://localhost:5001/posts';
  if (id) {
    url = `${url}/${id}`;
  }

  return axios.get(url, {
  }).then((response) => {
    return (response.data: Post[]);
  });
}

export interface Post {
  id: number;
  title: string;
  author: string;
}