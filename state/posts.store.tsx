import {types, getParent,} from "mobx-state-tree"
import axios from 'axios';

export const Post = types.model("Post", {
    id: types.number,
    userId: types.number,
    title: types.string,
    body: types.string
})

export const PostStore = types
    .model("posts", {
        isLoading: false,
        posts: types.array(Post)
    })
    .actions((self: any) => ({
        markLoading(loading) {
            self.isLoading = loading
        },
        updatePosts(data) {
            data.forEach(post => {
                if (typeof post.userId === 'string') return;
                self.posts.put(post)
            })
        },
    }))
    .views((self: any) => ({
        get store() {
            return getParent(self)
        }
    }));
