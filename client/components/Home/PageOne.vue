<template>
    <div class="main d-block d-md-flex" >
  
      <div class="left">
        <h1 class="left-mainText">
          Smooth <span class="span-business" >Business</span> <br>  Starts With Good <br><span class="span-consultations">Consultations</span>
        </h1>
        <p>
          Get the proper business consultation from CONSULTI. We are here to consult you as per your business need
        </p>
  
        <div style="margin-top: 3rem; margin-bottom: 6rem;" >
          <v-btn dark class="btn">Book a meeting</v-btn>
          <v-btn text class="btn">
            <v-icon left dark style="font-size: 2rem !important;">mdi-play-circle-outline</v-icon>
            How we Work
          </v-btn>
        </div>
  
        <div>
          <p style="opacity: 0.5; padding-bottom: 2rem;">Trusted by big brands</p>
          <div class="logos">
            <img class="logos-item" src="@/assets/main1logo1.png" />
            <img class="logos-item" src="@/assets/main1logo2.png" />
            <img class="logos-item" src="@/assets/main1logo3.png" />
            <img class="logos-item" src="@/assets/main1logo4.png" />
          </div>
        </div>
      </div> 


      <img src="@/assets/HeaderImage.png" class="image"/>
  
      
    </div>
    
    
  </template>
  
  <script>
  export default {
    name: 'HomeV1'
  }
  </script>
  
  <style scoped lang="scss">
    .main{ 
      justify-content: space-between;
      margin-bottom: 93px;
      padding-left: 66px;
      
    }
    .left{
      width: 638px;
      padding-top: 2rem;
      max-width: 100vw;
        &-mainText{
          margin-bottom: 2rem;
          max-width: 100vw;
          text-align: start;
        }
    }
  .image{
    max-width: 100vw;
  }
  .span-business{
    background-image: url('@/assets/businessbanner.png');
    background-size: contain;
    background-position: bottom 20% right 50%; 
  }
  .span-consultations{
    background-image: url('@/assets/consultationsbanner.png');
    background-position: bottom 20% right 50%; 
    background-size: contain;
  }
  .card-meetingbtn{
    background-color: black !important;
    color: white !important;
    border-radius: 0;
    padding: 2rem !important;
    margin-right: 1rem;
  }
  
  .logos{
    opacity: 0.8;
    display: flex;
    justify-content: space-between;
    max-width: 100vw;

    &-item{
      width: 6vw;
      object-fit: contain;
      
    }
  }
  @media (max-width: 960px){
    .main{
      padding: 0;
    }
 .left{
  margin: 0 auto;
  text-align: center;
  &-mainText{
          text-align: center;
 }
}
.card-meetingbtn{
    margin-right: 0 !important;
  }
}
  </style>
  