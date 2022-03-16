export const POSTS_QUERY = `query posts(){
posts(){
  id,
  title,
  body,
  numberOfComment,
  user {
    name
    username
    website
  }
}
}`


export const GET_COMMENTS_BY_POST_ID = `query ($postId: Int!){
getCommentByPostId(postId: $postId){
id,
postId,
name,
email,
body
}}`
