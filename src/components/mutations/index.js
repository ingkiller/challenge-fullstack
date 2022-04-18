export const TOGGLE_TASK = `mutation toggleTask($taskId: Int!,$userId: Int!) {
  toggleTask(taskId: $taskId, userId: $userId) {
    id,
    userId,
    title,
    completed
  }
}`

export const CREATE_TASK = `mutation createTask($title: String!){
createTask(title: $title){
    id,
    userId,
    title,
    completed
}
}`

export const DELETE_TASK = `mutation deleteTask($taskId: Int!){
deleteTask(taskId: $taskId)
}`

export const LOGIN = `mutation login($username: String!, $password: String!){
login(username: $username, password:$password){
token,user{id}
}
}`
