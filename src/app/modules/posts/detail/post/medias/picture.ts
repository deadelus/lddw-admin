import { Media } from "./model/media";

export class Picture extends Media {
  id: number;
  thumbs: string;
  src: string;
  srcset: string;
  with: string;
  size: string;
  onload: string;
}
