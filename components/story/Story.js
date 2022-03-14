import {useQuery} from "graphql-hooks";
const STORIES_QUERY = `query stories(){
stories(){
  id,
  title,by,
  descendants ,
  kids ,
  score ,
  time ,
  type,
  url
}
}`

const Story = (props) =>{
    const { loading, error, data } = useQuery(STORIES_QUERY)
    return <div>
        {
            loading?<h1>Loading Stories...</h1>:<h1>Stories loaded</h1>
        }
        {
            data && data.stories && data.stories.map(story =>(<div><p>{story.title}</p></div>))
        }
    </div>
}

export default Story
