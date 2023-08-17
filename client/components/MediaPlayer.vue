<template lang="">
    <div class='main'>

        <h2 class='mb1'>Take A Vital Look At Our Core <br> <span class='working'>Working Process</span></h2>

        <p>Get the proper business consultation from CONSULTI. We are here to consult you as per your business need</p>
        <img class='img' src='@/assets/Player.png' />
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 10rem;
    max-width: 100vw;
}
.img{
    max-width: 100vw;
}
.working{
    background-image: url('@/assets/dropline.png');
        background-position: 0rem 1.5rem; 
        background-size: contain;      
}

p{
    margin-bottom: 3rem !important;
    width: 595px;
    max-width: 80vw;
}

    
</style>