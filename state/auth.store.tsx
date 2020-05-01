import { types, getParent, flow } from 'mobx-state-tree';
import axios from 'axios';

export const AuthStore = types
  .model('auth', {
    isAuthenticated: false,
    token: types.optional(types.string, ''),
    username: types.optional(types.string, ''),
  })
  .actions((self: any) => ({
    authenticate(data) {
      self.isAuthenticated = true;
      self.token = data.token;
      self.username = data.me.username;
    },
    signout() {
      self.isAuthenticated = false;
      self.token = '';
      self.username = '';
    },
  }))
  .views((self: any) => ({
    get store() {
      return getParent(self);
    },
  }));
