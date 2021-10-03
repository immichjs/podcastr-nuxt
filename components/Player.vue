<template>
  <div class="py-12 px-16 w-104 h-screen bg-violet-500 text-white flex flex-col justify-between items-center">
      <header class="flex items-center gap-4">
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong class="font-semibold">Tocando agora</strong>
      </header>

      <div class="text-center" v-if="episode.id">
        <img :src="episode.thumbnail" :alt="episode.title" class="rounded-3xl object-cover">
        <strong class="block mt-8 font-semibold leading-7">{{ episode.title }}</strong>
        <span class="block mt-4 opacity-60 leading-6">{{ episode.members }}</span>
      </div>
      <div class="w-full h-80 border-2 border-opacity-60 border-dashed border-purple-300 rounded-3xl bg-gradient-to-br from-purple-500 to-transparent p-16 text-center flex justify-center items-center" v-else>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer :class="!episode ? 'opacity-50' : ''">
        <div>
          <button 
            type="button"
            :disabled="!episode || episodes.length === 1"
          >
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior"/>
          </button>
          <button type="button">
            <img src="/pause.svg" alt="Tocar"/>
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="Tocar próxima"/>
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </div>
      </footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['episode', 'episodes'])
  }
}
</script>
