import {useCallback, useEffect, useState} from "react";
import { useManualQuery, useMutation } from "graphql-hooks";
import Task from "./Task";
import { GET_TODOLIST_BY_USER_ID } from "../queries";
import {TOGGLE_TASK, CREATE_TASK, DELETE_TASK} from "../mutations"
import ServicesList from "../Services/ServicesList";
import {useUserContext} from "../../../context/UserContext";

const TodoList = () => {
    const [tab,setTab] = useState('tab-1');
    const [tasks, setTasks] = useState([]);
    const [loadingTasks, setLoadingTasks] = useState(true);
    const [title, setTitle] = useState("");
    const [error, setError] = useState(null)
    const [fetchTodoList] = useManualQuery(GET_TODOLIST_BY_USER_ID);
    const [toggleTask] = useMutation(TOGGLE_TASK);
    const [createTask] = useMutation(CREATE_TASK);
    const [deleteTask] = useMutation(DELETE_TASK);
    const {userData} = useUserContext()

    useEffect(() => {
        setLoadingTasks(true)
        const getTodoListByUserId = async (userId) =>{
            let result = await fetchTodoList({
                variables:{userId:userId},
                useCache:false
            })
            if(result.error){
                setError("An error occurred while loading the tasks.")
                setTasks([])
                console.error(result.error)
            }else{
                setTasks(result.data.getTodoByUserId)
                setError(null)
            }
            setLoadingTasks(false)
        }
        if(userData && userData.id)
        getTodoListByUserId(userData.id)
    },[userData,fetchTodoList])

    const onTabClick = useCallback(tab =>{
        tab.preventDefault()
        tab.stopPropagation()
        setTab(tab.target.id)
    },[])

    const getTaskCompleted = useCallback(() => {
        return tasks.filter(task => task.completed === true)
    },[tasks])

    const getTaskActive = useCallback(() => {
        return tasks.filter(task => task.completed === false)
    },[tasks])

    const toggleTaskHandler = useCallback(async (taskId) => {
        let result = await toggleTask({variables:{taskId: taskId,userId:userData.id}})
        if(result.error){
            setError("An error occurred while trying to change the status of the task.")
            console.error(result.error)
        }else{
            setError(null)
            setTasks(current =>{
                return [...current].map(t => t.id === result.data.toggleTask.id?result.data.toggleTask: t)
            })
        }
    },[toggleTask,userData])

    const onCreateNewTask = useCallback(async (evt) => {
        evt.preventDefault()
        let result = await createTask({variables:{title:title}});
        if(result.error){
            setError("An error occurred while creating a new task.")
            console.error(result.error)
        }else{
            setError(null)
            setTasks(current =>{
                let temp = [...current]
                temp.push(result.data.createTask)
                return temp
            })
            setTitle("")
        }
    },[title,createTask])

    const onDeleteTaskById = useCallback(async (taskId) => {
        let result = await deleteTask({variables:{taskId:taskId,userId:id}})
        if(result.error){
            setError("An error occurred while trying to delete the task.")
            console.error(result.error)
        }else {
            setError(null)
            setTasks(current => [...current].filter(task => task.id !== taskId))
        }
    },[deleteTask])


    return (<section id="pricing" className="pricing">
        <div className="container">
            <div className="row justify-content-start">
                <div className="col-md-3">
                    <ServicesList/>
                </div>
                <div className="col-md-6">
                    {
                        loadingTasks && <div className="row justify-content-center">
                            <div className="col-1"><div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span></div>
                            </div>
                            <div className="col-7 text-start">
                                <h4>Loading Task...</h4>
                            </div>
                        </div>
                    }
                    {
                        error &&  <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    }
                    {
                        !loadingTasks && <> <div className="container">
                            <div className="section-title">
                                <h3><span>Todo List</span></h3>
                            </div>
                        </div>

                            <form className="d-flex justify-content-center align-items-center mb-4">
                                <div className="form-outline flex-fill">
                                    <input type="text" id="form2" className="form-control" placeholder="New task..." value={title} onChange={e => setTitle(e.target.value)}/>
                                </div>
                                <button type="button" className="btn btn-info ms-2" onClick={onCreateNewTask}>Add</button>
                            </form>
                            <ul className="nav nav-tabs mb-4" id="ex1" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className={"nav-link " +( tab === 'tab-1' ? "active": "")} id="tab-1"
                                       href="#" onClick={onTabClick} role="tab"
                                    >All</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={"nav-link " +( tab === 'tab-2' ? "active": "")} id="tab-2"
                                       href="#" onClick={onTabClick} role="tab"
                                    >Active</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={"nav-link " +( tab === 'tab-3' ? "active": "")} id="tab-3"
                                       href="#" onClick={onTabClick} role="tab"
                                    >Completed</a>
                                </li>
                            </ul>
                            <div className="box maxHeightScrollTodo px-2"  style={{boxShadow:"none"}}>
                                <div className="tab-content" id="ex1-content">
                                    {
                                        tab === "tab-1" && <div className={"tab-pane fade " +(tab === 'tab-1'?"show active":"")} id="tab-1" role="tabpanel"
                                                                aria-labelledby="tab-1">
                                            <ul className="list-group mb-0">
                                                {
                                                    tasks.map((task,index)=>(
                                                        <Task key={index}
                                                              {...task}
                                                              onToggle={toggleTaskHandler}
                                                              onDelete={onDeleteTaskById}
                                                        />))
                                                }
                                            </ul>
                                        </div>
                                    }
                                    {
                                        tab === "tab-2" && <div className={"tab-pane fade " +(tab === 'tab-2'?"show active":"")} id="tab-2" role="tabpanel"
                                                                aria-labelledby="tab-2">
                                            <ul className="list-group mb-0">
                                                {
                                                    getTaskActive().map((task,index)=>(
                                                        <Task key={index}
                                                              {...task}
                                                              onToggle={toggleTaskHandler}
                                                              onDelete={onDeleteTaskById}
                                                        />
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    }
                                    {
                                        tab === "tab-3" && <div className={"tab-pane fade " +(tab === 'tab-3'?"show active":"")} id="tab-3" role="tabpanel"
                                                                aria-labelledby="tab-3">
                                            <ul className="list-group mb-0">
                                                {
                                                    getTaskCompleted().map((task,index)=>(
                                                        <Task key={index}
                                                              {...task}
                                                              onToggle={toggleTaskHandler}
                                                              onDelete={onDeleteTaskById}
                                                        />
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>

                        </>
                    }
                </div>
            </div>
        </div>
    </section>
    )
}
export default TodoList
