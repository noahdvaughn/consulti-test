<template>
    <div class="main">

        <nuxt-link to="/" class="link">
            <img src="@/assets/consulti.png" class="logo"/>
        </nuxt-link>
        


        <div class="navbar d-none d-md-flex">
            <div class="navbar-item" id="attachId">
                
                <v-menu offset-y fixed attach="#attachId">
                    <template  v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" text>
                    <p class="button-p">Home
                    <v-icon class="chevron" size="1rem" >mdi-chevron-down
                    </v-icon>
                    </p>
                </v-btn>
            </template>
            <v-list class="navbar-menu">
                    <nuxt-link to="/" class="link">
                        <v-list-item >
                            <v-list-item-title @click=""  class="">
                                Home
                            </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                    <nuxt-link to="/contactus" class="link">
                        <v-list-item >
                            <v-list-item-title @click=""  class="">
                                Contact
                            </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                    <nuxt-link to="/FAQ" class="link">
                        <v-list-item >
                            <v-list-item-title @click=""  class="">
                                FAQ
                            </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                   
                </v-list>
                </v-menu>
            </div>
            <div class="navbar-item" id="attachId">
                
                <v-menu offset-y fixed attach="#attachId">
                    <template  v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" text >
                    <p class="button-p">About
                    <v-icon class="chevron" size="1rem" >mdi-chevron-down
                    </v-icon>
                    </p>
                </v-btn>
            </template>
            <v-list >
                <nuxt-link to="/about" class="link">
                <v-list-item >
                    <v-list-item-title @click=""  class="">
                                 About Us
                               
                                </v-list-item-title>
                            </v-list-item>
                        </nuxt-link>
                     
                </v-list>
                </v-menu>
            </div>
            <div class="navbar-item" id="attachId">
                
                <v-menu offset-y fixed attach="#attachId">
                    <template  v-slot:activator="{ on, attrs }">
                <v-btn  v-bind="attrs" v-on="on" text>
                    <p class="button-p">Services
                    <v-icon class="chevron" size="1rem" >mdi-chevron-down
                    </v-icon>
                    </p>
                </v-btn>
            </template>
            <v-list  class="">
                    <nuxt-link to="/services" class="link">

                        <v-list-item >
                            <v-list-item-title @click=""  class="">
                                Services
                            </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                      
                     <nuxt-link to="/servicedetails" class="link">
                        <v-list-item>
                            <v-list-item-title @click="" class="">
                                Services Details
                            </v-list-item-title>
                        </v-list-item> 
                     </nuxt-link>
                </v-list>
                </v-menu>
            </div>

            <nuxt-link to="/advisors" class="link">
            <div class="navbar-item">
                <p>Advisor</p>
            </div>
            </nuxt-link>

            <nuxt-link to="/blog" class="link">
            <div class="navbar-item">
                <p>Blog</p>
            </div>
            </nuxt-link>


        <nuxt-link to="/contactus" class="link">
            <div class="navbar-item">
                <p>Contact</p>
            </div>


        </nuxt-link>
        </div>

        <div class="buttons">
            <v-btn text class="navbar-item">Sign In</v-btn>
            <v-btn outlined class="navbar-item">Sign Up</v-btn>
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
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    top: 0;
    position: sticky;
    background-color: white;
    height: 5rem;
    z-index: 2;
}
.link{
    text-decoration: none;
    color: black;
}
.logo{
width: 138px;
height: 36px;
}
.navbar{
    width: 570px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;

    &-item{
        display: flex;
    align-items: center;
    justify-content: center;
    text-transform: none;
    margin: 0 1rem;
    width: 5rem;

}

    &-menu{
        position: sticky;
    }

}
.button-p{
    text-transform: none;
    font-weight: 400;
    letter-spacing: normal;
}
.buttons{
    display: flex ;
}
.chevron{
    color: black;
}

    
</style>