import { createContext, Dispatch, SetStateAction } from 'react'
import { CommentProps as CommentData } from '../components/Comment/Comment'

interface CommentsContextType {
  comments: CommentData[]
  setComments: Dispatch<SetStateAction<CommentData[]>>
}

export const CommentsContext = createContext<CommentsContextType>({
  comments: [],
  setComments: () => {}
})
