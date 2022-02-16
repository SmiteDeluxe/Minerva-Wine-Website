import { groq } from "@nuxtjs/sanity";
import * as defTypes from "./defaultTypes"

export async function getArticleBySlug(slug: String, sanity: any ):  Promise<defTypes.Article> {
    const query = groq`*[_type == "post" && slug.current == "${slug}"]`;
    const currentArticle: defTypes.Article = (
      (await sanity.fetch(query)) as defTypes.Article[]
    )[0];
    return currentArticle;
}

export async function getBaseArticleInfo(sanity: any ):  Promise<defTypes.Article[]> {
    const query = groq`*[_type == "post"]{_createdAt, author, categories, slug, title }`;
    const articles: defTypes.Article[] = await sanity.fetch(query) as defTypes.Article[];
    return articles;
}