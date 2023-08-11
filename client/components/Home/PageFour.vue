<template lang="">
    <div class='main'>
        <div class='header'>
            <h1 class='header-h1'>Let's Meet Our <span class='header-talents'>Talents</span></h1>

            <p class='header-p'>Meet our top experts with their high value of talents. They are ready to server you</p>
        </div>

        

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
.main{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header{
   display: flex;
   flex-direction: column;
   align-items: center;
   
   &-talents{
       position: relative;
    display: inline-block;
    z-index: 1;
   }
   &-talents:after{
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

   &-h1{
    font-size: 3rem;
    margin-top: 10rem;
    margin-bottom: 1rem;
   }
   &-p{
    text-align: center;
    width: 25rem;
    font-size: 1rem;
   }

}
    
</style>