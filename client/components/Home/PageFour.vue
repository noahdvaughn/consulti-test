<template lang="">
    <div class='main d-block d-md-flex'>
        <div class='header'>
            <h2 class='header-h1'>Let's Meet Our <span class='header-talents'>Talents</span></h2>

            <p class='header-p mb3'>Meet our top experts with their high value of talents. They are ready to server you</p>

            <div class='d-block d-md-flex talent'>
                <div  class='card'>
                    <img src='@/assets/TalentCard.png'/>
                    <p class='p3'>Devon Lane</p>
                    <p class='talent-p'>CEO & Owner <img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div>
                <div class='card'>
                    <img src='@/assets/TalentCard2.png'/>
                    <p  class='p3'>Floyd Miles</p>
                    <p class='talent-p'>Digital Marketer <img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div class='card'>
                <div class='card'>
                    <img src='@/assets/TalentCard.png'/>
                    <p  class='p3'>Jane Cooper</p>
                    <p class='talent-p'>HRM <img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div>
                <div class='card'>
                    <img src='@/assets/TalentCard.png'/>
                    <p  class='p3'>Ronald Richards</p>
                    <p class='talent-p'>Strategist<img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div>
            </div>

            <div>
                
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
    width: 1230px;
    max-width: 80vw;
    padding: 0 110px;
    margin-bottom: 10rem;
}
.header{
    max-width: 80vw;
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
    margin-top: 10rem;
    margin-bottom: 1rem;
    text-align: center;
   }
   &-p{
    text-align: center;
    width: 25rem;
    font-size: 1rem;
    max-width: 80vw;

   }

}
.talent{
    width: 1230px;
    margin-top: 1rem;
    max-width: 80vw;
    justify-content: space-around;

    &-p{
        display: flex;
        justify-content: space-between;
        max-width: 80vw;
    }
    &-img{
        object-fit: contain;
        margin-right: 0;
        width: auto;
    }
    &-h2{
        font-family: 'Merriweather';
    }


}
.card{
    max-width: 80vw;
}
@media (max-width: 960px){
.main{
    margin-left: auto;
    margin-right: auto;
    padding: 0;
}
.header{
    text-align: center;
}
.talent{
    margin: auto;
}

}

    
</style>