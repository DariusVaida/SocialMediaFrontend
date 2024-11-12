import {Image} from "./image.type";

export type Post = {
  id: number | null | undefined,
  name: string | null | undefined,
  description: string | null | undefined,
  image: Image | null | undefined
}
