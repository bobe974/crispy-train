import { Tag } from "./tag";
export interface Projet{
    id:number;
    nom:string;
    resume:string;
    description:string;
    projectLink:string;
    photo: string[];
    tags: Tag[];
}