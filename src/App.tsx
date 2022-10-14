import './App.css';
import ProjectList from './projects/ProjectList';
import Clock from './projects/Time';
import DataLoad from './projects/DataLoad';
import data from './projects/data';


interface AppProps {
  name: string
}

function App(props: AppProps) {
  return (
    <div>
      <h1>Projects:</h1>
      <ProjectList projects={data} />
      <DataLoad />
      <Clock />
    </div>

  );
}

export default App;
