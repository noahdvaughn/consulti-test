<template lang="">
    <div class='main'>
        <div class='header'>
            <h2>About Us</h2>
            <p>Read more about us. Our vission, mission, success and many other you might love</p>
            <p class='p4'> Home > About</p>
        </div>

    <div class='content d-block d-md-flex'  >
        <div class='left'>
            <h2>We Lead Your Business <span class='header-to'>To</span> <br> <span class='header-theVictory'>The Victory</span></h2>
            <p class='left-p'>Get the proper business consultation from CONSULTI. We are here to consult you as per your business need</p>

            <div class='left_buttons'>
                <v-btn dark class='left_buttons-mission'>Mission</v-btn>
                <v-btn text class='left_buttons-vission'>Vission</v-btn>
                <v-btn text class='left_buttons-vission'>Our Value</v-btn>
            </div>

            <p>
                Get the proper business consultation from CONSULTI. We are here to consult you as per your business need.Get the proper business consultation from CONSULTI.Get the proper business consultation from CONSULTI.

            </p>
        </div>
        <img class='content-img' src='@/assets/aboutheader.png' />

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
.content{
    margin: 0 105px;
    &-img{
        text-align: center;
        max-width: 80vw;
        margin-left: auto;
        margin-right: auto;
    }
}

.header{
    background-color: black;
    color: white;
    height: 20rem;
    padding: 3rem 0;
    margin-bottom: 6rem;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    &-to{
        position: relative;
        display: inline-block;
        
    }
    &-to:after{
        background-image: url('@/assets/solutionflourish.png');   
        display: block;
        position: absolute;
        top: -10px;
        right: -30px;
        height: 30px;
        width: 30px;
        content: '';
    }
    &-theVictory{
        background-image: url('@/assets/dropline.png');
        background-position: -1rem 1.25rem;
        background-size: 110%;

    }
}

.left{
    &-p{
        border-bottom: 2px solid rgba(123, 123, 123, 0.3);
        padding: 3rem 0rem;
    }
    &_buttons{
        display: flex;
        justify-content: flex-start;
        padding: 3rem 0rem;
        

        &-mission{
            border-radius: 0;
            text-transform: none;

        }
        &-vission{
            background-color: white !important;
            text-transform: none;
        }
    }
}
    
</style>