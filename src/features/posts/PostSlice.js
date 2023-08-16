import { createSlice,nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns"

const initialState = [
    { Id: "1", title: "it my first title", content: "Its my first content" ,date: sub(new Date(), { minutes: 10 }).toISOString(),  reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }}

]

export const PostSlice = createSlice({

    name: "Posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)

            }, prepare(title, content,userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }



            }


        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }

}
)
export const selectAllPost = state => state.posts
export const { postAdded,reactionAdded } = PostSlice.actions
export default PostSlice.reducer;