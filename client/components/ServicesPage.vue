<template lang="">
    <div class='main d-block d-md-flex'>
        <div class='header'>
            <h2 class='mb1 header-p2'>We Serve Those Services For <span class='header__you'>You</span></h2>
            <p class='header-p'>We serve services as per your needs. Here you will get all of the services list that we will provide you</p>
        </div>

        <div class='bottom d-block d-md-flex'>

            <div class='card'>
                <div style='display: block;'>
                    <p class='p3'>  
                        <img class='card-icon' src='@/assets/charticon.png'/>

                        Competitive Analysis</p>
                    <p class='card-p'>Every successful digital marketing campaign must be driven. This provides a clear path to </p>
                    <p class='card-p'>Discover More <v-icon color='white'>mdi-arrow-right</v-icon></p>
                </div>
            </div>
            <div class='card'>
                <div style='display: block;'>
                    <p class='p3'> 
                        <img class='card-icon' src='@/assets/magnifyingicon.svg'/>

                        Strategic Planing</p>
                    <p class='card-p'>Every successful digital marketing campaign must be driven. This provides a clear path to </p>
                    <p class='card-p'>Discover More <v-icon color='white'>mdi-arrow-right</v-icon></p>
                </div>
            </div>
            <div class='card'>
                <div style='display: block;'>
                    <p class='p3'> 
                        <img class='card-icon' src='@/assets/bullhornicon.svg'/>

                        Marketing Strategy</p>
                    <p class='card-p'>Every successful digital marketing campaign must be driven. This provides a clear path to </p>
                    <p class='card-p'>Discover More <v-icon color='white'>mdi-arrow-right</v-icon></p>
                </div> 
            </div>
            <div class='card'>
                <div style='display: block;'>
                    <p class='p3'> 
                        <img class='card-icon' src='@/assets/keyicon.svg'/>

                        Problem Solving</p>
                    <p class='card-p'>Every successful digital marketing campaign must be driven. This provides a clear path to </p>
                    <p class='card-p'>Discover More <v-icon color='white'>mdi-arrow-right</v-icon></p>
                </div>
            </div>
            <div class='banner'>
                <h2 class='banner-h1'>
                    Hey! We can help you to take your business next level
                </h2>
                <v-btn dark class='btn'>Let's Discuss</v-btn>
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
    background-image: url('@/assets/page3background.png');
    background-size: cover;
    flex-direction: column;
    align-items: center;
    padding-top: 7rem;
    margin-bottom: 3rem;
    max-width: 100vw;
}
.banner{
    background-color: #F6E96F ;
    width: 811px;
    height: 234px;
    margin-right: 34px;
    margin-top: 34px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 100vw;

    &-h1{
        font-family: 'Inter';
        width: 381px;
        max-width: 50vw;
        font-size: 36px !important;
        line-height: 51px;
        font-weight: 400;
    }
   
}
.bottom{
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 10rem;

}
.header{
    text-align: center;
    color: white;
    // width: 60vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-p{
        opacity: 0.5;
        width: 595px;
        max-width: 100vw;
    }
    &__you{
        position: relative;
        display: inline-block;
    }

    &__you:after{
        background-image: url('@/assets/flourishyellow.png');
        display: block;
        position: absolute;
        top: -10px;
        right: -30px;
        height: 30px;
        width: 30px;
        content: '';
    }
}
.card{
    margin-right: 34px;
    margin-top: 34px;
    background-color: #2c2c2c;
    color: white;
    height: 234px;
    width: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    padding-left: 6rem;
    padding-right: 3rem;

    &-icon{
        color: white;
        position: absolute;
        align-self: start;
        margin-left: -4rem;
        font-size: 2.5rem;
    }
    &-p{
        margin-top: 1rem;
        opacity: 0.5;
    }
}
@media (max-width: 960px){
    .card{
        margin: auto;
        max-width: 80vw;
        // padding: auto;
        height: fit-content;
        margin-bottom: 10px;
    }
    .main{
        margin: auto;
    }
    .bottom{
        margin: auto;
    }
    .banner-h1{
        font-size: 24px !important;
    }
    .banner{
        margin: 0;
    }
    .header-p2{
        width: 100vw;
    }


}

    
</style>