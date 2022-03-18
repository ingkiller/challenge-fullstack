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
