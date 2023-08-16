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
.shadow1{
  box-shadow: 0px 4px 40px rgb(92, 91, 91, 0.06);
}
.shadow2{
  box-shadow: 0px 14px 20px rgb(26, 26, 26, 0.15);
}
.btn{
  border-radius: 0 !important;
  width: 181px !important;
  height: 64px !important;
  text-transform: none;
  padding: 20px 30px !important;

}
.inter{
font-family: 'Inter' !important;
}
.mb1{
  margin-bottom: 1rem !important
}
.mb3{
  margin-bottom: 3rem !important;
}

h1{
  font-family: 'Merriweather';
  font-size: 64px !important;
  font-weight: bold;
}
h2{
  font-family: 'Merriweather';
  font-size: 42px !important;
  font-weight: bold;
}
h3{
  font-size: 28px !important;
  font-weight: bold;
}
.p1{
  font-size: 30px !important;
  font-weight: bold;
}
.p2{
  font-size: 24px !important;
  font-weight: 600;
}
.p3{
  font-size: 20px !important;
  font-weight: bold;
  font-family: 'Merriweather';
}
.p4{
  font-size: 16px !important;
  font-weight: 600;
}
p{
  font-size: 16px !important; 
  margin-bottom: 0 !important;
}
@media (max-width: 960px){
  h1{font-size: 32px !important;}
  h2{
    font-size: 32px !important;
  }
}


</style>
