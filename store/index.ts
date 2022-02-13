import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { getAccessorType } from 'typed-vuex'
import * as defTypes from '../assets/ts/default-types'

export const state = () => ({
  articles: [] as defTypes.Article[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  articleBySlug: (state) => (slug: String) => state.articles.find(el => el.slug.current === slug),
}

export const mutations: MutationTree<RootState> = {
  SET_ARTICLES: (state, newArticles: defTypes.Article[]) => (state.articles = newArticles),
}

export const actions: ActionTree<RootState, RootState> = {
}

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
  },
})