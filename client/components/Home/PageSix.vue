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
                    <h2 class='card-h1'>The Art Of Taking Right Decission To Success</h2>
                    <p>Learn how to take the right decission in critical time to get succes and how to overcome bad times.</p>
                </div>
            </div>
            <div class='card'>
                <div class='card-background'></div>
                <div class='card-content'>

                    <p>ADVICE -</p>
                    <h2 class='card-h1'>Learn How We Plan UX Research</h2>
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
    }
    &-p{
        width: 40vw;
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
    // max-width: 70vw;

    &-h1{
        font-size: 2.5rem;
    }

    &-background{
        width: 40rem;
        height: 30rem;
        max-width: 70vw;
        // max-height: 60vh;


        background-color: #BDBDBD ;
        border-radius: 10px;
    }
    &-content{
        padding: 2rem;
        width: 35rem;
        margin-top: -5rem;
        background-color: white;
        text-align: left;
        max-width: 100vw;

    }
}
.content{
    justify-content: space-around;
}

    
</style>