import { Media } from "./model/media";

export class Picture extends Media {
  id: number;
  thumbs: string;
  src: string;
  stream: string;
}
