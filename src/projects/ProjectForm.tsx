import { SyntheticEvent, useState } from "react";
import ProjectInterface from "./ProjectInterface";


interface ProjectFormProps {
    onCancel: () => void;
    project: ProjectInterface;
    onSave: (project: ProjectInterface) => void;
}

function ID() {
    return Number(Math.random().toString(36).substr(2, 9));
}

function ProjectForm({ onCancel, onSave }: ProjectFormProps) {



    const [itemEdited, setItemEdited] = useState<ProjectInterface>();
    const [inputValue, setInputValue] = useState(itemEdited!.name || "");

    const handleChange = (event: any) => {
        event.preventDefault();
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        const submittedItem = {
            id: itemEdited ? itemEdited.id : ID(),
            description: inputValue[1],
            name: inputValue[0],
        };
        console.log(submittedItem)

        onSave(submittedItem);
        setInputValue("");
    };

    const handleCancel = (event: any) => {
        event.preventDefault();
        onCancel();
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input value={inputValue} onChange={handleChange} />
            <button>Save</button>
            <button onClick={handleCancel}>Cancel</button>

        </form>
    );
}

export default ProjectForm;