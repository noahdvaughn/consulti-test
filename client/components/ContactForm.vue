<template lang="">
    <div class='main  d-md-flex'>

        <div class='left'>
            <h2 class='left-h1'>Ready to discuss projetc?</h2>
            <h2 class='left-h2'>Drop us a line</h2>
            <validation-observer ref="observer" v-slot="{ invalid }">
            <form>
                <validation-provider  
                            v-slot="{ errors }" 
                            name="Name" 
                            rules="required|max:20"
                            >
                                <v-text-field
                                
                                variant="underlined"
                                :error-messages="errors"
                                :counter="20"
                                required
                                label='Your Name*' 
                                v-model='name'
                                >
                        </v-text-field>
                    </validation-provider>

                    <validation-provider 
                    v-slot="{ errors }"
                    name="Email"
                    rules="required|email">                  
                        <v-text-field 
                        variant="underlined"
                         
                        :error-messages="errors"      
                        label='Type Your Email*' 
                        
                        required
                        v-model='email'
                        ></v-text-field>
                    </validation-provider>
                
                    <validation-provider 
                    v-slot="{ errors }"
                    name="Message"
                    rules="required|min:10">                  
                        <v-text-field 
                        variant="underlined"
                         
                        :error-messages="errors"      
                        label='Write Down You Query*' 
                        
                        required
                        v-model='message'
                        ></v-text-field>
                    </validation-provider>

                <v-btn class='btn validate' :disabled='invalid'>Send a Message</v-btn>
                
            </form>
            </validation-observer>

        </div>

        <div class='right'>
            <p class='right-underline p2'>How does you guys work? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon> 
            </p>
            
            <p class='right-underline p2'>What's your vision, mission? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </p>

            <p class='right-underline p2'>How much experienced you guys are? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </p>

            <p class='right-underline p2'>What's your team working process? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </p>

            <p class='right-nounderline p2'>How does you guys work? 
                <v-icon right class='right-icon'>mdi-chevron-down</v-icon>
            </p>

        </div>
        
    </div>
</template>
<script>
import { required, email, max,  min } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import { mapFields } from 'vuex-map-fields'
// setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })
  extend('min', {
    ...min,
    message: '{_field_} may not be less than {length} characters',
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
      async submit () {
        const isValid = await this.$refs.observer.validate();
        console.log('hit')
        if (!isValid) {
           console.log('invalid')
            
        } else {
            await this.$axios.$post('/api/email', {
                name: this.name,
                email: this.email,
                message: this.message
            })           
        }
        this.clear()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.message = ''
        this.$refs.observer.reset()
      },
    },
    computed: {
        ...mapFields('form', ['name', 'email', 'message'])
    }
}
</script>
<style scoped lang="scss">
    .main{
        justify-content: space-between;
        margin-bottom: 10rem;
    }
    .validate{
    height: 59px;
    width: 173px;
    background-color: black !important;
    color: white !important;
}
    .left{
        width: 100%;
        border-right: 1px solid grey;
        padding: 0 5vw ;
        &-button{
            background-color: black !important;
            color: white !important;
            padding: 2rem !important;
            text-transform: none;
        }
        &-h1{
            font-size: 2.5rem;
        }
        &-h2{
            font-weight: 400;
            font-size: 2rem;
            background-size: 50%;
            font-style: italic;
            background-image: url('@/assets/dropline.png');
            background-position: 0 2rem;
        }
    }
    .right{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 5vw;
        &-icon{
            color: black !important;

        }
        &-underline{
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;
            border-bottom: 1px solid grey;
        }
        &-nounderline{
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;

        }
    }
@media (max-width: 960px){
    .left{
        margin-bottom: 20px;
    }
}

</style>