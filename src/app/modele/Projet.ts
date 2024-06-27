import { Tag } from "./Tag";


export interface Projet{
    id:number;
    nom:string;
    resume:string;
    description:string;
    projectLink:string;
    photo: string[];
    tags: Tag[];
}