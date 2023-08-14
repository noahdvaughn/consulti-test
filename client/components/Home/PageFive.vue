<template lang="">
    <div class='main d-block'>
        <h1 class='header-h1'><span class='some'>Some</span> Words From Clients</h1>
        <p class='header-p'>No need to trust our words. Take a loog what our previous clients deedback about CONSULTI</p>
        <div class='feedback d-block d-md-flex'>

            <div class='card'>
                <div class='card-circle'></div>
                <p>“I just simply love tools that make my life easier! I have everything that I need in one place, and that allows our team to be more organized and user-oriented.”</p>
                <div>
                    <h4>Jenny Wilson</h4>
                    <p>Project Manager at Microsoft</p>
                </div>
            </div>
            <div class='card card-shadow'>
                <div class='card-circle'></div>
                <p>“I really like that I can have all in one place: I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website and create dynamic page content”</p>
                <div>
                    <h4>Robert Fox</h4>
                    <p>Founder at Brain.co</p>
                </div>
            </div>
            <div class='card'>
                <div class='card-circle'></div>
                <p>“Very easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.”</p>

                <div>
                    <h4>Kristin Watson</h4>
                    <p>UX Designer at Google</p>

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
.some{
    position: relative;
    display: inline-block;
    z-index: 1;

}
.some:before{
    background-image: url('@/assets/star.svg');
    background-size: contain;
    display: block;
    position: absolute;
    top: -20px;
    right: 70px;
    height: 6rem;
    width: 6rem;
    z-index: -1;
    content: '';

}
.feedback{
    justify-content: center;
    margin-top: 5rem;
}
.main{
text-align: center;
margin-left: auto;
margin-right: auto;
padding-bottom: 10rem;
}
.header-h1{
    margin-bottom: 2rem;
    font-size: 3rem;
}
.header-p{
    text-align: center;
    width: 40vw;
    margin: auto;
}

.card{
    height: 30rem;
    width: 25rem;
    max-width: 100vw;
    text-align: center;
    padding: 2rem 5rem;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-circle{
        height: 90px;
        width: 90px;
        background-color: #BDBDBD;
        border-radius: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    &-shadow{
        box-shadow: 0 4px 1px 0 rgba(0, 0, 0, 0.1), 0 3px 50px 0 rgba(0, 0, 0, 0.1);
    }
}

    
</style>