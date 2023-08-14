<template lang="">
    <div class='main'>
        <div class='header'>
            <h1>Blog</h1>
            <p>Read more about us. Our vission, mission, success and many other you might love</p>
            <h3> Home > Blog</h3>
        </div>
        <div>
            <div class='left'>
                <v-text-field solo label='Type to search...' prepend-inner-icon="mdi-magnify">
                </v-text-field>

                <h2>Blog Categories</h2>

                <h3>Development (15)</h3>
                <h3>Website Construction (08)</h3>
                <h3>Cyber Security (20)</h3>
                <h3>Virtual Assistant (07)</h3>

                <h2>Recent Posts</h2>

                <div class='left-posts'>
                    <div class='left-grey'></div>
                        <div>
                            <h3>Don't count on Freeto Win You Customers</h3>
                            <p>July 02, 2021</p>
                        </div>
                </div>
                <div class='left-posts'>
                    <div class='left-grey'></div>
                        <div>
                            <h3>Is Your Organization Building Bridges?</h3>
                            <p>July 07, 2021</p>
                        </div>
                </div>
                <div class='left-posts'>
                    <div class='left-grey'></div>
                        <div>
                            <h3>What Makes a Degree Review Successful?</h3>
                            <p>May 28, 2021</p>
                        </div>
                </div>
                <div class='left-posts'>
                    <div class='left-grey'></div>
                        <div>
                            <h3>Getting Your Team to Buy into a Big Change</h3>
                            <p>March 03, 2021</p>
                        </div>
                </div>
                <h2>Tags</h2>

                <div>
                    <v-btn class='btn-active' dark>Cyber security</v-btn>
                    <v-btn text class='btn'>Hacker</v-btn>
                    <v-btn text class='btn'>Blockchain</v-btn>
                    <v-btn text class='btn'>News</v-btn>
                    <v-btn text class='btn'>Password</v-btn>
                    <v-btn text class='btn'>Security</v-btn>
                    <v-btn text class='btn'>SafetySupport</v-btn>
                    <v-btn text class='btn'>Service</v-btn>
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
    
}
.btn{
    padding: 1rem !important;
    text-transform: none !important;
    border-radius: 0 !important;
    border: 1px solid black;
    
    &-active{
        @extend .btn;
        background-color: black !important;
    }
}
.content{
    margin: 0 10vw;
    &-img{
        text-align: center;
        max-width: 80vw;
        margin-left: auto;
        margin-right: auto;
    }
}

.header{
    background-color: black;
    color: white;
    height: 20rem;
    padding: 3rem 0;
    margin-bottom: 6rem;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

  
}

.left{
   width: 30vw;
   &-grey{
    background-color: #BDBDBD;
    height: 9rem;
    width: 10rem;
    border-radius: 10px;
   }
   &-posts{
    display: flex;
    align-items: center;
    text-align: start;
    margin-bottom: 1rem;
   }
}
    
</style>