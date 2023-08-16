<template lang="">
    <div class='main'>
        <div class='header'>
            <h2>The art of creative thinking</h2>
            <p>Read more about us. Our vission, mission, success and many other you might love</p>
            <p class='p4'> Home > Blog > the art of creative thinking</p>
        </div>
        <div class='content d-block d-md-flex'>
            <div class='content-top d-block d-md-flex'>

                <div class='card shadow1'>
                    <img class='mb1' src='@/assets/location.png' />
                    <p class='mb1'>2113 Thornridge Cir. Syracuse,</p>
                    <p class='mb1'>California 208434</p>
                </div>
                <div class='card shadow1'>
                    <img class='mb1' src='@/assets/phone-icon.png' />
                    <p class='mb1'>+088 (246) 641-27-10 </p>
                    <p class='mb1'>+088 (246) 641-27-10  </p>
                </div>
                <div class='card shadow1'>
                    <img class='mb1' src='@/assets/emailicon.png' />
                    <p class='mb1'>designhawk@gmail.com  </p>
                    <p class='mb1'>hello@hmmahi.design</p>
                </div>
            </div>


            <div class='content-bottom d-block d-md-flex' >
                <img class='content-image' src='@/assets/map.png' />
                
                
                <validation-observer ref="observer" v-slot="{ invalid }">
                    <form class='form shadow1' @submit.prevent='submit'>
                        <validation-provider  
                            v-slot="{ errors }" 
                            name="Name" 
                            rules="required|max:10"
                            >
                                <v-text-field background-color=#FCFCFC 
                                flat 
                                solo 
                                :error-messages="errors"
                                :counter="10"
                                required
                                label='Enter your name*' 
                                class='mb1' 
                                v-model='name'
                                >
                        </v-text-field>
                    </validation-provider>
              
                    <validation-provider 
                    v-slot="{ errors }"
                    name="Email"
                    rules="required|email">                  
                        <v-text-field 
                        background-color=#FCFCFC 
                        flat 
                        solo 
                        :error-messages="errors"      
                        label='Enter your email address*' 
                        class='mb1'
                        required
                        v-model='email'
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider 
                    v-slot="{ errors }"
                    name="Message"
                    rules="required|min:10">
                        <v-textarea 
                        solo 
                        flat 
                        required
                         background-color=#FCFCFC 
                         v-model='message' 
                        :error-messages="errors"      
                         class='mb1'>
                            <template v-slot:label>
                                <div>Write your message</div>
                            </template>
                        </v-textarea>
                    </validation-provider>

                   
                    <v-btn dark class='btn' :disabled="invalid" type='submit'>Send Message</v-btn>
                </form>
            </validation-observer>


            </div>
        </div>     
    </div>
</template>
<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import { mapFields } from 'vuex-map-fields'
setInteractionMode('eager')

extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })


export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    methods: {
      submit () {
        this.$refs.observer.validate()
        if (!isValid) {
        // ABORT!!
      }
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
    computed: {
        ...mapFields('form', ['name', 'email', 'message'])
    }
}
</script>
<style scoped lang="scss">
.card{
    width: 389px;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.header{
    background-color: black;
    color: white;
    height: 352px;
    padding: 3rem 0;
    margin-bottom: 6rem;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
.content{
    margin: 0px 110px;
    width: 1230px;
    max-width: 100vw;
    height: 800px;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10rem;
    
    &-top{
        justify-content: space-between;
        
    }
    &-bottom{
        justify-content: space-between;
        
    }
    &-image{
        max-width: 100vw;
    }
}
.form{
    width: 569px;
    height: 470px;
    padding: 30px;
}
@media (max-width: 960px){
  .content{
    margin: auto;
    height: fit-content;
    &-image{
        
    }
  }
  .content-bottom{
    margin: auto;

  }
  
}
</style>