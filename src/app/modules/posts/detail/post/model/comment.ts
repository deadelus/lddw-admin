import { Media } from "../medias/model/media";
import { User } from "./user";

export class Comment extends Media {
  id: number;
  body: string;
  user: User;
}
