<template lang="">
    <div class='main'>
        <div class='header'>
            <h2 class='header-h2'>Trending Blogs & <span class='header-articles'>Articles</span></h2>
            <p class='header-p'>Read the blog and article inside of consulti. We share tips and tricks to get more succes</p>
        </div>

        <div class='content d-block d-md-flex'>
            
            <div class='card'>
                <div class='card-background'></div>

                <div class='card-content'>
                    <p>UPDATE -</p>
                    <p class='card-title'>The Art Of Taking Right Decission To Success</p>
                    <p>Learn how to take the right decission in critical time to get succes and how to overcome bad times.</p>
                </div>
            </div>
            <div class='card'>
                <div class='card-background '></div>
                <div class='card-content'>

                    <p>ADVICE -</p>
                    <p class='card-title'>Learn How We Plan UX Research</p>
                    <p>Learn how to take the right decission in critical time to get succes and how to overcome bad times.</p>
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
    text-align: center;
    margin-bottom: 10rem;
}
.header{
    margin-bottom: 4rem;
    &-h2{
        margin-bottom: 4rem;
        max-width: 100vw;
    }
    &-p{
        // width: 40vw;
        width: 534px;
        max-width: 80vw;
        margin: auto;
    }
    &-articles{  
        position: relative;
        display: inline-block;
        z-index: 1;   
    }
    &-articles:after{
        background-image: url('@/assets/star.svg');
        background-size: contain;
        display: block;
        position: absolute;
        top: -10px;
        right: -30px;
        height: 6rem;
        width: 6rem;
        z-index: -1;
        content: '';
    }
}
.card{
    display: flex;
    flex-direction: column;
    align-items: center;

    &-background{
        width: 600px;
        height: 399px;
        max-width: 70vw;
        background-color: #BDBDBD;
        border-radius: 10px;
    }
    &-content{
        padding: 2rem;
        width: 500px;
        height: 221px;
        margin-top: -5rem;
        background-color: white;
        text-align: left;
        max-width: 100vw;
    }
    &-title{
        font-size: 34px !important;
        font-family: 'Merriweather';
        font-weight: 700;
    }
}
.content{
    justify-content: space-around;
}
@media (max-width: 960px){

    .card{
        // height: fit-content !important;
        margin: auto !important;

        &-content{
            margin-top: 0 !important;
            height: fit-content;
        }
        &-background{
            // height: 200px;
            // width: 200px;
            margin: auto !important;
        }
    }
}


    
</style>