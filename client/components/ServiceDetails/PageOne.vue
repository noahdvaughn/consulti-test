<template lang="">
    <div class='main'>
        <div class='header'>
            <h2>Competative Analysis</h2>
            <p>Read more about us. Our vission, mission, success and many other you might love</p>
            <p class='p4'> Home > Services > Competative Analysis</p>
        </div>

    <div class='content d-block d-md-flex'  >
        <div class='left'>
            <p class='left-head p1'>Services</p>
            <p class='left-item p3'>Competitive Analysis</p>
            <p class='left-item p3'>Strategic Planning</p>
            <p class='left-item p3'>Marketing Strategy</p>
            <p class='left-item p3'>Problem SolvingQuality</p>
            <p class='left-item p3'>Business Consulting</p>
            <p class='left-item p3'>Audit & Evaluation</p>
            <p class='left-item p3'>Digital Marketing</p>
            <p class='left-item p3'>Boost SEO Ranking</p>
            <p class='left-tail p3'>Daily Reports</p>

        </div>
        <div class='right'>
            <div class='right-grey'></div>
            <p>As independent wealth planners, we can work with you in a clear, transparent partnership, and offer you objective, comprehensive advice.
            </p>
            <p>
                No matter how complex your finances or personal situation, we have the expertise and market-leading tools at our disposal to provide you with sophisticated and forward-thinking advice, tailored precisely to your needs.
            </p>
            <p>
                Your personal wealth adviser will consider your finances as a whole to ensure your plans, savings and investments are working hard, and harmoniously together, to achieve your objectives both now and in the future.
            </p>

            <p class='right-why p1'>Why this service is important</p>

            <div class='right-service'>
                <img class='right-icon' src='@/assets/investmenticon.png'/>
                <p><span class='right-title'>Investment management:</span> Our expert Investment Managers can run a personalised investment portfolio on your behaldor support you in making your own investment decisions</p>
            </div>
            <div class='right-service'>
                <img class='right-icon' src='@/assets/personalicon.png'/>
                <p><span class='right-title'>Personal wealth planning:</span> Our independent Wealth Planners can help manage all aspects of your finances and investments meet your financial goals now and in later life.</p>
            </div>
            <div class='right-service'>
                <img class='right-icon' src='@/assets/fraudicon.png'/>
                <p><span class='right-title'>Protect yourself from fraud:</span> We are aware that fraudsters are ising the Canaccord Genuity name, some of the measures you can take to protect you and your money from fraud.</p>
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
    margin-bottom: 10rem;
   
    
}
.content{
    margin: 0 10vw;
    display: flex;
    justify-content: space-between;
}

.header{
    background-color: black;
    color: white;
    height: 352px;
    padding: 3rem 0;
    margin-bottom: 6rem;
    
    max-width: 100vw ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}

.left{
    border-radius: 0.5rem;
    width: 391px;
    height: 869px;
    max-width: 80vw;
    box-shadow: 0 4px 1px 0 rgba(0, 0, 0, 0.1), 0 3px 50px 0 rgba(0, 0, 0, 0.1);
    &-head{
        background-color: black;
        color: white;
        padding: 1rem 1rem;

        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        font-family: 'Inter';
    }

    &-item{
        border-bottom: 1px solid black;
        font-weight: 500;
        height: 86px;
        padding: 30px 20px;
        margin: 0;
        font-family: "Inter";

    }
    &-tail{
        font-weight: 500;
        padding: 2rem 1rem;
        font-family: "Inter";

    }
   
}
.right{
    width: 711px;
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p{
        margin-bottom: 3rem !important;
    }

    &-grey{
        max-width: 80vw;
        width: 705px;
        
        height: 522px;
        background-color: #BDBDBD;
        margin-bottom: 3rem;
        border-radius: 1rem;
    }
    &-title{
        font-size: 1.2rem !important;
        font-weight: 900;
    }
    &-service{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        // margin: 2rem 0;
        // margin-top: 1rem;
    }
    &-icon{
        object-fit: contain;
        margin-right: 1rem;
    }
    &-why{
        margin-bottom: 2rem;
    }
}
    
</style>