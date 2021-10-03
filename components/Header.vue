<template>
  <header class="bg-white h-26 flex items-center py-8 px-16 border-b border-gray-200 flex-1 text-gray-400">
    <NuxtLink to="/">
      <img src="/logo.svg">
    </NuxtLink>
    <p class="ml-8 pt-1 pb-1 pl-8 border-l border-gray-200 font-normal">O melhor para você ouvir, sempre.</p>

    <span class="ml-auto capitalize">{{ currentDate }}</span>
  </header>
</template>

<script>
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

export default {
  data () {
    return {
      currentDate: format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR })
    }
  }
}
</script>
