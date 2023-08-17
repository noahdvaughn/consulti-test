<template lang="">
    <div class='main'>
        <div class='header'>
            <h2>Services</h2>
            <p>Read more about us. Our vission, mission, success and many other you might love</p>
            <p class='p4'> Home > Services</p>
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.content{
    margin: 0 10vw;
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
    height: 350px;
    padding: 3rem 0;
    margin-bottom: 6rem;
    
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