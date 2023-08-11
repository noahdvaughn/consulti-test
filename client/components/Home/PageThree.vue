<template lang="">
    <div class='main'>
        <div class='header'>
            <h1 class='header-h1'>We Serve Those Services For <span class='header__you'>You</span></h1>
            <p class='header-p'>We serve services as per your needs. Here you will get all of the services list that we will provide you</p>
        </div>

        <div class='bottom'>

            <div class='card'>
                <div style='display: block;'>
                    <h2>  
                        <img class='card-icon' src='@/assets/charticon.png'/>

                        Competitive Analysis</h2>
                    <p class='card-p'>Every successful digital marketing campaign must be driven. This provides a clear path to </p>
                    <p class='card-p'>Discover More <v-icon color='white'>mdi-arrow-right</v-icon></p>
                </div>
            </div>
            <div class='card'>
                <div style='display: block;'>
                    <h2> 
                        <img class='card-icon' src='@/assets/magnifyingicon.svg'/>

                        Strategic Planing</h2>
                    <p class='card-p'>Every successful digital marketing campaign must be driven. This provides a clear path to </p>
                    <p class='card-p'>Discover More <v-icon color='white'>mdi-arrow-right</v-icon></p>
                </div>
            </div>
            <div class='card'>
                <div style='display: block;'>
                    <h2> 
                        <img class='card-icon' src='@/assets/bullhornicon.svg'/>

                        Marketing Strategy</h2>
                    <p class='card-p'>Every successful digital marketing campaign must be driven. This provides a clear path to </p>
                    <p class='card-p'>Discover More <v-icon color='white'>mdi-arrow-right</v-icon></p>
                </div>
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
    width: 100vw;
    height: 95vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10rem;
}
.bottom{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.header{
    text-align: center;
    color: white;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-h1{
        font-size: 3rem;
    }
    &-p{
        opacity: 0.5;
        width: 40vw;
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
    
</style>