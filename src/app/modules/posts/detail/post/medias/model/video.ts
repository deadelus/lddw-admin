import { Media } from "./media";

export class Picture extends Media {
  id: number;
  thumbs: string;
  src: string;
  stream: string;
}
