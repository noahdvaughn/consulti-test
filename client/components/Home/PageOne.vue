<template>
    <div class="p1__main">
  
      <div class="p1__card">
        <h1 class="p1__card-maintext">
          Smooth <span class="p1__span-business" >Business</span> <br>  Starts With Good <br><span class="p1__span-consultations">Consultations</span>
        </h1>
        <p>
          Get the proper business consultation from CONSULTI. We are here to consult you as per your business need
        </p>
  
        <div style="display: flex; margin-top: 3rem; margin-bottom: 6rem;">
          <v-btn class="p1__card-meetingbtn">Book a meeting</v-btn>
          <v-btn text class="p1__card-classbtn" >
            <v-icon left dark style="font-size: 2rem !important;">mdi-play-circle-outline</v-icon>
            How we Work
          </v-btn>
        </div>
  
        <div>
          <p style="opacity: 0.5; padding-bottom: 2rem;">Trusted by big brands</p>

          <div class="p1__logos">
            <img src="@/assets/main1logo1.png" />
            <img src="@/assets/main1logo2.png" />
            <img src="@/assets/main1logo3.png" />
            <img src="@/assets/main1logo4.png" />

      
          </div>
        </div>
  
  
  
  
      </div> 
  
      <img src="@/assets/HeaderImage.png" class="p1__image"/>
      
    </div>
    
    
  </template>
  
  <script>
  export default {
    name: 'HomeV1'
  }
  </script>
  
  <style>
    .p1__main{
      display: flex;
      justify-content: space-between;
      margin-bottom: 4rem;
      height: 90vh;
    }
    .p1__card{
      width: 638px;
      height: 434px;
      padding-top: 2rem;
      padding-left: 66px;
    }
  .p1__card-maintext{
    font-size: 64px;
    text-align: center;
    font-family: 'Merriweather';
    font-weight: 700;
    line-height: 86px;
    margin-bottom: 2rem;
  }
  .p1__image{
    width: 685px;
  }
  .p1__span-business{
    background-image: url('@/assets/businessbanner.png');
    background-size: contain;
    background-position: bottom 20% right 50%; 
  }
  .p1__span-consultations{
    background-image: url('@/assets/consultationsbanner.png');
    background-position: bottom 20% right 50%; 
    background-size: contain;
  }
  .p1__card-meetingbtn{
    background-color: black !important;
    color: white !important;
    border-radius: 0;
    padding: 2rem !important;
    margin-right: 1rem;
  }
  .p1__card-classbtn{
    padding: 2rem !important;
    text-transform: none;
  }
  .p1__logos{
    opacity: 0.8;
    display: flex;
    justify-content: space-between;
  }
  </style>
  