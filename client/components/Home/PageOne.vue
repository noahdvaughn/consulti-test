<template>
    <div class="main d-block d-md-flex" >
  
      <div class="left">
        <h1 class="maintext">
          Smooth <span class="span-business" >Business</span> <br>  Starts With Good <br><span class="span-consultations">Consultations</span>
        </h1>
        <p>
          Get the proper business consultation from CONSULTI. We are here to consult you as per your business need
        </p>
  
        <div style="display: flex; margin-top: 3rem; margin-bottom: 6rem;">
          <v-btn class="card-meetingbtn">Book a meeting</v-btn>
          <v-btn text class="card-classbtn">
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


      <img src="@/assets/HeaderImage.png" class="i"/>
  
      
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
      margin-bottom: 4rem;
      width: 100vw;
      overflow: none;
      max-width: 100vw;
      height: auto;
    }
    .left{
      width: 40rem;
      padding-top: 2rem;
      max-width: 100vw;
    }
  .maintext{
    font-size: 3.5rem;
    text-align: center;
    font-family: 'Merriweather';
    font-weight: 700;
    line-height: 5rem;
    margin-bottom: 2rem;
    max-width: 100vw;

  }
  .i{
    width: 43rem;
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
  .card-classbtn{
    padding: 2rem !important;
    text-transform: none;
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
  </style>
  