import { types, getParent } from 'mobx-state-tree';
import axios from 'axios';
import {wpPost} from "../api/api.types";

export const Post = types.model('Post', {
  id: types.number,
  userId: types.number,
  title: types.string,
  body: types.string,
});

export const PostStore = types
  .model('posts', {
    posts: types.array(Post),
  })
  .actions((self: any) => ({
    setPosts(data:wpPost[]) {
      data.forEach((post) => {
        self.posts.put(post);
      });
    },
  }))
  .views((self: any) => ({
    get store() {
      return getParent(self);
    },
  }));
