import { ICategory } from "./../../interfaces/category.interface";
import { IBlogs } from "@/src/interfaces/blogs.interface";
export interface ISideBarProps {
  latestBlogs: IBlogs[];
  categories: ICategory[];
}
