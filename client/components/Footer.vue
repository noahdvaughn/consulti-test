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
            <img class='header-arrow d-none d-md-flex' src='@/assets/swirlarrow.png'/>
            <img class='header-scribble d-none d-md-flex' src='@/assets/scribble.png'/>
        </div>
        <div class='content d-block d-md-flex'>


            <div class='stack'>

                <img class='content-consulti' src='@/assets/consulti.png' />

                <p>Consulti is a digital business consulting agency based in New York, USA</p>
                <div>
                    <v-text-field label='Enter your email' class='content-email' hide-details solo>
                        <template v-slot:append>
                            <v-btn class='subscribeBtn'>Subscribe</v-btn>
                        </template>
                    </v-text-field>


                </div>

            </div>

            <div class='stack'>
                <p class='p4'>Services</p>
                <p>Business Consulting</p>
                <p>Strategy Analysis</p>
                <p>Competative Analysis</p>
                <p>Problem Solving</p>
            </div>
            <div class='stack'>
                <p class='p4'>About Us</p>
                <p>Our Mission</p>
                <p>Our Vission</p>
                <p>Advisor</p>
                <p>Talk To Us</p>
            </div>
            <div class='stack'>
                <p class='p4'>Contact Info</p>
                <p>455 West Orchard Street <br> Kings Mountain, NC 280867</p>
                <p class='p4'>
                    <v-icon color='#F6E96F'>mdi-phone</v-icon>
                    +088 (246) 642-27-10</p>
                <p class='p4'>
                    <v-icon color='#F6E96F'>mdi-email</v-icon>
                    example@mail.com</p>
               
            </div>
        </div>
        <p class='copyright'>© 2022 Consulti All Rights Reserved</p>
        
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
    padding: 4rem 0;
    position: relative;
    &-h1{
        color: white;
        font-size: 4rem;
        text-align: center;
        margin-bottom: 3rem;
        width: 70vw;
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
        position: absolute;
        left: 0;
        bottom: 0;
    }


}
.content{
    display: flex;
    justify-content: space-around;
    padding: 4rem 0;
    border-bottom: 2px solid rgba(123, 123, 123, 0.3);


    &-consulti{
        width: 9rem;
        object-fit: contain;
      
    }
    &-email{
        border: 1px solid #c2c2c2 !important;
        border-radius: 0;
        opacity: 0.9;
        
    }
}
.subscribeBtn{
    background-color: #F6E96F !important;
    border-radius: 0;
    text-transform: none;
    // padding: 1.5rem !important;
    align-self: center;
    margin: 0.5rem 0;
}
.stack{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0 3rem;
    height: 209px;
}
.copyright{
    padding: 1rem 0;
    text-align: center;
    opacity: 0.7;
}
@media (max-width: 960px){

    .stack{
        margin-bottom: 20px;
        height: 150px;
        text-align: center;
    }

}

    
</style>