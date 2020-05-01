import { useMemo } from 'react';
import { types, applySnapshot } from 'mobx-state-tree';
import { AuthStore } from './auth.store';
import { PostStore } from './posts.store';

let store;
export const Store = types
  .model('root', {
    postStore: types.optional(PostStore, {
      posts: [],
    }),
    authStore: types.optional(AuthStore, {}),
  })
  .actions((self: any) => ({
    afterCreate() {
      // self.postStore.loadPosts()
    },
  }))
  .views((self: any) => ({
    // get isLoading() {
    //   return self.bookStore.isLoading
    // },
    // get posts() {
    //   return self.postStore.posts
    // }
  }));

// @inject('store')
// @observer
// class SampleComponent
/*
 componentDidMount() {
    this.props.store.start()
  } */

// use with client side rendering for static export


export function initializeStore(snapshot = null) {
  const _store = store ?? Store.create({});

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return store;
}

export function useStore(initialState) {
  const _store = useMemo(() => initializeStore(initialState), [initialState]);
  return _store;
}
