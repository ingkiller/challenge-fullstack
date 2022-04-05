export const TOGGLE_TASK = `mutation toggleTask($taskId: Int!) {
  toggleTask(taskId: $taskId) {
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
login(username: $username, password:$password)
}`
