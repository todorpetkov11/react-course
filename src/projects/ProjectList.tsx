import React from 'react';
import Project from './Project';
import ProjectInterface from './ProjectInterface';


interface ProjectListProps {
    projects: ProjectInterface[];
}

function ProjectList({ projects }: ProjectListProps) {

    const handleEdit = (project: ProjectInterface) => {
        console.log(project)
    }

    return (
        <div>
            <div className="row" style={{ display: "flex", padding: '1rem' }} > {
                projects.map(project => (
                    <div key={project.id}>
                        <Project onEdit={handleEdit} project={project}></Project>
                    </div>
                ))
            }
            </div>
        </div>


    );
}

export default ProjectList;