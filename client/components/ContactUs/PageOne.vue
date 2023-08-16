<template lang="">
    <div class='main'>
        <div class='header'>
            <h2>The art of creative thinking</h2>
            <p>Read more about us. Our vission, mission, success and many other you might love</p>
            <p class='p4'> Home > Blog > the art of creative thinking</p>
        </div>
        <div class='content d-block d-md-flex'>
            <div class='content-top d-block d-md-flex'>

                <div class='card shadow1'>
                    <img class='mb1' src='@/assets/location.png' />
                    <p class='mb1'>2113 Thornridge Cir. Syracuse,</p>
                    <p class='mb1'>California 208434</p>
                </div>
                <div class='card shadow1'>
                    <img class='mb1' src='@/assets/phone-icon.png' />
                    <p class='mb1'>+088 (246) 641-27-10 </p>
                    <p class='mb1'>+088 (246) 641-27-10  </p>
                </div>
                <div class='card shadow1'>
                    <img class='mb1' src='@/assets/emailicon.png' />
                    <p class='mb1'>designhawk@gmail.com  </p>
                    <p class='mb1'>hello@hmmahi.design</p>
                </div>
            </div>


            <div class='content-bottom d-block d-md-flex' >
                    <img class='content-image' src='@/assets/map.png' />

                    <div class='form shadow1'>
                    <v-text-field background-color=#FCFCFC 
                    flat 
                    solo 
                    hide-details 
                    label='Enter your name*' 
                    class='mb1' 
                    v-model='name'
                    >

                    </v-text-field>
                    <v-text-field 
                    background-color=#FCFCFC 
                    flat 
                    solo 
                    hide-details 
                    label='Enter your email address*' 
                    class='mb1'></v-text-field
                    v-model='email'
                    >

                        <v-textarea solo flat hide-details background-color=#FCFCFC v-model='message' class='mb1'>
                            <template v-slot:label>
                                <div>Write your message</div>
                            </template>
                        </v-textarea>
                   
                    <v-btn dark class='btn'>Send Message</v-btn>
                </div>

            </div>
        </div>     
    </div>
</template>
<script>

export default {
    data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
}
</script>
<style scoped lang="scss">
.card{
    width: 389px;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.header{
    background-color: black;
    color: white;
    height: 352px;
    padding: 3rem 0;
    margin-bottom: 6rem;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
.content{
    margin: 0px 110px;
    width: 1230px;
    max-width: 100vw;
    height: 800px;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10rem;
    
    &-top{
        justify-content: space-between;
        
    }
    &-bottom{
        justify-content: space-between;
        
    }
    &-image{
        max-width: 100vw;
    }
}
.form{
    width: 569px;
    height: 470px;
    padding: 30px;
}
@media (max-width: 960px){
  .content{
    margin: auto;
    height: fit-content;
    &-image{
        
    }
  }
  .content-bottom{
    margin: auto;

  }
  
}
</style>