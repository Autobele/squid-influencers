import { AxiosResponse } from "axios";
import { apiPostIntance } from "./api/post.instance";
import { Post } from "../interfaces";

const BASE_URL = ''

export default class PostService {
  static async get(): Promise<AxiosResponse<Post[]>>{
    return apiPostIntance.get(BASE_URL)
  }
}