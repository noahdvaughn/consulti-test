<template lang="">
    <div class='main d-block d-md-flex'>

        <div class='left'>
            <div class='card-text'>
                <h2>We Provide The <span class='thebest'> Best <span class='solution'>Solution</span></span> <br> In The Town</h2>
                <p>Get the proper business consultation from CONSULTI. We are here to consult you as per your business need</p>


                <div class='card__container'>

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
            <span class='card-img d-none d-md-flex'>
                <img src='@/assets/scribble.png' class='card-scribble '/>
            </span>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">

.main{
    margin-bottom: 3rem;
    width: 100vw;
    justify-content: space-around;
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

.card__container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card{
    width: 18rem;

    &__stack{
    margin-top: 5rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;


    }
}

.left{
    // margin-left: 8rem;
    margin-top: 8rem;
    display: flex;
}
.card-text{
    width: 693px;
}
.card-img{
    background-color: #BDBDBD;
    height: 600px;
    width: 495px;
    margin-left: 4rem;
    position: relative;
    display: inline-block;
}
.card-scribble{
        bottom: -2rem;
        left: -4rem;
        height: 10rem;
        display: block;
        position: absolute;
        content: '';     
    }    
    .solution {
        position: relative;
        display: inline-block;
    }
    .solution:after{  
        background-image: url('@/assets/solutionflourish.png');   
        display: block;
        position: absolute;
        top: -10px;
        right: -30px;
        height: 30px;
        width: 30px;
        content: '';
    }
    .thebest{
    padding-bottom: 7px;
    background-image: url('@/assets/solution.png');
    background-size: contain;
    background-position: bottom 0px right 50%; 
    }
    
</style>