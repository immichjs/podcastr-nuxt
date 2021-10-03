export default {
  async getEpisodes ({ commit }) {
    const data = await this.$axios.$get('/episodes', {
      params: {
        _limit: 12,
        _sort: 'published_at',
        _order: 'desc'
      }
    })
    commit('SET_EPISODES', data)
  }
}
