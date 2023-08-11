<template>
    <div class="main">

       
            <img src="@/assets/consulti.png" class="logo"/>
        


        <div class="navbar d-none d-md-flex">
            <div class="navbar-item">
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
            <div class="navbar-item">
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
            <div class="navbar-item">
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
            <div class="navbar-item">
                <p>Advisor</p>
    
            </div>
            <div class="navbar-item">
                <p>Blog</p>
            </div>
            <div class="navbar-item">
                <p>Contact</p>
            </div>
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
.logo{
width: 10vw;
height: auto;
object-fit: contain;
}
.navbar{
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.buttons{
    display: flex ;

}
.navbar-item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
}
.header__nav__item__chevron{
    color: black;
}

    
</style>