<template>
  <div class="h-100vh-6.6rem px-16 overflow-y-auto">
    <section>
      <h2 class="mt-12 mb-6 text-2xl font-bold text-trueGray-700">Últimos lançamentos</h2>

      <ul class="grid grid-cols-2 gap-4">
        <li v-for="episode in latestEpisodes" :key="episode.id" class="bg-white border border-gray-200 p-4 rounded-3xl flex items-center gap-4 relative">
          <img :src="episode.thumbnail" class="w-24 h-24 rounded-2xl object-cover" :alt="episode.title">

          <div class="max-w-7/10 text-trueGray-600">
            <NuxtLink :to="`episodes/${episode.id}`" class="font-bold leading-6 text-base hover:underline">{{ episode.title }}</NuxtLink>
            <p class="whitespace-nowrap overflow-hidden text-truegray overflow-ellipsis max-w-7/10 mt-2 text-sm">{{ episode.members }}</p>
            <span class="inline-block mt-2 text-xs">{{ episode.publishedAt }}</span>
            <span class="inline-block mt-2 text-xs ml-2 pl-2 relative">{{ episode.durationAsString }}</span>
          </div>

          <button type="button" class="absolute right-4 bottom-4 w-10 h-10 bg-white border border-gray-200 rounded-xl text-none transition duration-200 hover:bg-gray-100 flex justify-center items-center">
            <img src="/play-green.svg" alt="Tocar episódio" class="w-6 h-6"/>
          </button>
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="mt-12 mb-6 text-2xl font-bold text-trueGray-700">Todos episódios</h2>

      <table class="w-full">
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(episode) in allEpisodes" :key="episode.id">
              <td>
                <img :src="episode.thumbnail" :alt="episode.title" class="object-cover w-16 h-10 rounded-lg">
              </td>
              <td>
                <NuxtLink :to="`/episodes/${episode.id}`" class="text-trueGray-600 font-bold leading-6 text-base hover:underline">{{ episode.title }}</NuxtLink>
              </td>
              <td>{{ episode.members }}</td>
              <td class=" w-24">{{ episode.publishedAt }}</td>
              <td>{{ episode.durationAsString }}</td>
              <td>
                <button type="button" class="flex justify-center items-center w-10 h-10 bg-white border border-gray-200 rounded-xl text-none transition duration-200 hover:bg-gray-100" @click="setEpisode(episode)">
                  <img src="/play-green.svg" alt="Tocar episódio" class="w-6 h-6"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { convertDurationToTimeString } from '~/util/convertDurationToTimeString'

export default {
  computed: {
    ...mapGetters({
      data: 'episodes'
    }),
    episodes () {
      const episodes = this.data.map(episode => {
        return {
          id: episode.id,
          title: episode.title,
          thumbnail: episode.thumbnail,
          members: episode.members,
          publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
          duration: Number(episode.file.duration),
          durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
          url: episode.file.url
        }
      })
      return episodes
    },
    latestEpisodes () {
      return this.episodes.slice(0, 2)
    },
    allEpisodes() {
      return this.episodes.slice(2, this.episodes.length)
    }
  },
  methods: {
    ...mapActions(['getEpisodes']),
    ...mapMutations({ setEpisode: 'SET_EPISODE' })
  },
  created () {
    this.getEpisodes()
  }
}
</script>

<style scoped lang="postcss">
  th, td {
    @apply py-3 px-4 border-b border-trueGray-200;
  }

  th {
    @apply text-trueGray-400 uppercase text-xs font-medium font-sans text-left
  }

  td {
    @apply text-sm text-trueGray-400 font-medium;
  }
</style>
