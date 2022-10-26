import './App.css';
import ProjectList from './projects/ProjectList';
import Clock from './projects/Time';
import DataLoad from './projects/DataLoad';
import data from './projects/data';
import ProjectInterface from './projects/ProjectInterface';
import ExampleForm from './forms/ExampleFrom';
import { useEffect, useState } from 'react';


function App() {

  const [items, setItems] = useState<Array<ProjectInterface>>([])

  useEffect(() => setItems(data), [])

  const addProject = (item: ProjectInterface) => {
    setItems([...items, item])
    console.log(items)
  }

  const saveProject = (project: ProjectInterface) => {
    items.push(project)
    
  }

  const updateProject = (project: ProjectInterface) => {
    let updatedProjects = items.map((item) => {
      return item.id === project.id ?
        Object.assign({}, item, project)
        : item;
    });
    return setItems(updatedProjects)
  }

  const removeProject = (project: ProjectInterface) => {
    const filteredItems = items.filter((item) => item.id != project.id);
    setItems(filteredItems)
  }

  return (
    <div>
      <h1>Projects:</h1>
      <ProjectList onAdd={saveProject} onRemove={removeProject} onSave={addProject} onUpdate={updateProject} projects={items} />
    </div>

  );
}

export default App;
