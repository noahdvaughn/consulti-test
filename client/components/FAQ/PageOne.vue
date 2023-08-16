<template lang="">
    <div>
        <div class='header'>
            <h2>Frequently Asked Question</h2>
            <p>Read more about us. Our vission, mission, success and many other you might love</p>
            <p class='p4'> Home > FAQ</p>
        </div>
        <div class='content d-block d-md-flex'>

        <div class='left'>  
            <p class='left-head p1'>Quick Navigation</p>
            <div class='left-items'>
                <p class='left-navItem'>General</p>
                <p class='left-navItem'>Account</p>
                <p class='left-navItem'>Pricing & Support</p>
                <p class='left-navItem'>Purchasing Online</p>
                <p class='left-navItem'>Returns Policy</p>
                <p class='left-navItem'>Technical Methods</p>
                
            </div>
        </div>
        <div class='right'>
            <v-expansion-panels accordian v-model='panel' flat>

                    <v-expansion-panel expand v-model='panel' class='shadow1 '>
                        <v-expansion-panel-header >
                            <template v-slot:actions>
                                <v-icon color="red" >
                                    mdi-minus
                                </v-icon>
                            </template>
                            <p class='p3 inter'>
                                Where can I get analytics help?
                            </p>
                        </v-expansion-panel-header class='right-underline'> 
                            <v-expansion-panel-content :key=0 >
                                On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.
                            </v-expansion-panel-content>
                    </v-expansion-panel>

                    <div class='right-underline'></div>

                    <v-expansion-panel expand v-model='panel' >
                    <v-expansion-panel-header expand-icon="mdi-plus">
                        <p class='p3 inter'>
                            Equally the beginning of the daily work?
                        </p>
                    </v-expansion-panel-header > 
                        <v-expansion-panel-content >
                            On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.
                        </v-expansion-panel-content>
                </v-expansion-panel>

                <div class='right-underline'></div>


                <v-expansion-panel expand v-model='panel' >
                    <v-expansion-panel-header expand-icon="mdi-plus">
                        <p class='p3 inter'>
                            What payment methods do you accept?
                        </p>
                    </v-expansion-panel-header > 
                        <v-expansion-panel-content >
                            On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.
                        </v-expansion-panel-content>
                </v-expansion-panel>

                <div class='right-underline'></div>


                <v-expansion-panel expand v-model='panel' >
                    <v-expansion-panel-header expand-icon="mdi-plus">
                        <p class='p3 inter'>
                            Can I use all the Home page demos in a single website?
                        </p>
                    </v-expansion-panel-header > 
                        <v-expansion-panel-content >
                            On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.
                        </v-expansion-panel-content>
                </v-expansion-panel>

                <div class='right-underline'></div>


                <v-expansion-panel expand v-model='panel'>
                    <v-expansion-panel-header expand-icon="mdi-plus" >
                        <p class='p3 inter'>
                            What kind of data is needed for analysis?
                        </p>
                    </v-expansion-panel-header > 
                        <v-expansion-panel-content >
                            On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.
                        </v-expansion-panel-content>
                </v-expansion-panel>
                  
    
                    




            </v-expansion-panels>

        


        </div>

        </div>
        
    </div>
</template>
<script>
export default {
    data() {
 return {
   panel: 0
 }
}
    
}
</script>
<style scoped lang="scss">
.content{
    justify-content: space-between;
    padding: 0px 110px;
    margin-bottom: 10rem;
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
.left{
    width: 306px;
    height: 481px;
    border-radius: 5px;
    &-head{
        padding: 26px;
        color: white;
        background-color: black;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    &-items{
    padding: 40px;

    }
    &-navItem{
        font-size: 20px !important;
        margin-bottom: 1rem !important;
    }
}
.right{
    width: 746px;
    height: 470px;

    &-underline{
        height: 0px;
        width: 100%;
        margin: 10px 0;
        opacity: 0.1;
        border-bottom: 1px solid #1A1A1A !important;
    }
}
    
</style>