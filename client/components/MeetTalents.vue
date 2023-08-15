<template lang="">
    <div class='main'>
        <div class='header'>
            <h2 class='header-h2'>Let's Meet Our <span class='header-talents'>Talents</span></h2>

            <p class='header-p'>Get the proper business consultation from CONSULTI. We are here to consult you as per your business need</p>

            <div class='d-block d-md-flex talent'>
                <div>
                    <img src='@/assets/TalentCard.png'/>
                    <p class='p3'>Devon Lane</p>
                    <p class='talent-p'>CEO & Owner <img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div>
                <div>
                    <img src='@/assets/TalentCard2.png'/>
                    <p  class='p3'>Floyd Miles</p>
                    <p class='talent-p'>Digital Marketer <img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div>
                <div>
                    <img src='@/assets/TalentCard.png'/>
                    <p  class='p3'>Jane Cooper</p>
                    <p class='talent-p'>HRM <img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div>
                <div>
                    <img src='@/assets/TalentCard.png'/>
                    <p  class='p3'>Ronald Richards</p>
                    <p class='talent-p'>Strategist<img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div>
            </div>
            <div class='d-block d-md-flex talent'>
                <div>
                    <img src='@/assets/TalentCard.png'/>
                    <p class='p3'>Devon Lane</p>
                    <p class='talent-p'>CEO & Owner <img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div>
                <div>
                    <img src='@/assets/TalentCard2.png'/>
                    <p  class='p3'>Floyd Miles</p>
                    <p class='talent-p'>Digital Marketer <img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div>
                <div>
                    <img src='@/assets/TalentCard.png'/>
                    <p  class='p3'>Jane Cooper</p>
                    <p class='talent-p'>HRM <img class='talent-img' src='@/assets/TalentSocials.png'/></p>
                </div>
                <div>
                    <img src='@/assets/TalentCard.png'/>
                    <p  class='p3'>Ronald Richards</p>
                    <p class='talent-p'>Strategist<img class='talent-img' src='@/assets/TalentSocials.png'/></p>
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
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10rem;
}
.header{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   
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

   &-p{
    text-align: center;
    width: 30rem;
   }

}
.talent{
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100vw;
    justify-content: space-around;

    &-p{
        display: flex;
        justify-content: space-between;
        max-width: 100vw;
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
    
</style>