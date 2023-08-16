<template lang="">
    <div class='main  d-md-flex'>

        <div class='left'>
            <h2 class='left-h1'>Ready to discuss projetc?</h2>
            <h2 class='left-h2'>Drop us a line</h2>
            <div>
                <v-text-field v-model='name' label="Your Name*" variant="underlined"></v-text-field>
                <v-text-field v-model='email' label="Type Your Email*" variant="underlined"></v-text-field>
                <v-text-field v-model='message' label="Write Down You Query*" variant="underlined"></v-text-field>
                <v-btn dark class='btn'>Send a Message</v-btn>
                
            </div>
        </div>

        <div class='right'>
            <p class='right-underline p2'>How does you guys work? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon> 
            </p>
            
            <p class='right-underline p2'>What's your vision, mission? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </p>

            <p class='right-underline p2'>How much experienced you guys are? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </p>

            <p class='right-underline p2'>What's your team working process? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </p>

            <p class='right-nounderline p2'>How does you guys work? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </p>

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
    .main{
        justify-content: space-between;
        margin-bottom: 10rem;
    }
    .left{
        width: 100%;
        border-right: 1px solid grey;
        padding: 0 5vw ;
        &-button{
            background-color: black !important;
            color: white !important;
            padding: 2rem !important;
            text-transform: none;
        }
        &-h1{
            font-size: 2.5rem;
        }
        &-h2{
            font-weight: 400;
            font-size: 2rem;
            background-size: 35%;
            font-style: italic;
            background-image: url('@/assets/dropline.png');
            background-position: -1rem 1.25rem;
        }
    }
    .right{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 5vw;
        &-icon{
            color: black !important;

        }
        &-underline{
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;
            border-bottom: 1px solid grey;
        }
        &-nounderline{
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;

        }
    }
</style>