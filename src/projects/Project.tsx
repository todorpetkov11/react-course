import ProjectForm from "./ProjectForm";
import ProjectInterface from "./ProjectInterface";

interface ProjectProps {
    project: ProjectInterface,
    onEdit: (project: ProjectInterface) => void;
}

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}


function Project(props: ProjectProps) {

    const handleEditClick = (projectEdited: ProjectInterface) => {
        onEdit(projectEdited)
    };
    const { project, onEdit } = props;
    return (
        <div>
            <div className="card" style={{
                backgroundColor: "green", padding: "2rem", color: 'white',
                width: '150px', height: 'auto'
            }} >
                <section className="section dark">
                    <h3 className="strong">
                        <strong>{project.name}</strong>
                    </h3>
                    <p>{formatDescription(project.description)}</p>
                </section>
                <button className="bordered" onClick={() => {
                    handleEditClick(project)
                }}>
                    <span className="icon-edit "></span>
                    Edit
                </button>
            </div>
            <ProjectForm />
        </div>


    );
}

export default Project;