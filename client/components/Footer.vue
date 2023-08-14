<template lang="">
    <div class='main'>
        <div class='header'>
            <h1 class='header-h1'>
                Let's work on the next big thing together.
            </h1>
            <div class='header-container'>
                <v-btn class='header-btn' light>Book a FREE Call </v-btn>
                <img right class='header-icon' src="@/assets/phone.png"/>
            </div>
            <img class='header-arrow' src='@/assets/swirlarrow.png'/>
            <img class='header-scribble' src='@/assets/scribble.png'/>
        </div>
        <div class='content'>
            <div>
                <img class='content-consulti' src='@/assets/consulti.png' />
                <p>Consulti is a digital business consulting agency based in New York, USA</p>
                <v-text-field label='Enter your email' outlined class='content-email' hide-details>
                    <template v-slot:append>

                        <v-btn class='subscribeBtn'>Subscribe</v-btn>

                    </template>
                </v-text-field>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.main{

}
.header{
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 30rem;
    &-h1{
        color: white;
        font-size: 5rem;
        text-align: center;
    }
    &-container{
        display: flex;
        justify-content: center;
        height: 4rem;
    }
    &-btn{
        text-transform: none;
        font-weight: 900;
        padding: 0;
        border-radius: 0;
        height: 100% !important;

    }
    &-icon{
        background-color: #F6E96F;
        width: 4rem;
        height: 100%;
        margin: 0;
        padding: 1.25rem;

    }
    &-arrow{
        position: absolute;
        right: 13rem;
        bottom: 4rem;
    }
    &-scribble{
        
        left: 0;
        bottom: 0;
    }


}
.content{


    &-consulti{
        width: 9rem;
        object-fit: contain;
        padding-top: 0 !important;
        margin-top: 0 !important;
    }
    &-email{
        display: flex !important;
        align-items: center !important;
    }
}
.subscribeBtn{
    background-color: #F6E96F !important;
    border-radius: 0;
    text-transform: none;
    padding: 1.5rem !important;
    align-self: center;
    // padding-top: 0;
    margin-bottom: 1rem;
    // margin-top: -1rem;
}
    
</style>