<template>
  <v-app  >

        <Header />
        <Nuxt class="noOverflow" />
      
  </v-app>
</template>

<script>
export default {
  
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Merriweather:wght@300&display=swap');

.noOverflow{
  overflow-x:hidden;
}

h1{
  font-family: 'Merriweather';
}
p{
    margin-bottom: 0 !important;
}


</style>
