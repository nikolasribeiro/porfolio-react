import { listProjects } from "../data/ListProjects";

export const getProjectById = (number) => {
    return listProjects.find(project => project.number === number);
}