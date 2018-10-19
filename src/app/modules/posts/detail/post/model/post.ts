import { User } from "./user";
import { Media } from "../medias/model/media";

export interface Post {
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
    tags : any;
    medias: Media[];
    user: User;
    metas: any;
    links: any;
}
