<template lang="">
    <div class='main  d-md-flex'>

        <div class='left'>
            <h1 class='left-h1'>Ready to discuss projetc?</h1>
            <h2 class='left-h2'>Drop us a line</h2>
            <div>
                <v-text-field label="Your Name*" variant="underlined"></v-text-field>
                <v-text-field label="Type Your Email*" variant="underlined"></v-text-field>
                <v-text-field label="Write Down You Query*" variant="underlined"></v-text-field>
                <v-btn class='left-button'>Send a Message</v-btn>
                
            </div>
        </div>

        <div class='right'>
            <h2 class='right-underline'>How does you guys work? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon> 
            </h2>
            
            <h2 class='right-underline'>What's your vision, mission? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </h2>

            <h2 class='right-underline'>How much experienced you guys are? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </h2>

            <h2 class='right-underline'>What's your team working process? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </h2>

            <h2 class='right-nounderline'>How does you guys work? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </h2>

        </div>
        
    </div>
</template>
<script>
export default {
    
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