<template lang="">
    <div class='main'>

        <h1>Take A Vital Look At Our Core <br> <span class='working'>Working Process</span></h1>

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
}
.img{
    max-width: 100vw;
}
.working{
    background-image: url('@/assets/dropline.png');
        background-position: 0rem 1rem; 
        background-size: contain;      
}
h1{
    margin-bottom: 1rem;
    font-size: 2.5rem;
}
p{
    margin-bottom: 3rem !important;
    width: 45vw
}

    
</style>