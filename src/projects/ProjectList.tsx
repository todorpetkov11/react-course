import { useState } from 'react';
import Project from './Project';
import ProjectForm from './ProjectForm';
import ProjectInterface from './ProjectInterface';


interface ProjectListProps {
    projects: ProjectInterface[];
    onSave: (project: ProjectInterface) => void;
    onUpdate: (project: ProjectInterface) => void;
    onAdd: (project: ProjectInterface) => void;
    onRemove: (project: ProjectInterface) => void;
}

function ProjectList({ projects, onSave, onUpdate, onAdd, onRemove }: ProjectListProps) {

    const [projectBeingEdited, setProjectBeingEdited] = useState({})

    const handleEdit = (project: ProjectInterface) => {
        setProjectBeingEdited(project)
    }

    const onCancel = () => {
        setProjectBeingEdited({})
    }

    return (
        <div>
            <div className="row" style={{ display: "flex", gap: '2rem', padding: '1rem' }} > {
                projects.map(project => (
                    <div key={project.id}>
                        {project === projectBeingEdited ? (<ProjectForm project={project} onSave={onSave} onCancel={onCancel} />) :
                            (<Project onEdit={handleEdit} project={project}></Project>)}
                    </div>
                ))
            }
            </div>
        </div>


    );
}

export default ProjectList;