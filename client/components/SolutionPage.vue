<template lang="">
    <div class='main d-block d-md-flex'>

        <div class='left'>
            
                <h2 class='left-title'>We Provide The <span class='left-theBest'> Best <span class='left-solution'>Solution</span></span> <br> In The Town</h2>
                <p class='left-p'>Get the proper business consultation from CONSULTI. We are here to consult you as per your business need</p>

                <div class='left-container d-block d-md-flex'>

                    <div class='card'> 
                        <div class='card__stack'>
                            <h1 class='card__stack-number'>01</h1>
                            <h3 style='z-index: 1;' >Research</h3>
                        </div>
                        <p>Research on the business to get core of the problem</p>
                    </div>

                    <div class='card'>
                        <div class='card__stack'>
                            <h1 class='card__stack-number'>02</h1>
                            <h3 style='z-index: 1;'>Data Collection</h3>                       
                        </div>
                        <p>Research on the business to get core of the problem</p>
                    </div>

                    <div class='card'>
                        <div class='card__stack'>
                            <h1 class='card__stack-number'>03</h1>
                            <h3 style='z-index: 1;'>Targeting</h3>
                        </div>
                        <p>Research on the business to get core of the problem</p>
                    </div>

                    <div class='card'>
                        <div class='card__stack'>
                            <h1 class='card__stack-number'>04</h1>
   
                            <h3 style='z-index: 1;'>Problem Solution</h3>

                        </div>
                        <p>Research on the business to get core of the problem</p>
                    </div>


                </div>
            

        </div>
        <span class='card-image d-none d-md-flex'>
            <img src='@/assets/scribble.png' class='card-scribble '/>
        </span>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">

.main{
    margin-bottom: 3rem;
    justify-content: space-around;
}
.left{
    width: 693px;
    max-width: 80vw;
    height: auto;
    margin-top: 8rem;
    display: block;
    &-solution {
        position: relative;
        display: inline-block;
    }
    &-solution:after{  
        background-image: url('@/assets/solutionflourish.png');   
        display: block;
        position: absolute;
        top: -10px;
        right: -30px;
        height: 30px;
        width: 30px;
        content: '';
    }
    &-theBest{
        padding-bottom: 7px;
        background-image: url('@/assets/solution.png');
        background-size: contain;
        background-position: bottom 0px right 50%; 
    }
    &-title{
        line-height: 70px ;
        font-weight: 700;
    }
    &-p{
        width: 495px;
        max-width: 80vw;


    }
    &-container{
    flex-wrap: wrap;
    justify-content: space-between;
    }
    
}

.card__stack-number{
    width: 0rem;
    height: 6.5rem;
    font-weight: 100;
    font-size: 5rem;
    color: white;
    text-shadow: -1px 1px 2px black,
				  1px 1px 2px black,
				  1px -1px 0 black,
				  -1px -1px 0 black;
    font-family: 'Inter';
    position: absolute;
    margin-left: -20px;
    margin-bottom: -20px;
    opacity: 0.3;
    z-index: 0;
}
.card{
    width: 285px;
    height: 136px;
    max-width: 80vw;

    &__stack{
        margin-top: 5rem;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }
    &-image{
        background-color: #BDBDBD;
        height: 600px;
        width: 495px;
        margin-left: 4rem;
        position: relative;
        display: inline-block;
    }
    &-scribble{
        bottom: -2rem;
        left: -4rem;
        height: 141px;
        width: 104px;
        display: block;
        position: absolute;
        content: ''; 
    }
}

@media (max-width: 960px){

    .left{
        margin: 0 auto;
        text-align: center;
    }
    .card{
        // max-width: 100vw;
        text-align: start;
    }

}

    
</style>