<template>
    <div class="header__main">

        <div class="header__logo__container">
            <img src="@/assets/consulti.png" class="header__logo"/>
        </div>


        <div class="header__nav">
            <div class="header__nav__item">
                <p>Home</p>
                <v-menu>
                    <template  v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon class="header__nav__item__chevron" size="1rem" >mdi-chevron-down
                    </v-icon>
                </v-btn>
            </template>
            <v-list  class="">
                        <v-list-item >
                            <v-list-item-title @click=""  class="">
                                Home V1
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title @click="" class="">
                                Home V2
                            </v-list-item-title>
                        </v-list-item> 
                </v-list>
                </v-menu>
            </div>
            <div class="header__nav__item">
                <p>About</p>
                <v-menu>
                    <template  v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon class="header__nav__item__chevron" size="1rem" >mdi-chevron-down
                    </v-icon>
                </v-btn>
            </template>
            <v-list  class="">
                        <v-list-item >
                            <v-list-item-title @click=""  class="">
                                About Us
                            </v-list-item-title>
                        </v-list-item>
                     
                </v-list>
                </v-menu>
            </div>
            <div class="header__nav__item">
                <p>Services</p>
                <v-menu>
                    <template  v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon class="header__nav__item__chevron" size="1rem" >mdi-chevron-down
                    </v-icon>
                </v-btn>
            </template>
            <v-list  class="">
                        <v-list-item >
                            <v-list-item-title @click=""  class="">
                                Services V1
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title @click="" class="">
                                Services V2
                            </v-list-item-title>
                        </v-list-item> 
                        <v-list-item>
                            <v-list-item-title @click="" class="">
                                Services Details
                            </v-list-item-title>
                        </v-list-item> 
                </v-list>
                </v-menu>
            </div>
            <div class="header__nav__item">
                <p>Advisor</p>
    
            </div>
            <div class="header__nav__item">
                <p>Blog</p>
            </div>
            <div class="header__nav__item">
                <p>Contact</p>
            </div>
        </div>

        <div class="header__nav__item">
            <v-btn text>Sign In</v-btn>
            <v-btn outlined>Sign Up</v-btn>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
.header__main{
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    top: 0;
    position: sticky;
    background-color: white;
    height: 5rem;
    z-index: 2;
 
}
.header__logo{
width: 10vw;
height: auto;
}
.header__nav{
    width: 60vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.header__nav__item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
}
.header__nav__item__chevron{
    color: black;
}

.header__logo__container{
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

    
</style>