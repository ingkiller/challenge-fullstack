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

export const USERS_QUERY = `query (){
users(){
id,name,username,email
}
}`
/*
,address,phone,website,company
 */

export const GET_POST_BY_USER_ID = `query getPostsByUserId($userId:Int!, $start:Int!, $long:Int!){
getPostsByUserId(userId: $userId,start: $start,long: $long){
id,title,
  body,
  numberOfComment,
  createdDate,
  user {
    name,
    username,
    website,
    email
  }
}
}`


export const POSTS_QUERY_BY_RANGE = `query posts($start: Int! , $long: Int!){
getPostByRange(start: $start , long: $long){
  id,
  title,
  body,
  numberOfComment,
  createdDate
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

export const GET_TODOLIST_BY_USER_ID = `query ($userId: Int!){
getTodoByUserId(userId: $userId){
id,
userId,
title,
completed
}}`

export const GET_ALBUMS_BY_USER_ID = `query ($userId: Int!){
getAlbumsByUserId(userId: $userId){
id,
title,
    numberOfPhotos
}}`

export const GET_PHOTOS_BY_ALBUM_ID = `query ($albumId: Int!){
getPhotosByAlbumId(albumId: $albumId){
id,title,Url,thumbnailUrl
}}`

export const GET_USERDATA_BY_TOKEN = `query ($token: String!){
getUserDataByUsername(tokenStr: $token){
id,name,username
}
}`
