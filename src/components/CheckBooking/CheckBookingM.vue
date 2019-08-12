<template>
    <section class="hidden-md-and-up hidden-xs-only">
         <div class="content-position">
            <div class="content-frame">
                <div class="content-set-size" v-for="(item, index) in this.booking" :key="index">
                    <div class="content-data">
                        <div class="header-data">
                            <i class="material-icons" style="font-size: 1.7rem; margin-right: 1rem;">hotel</i> 
                            <h1>Booking Number: {{item.bookingNumber}}</h1>
                        </div>
                        <div class="info-frame">
                            <div class="info-text">
                                {{item.name}}
                            </div>
                            <div class="info-text">
                                {{item.lastName}}
                            </div>
                        </div>
                        <div class="info-frame">
                            <div class="info-text">
                                Birthday: {{item.birthDay}}
                            </div>
                            <div class="info-text">
                                Amount: {{item.amount}} person
                            </div>
                        </div>
                        <div class="travel-date">
                            Booking date: {{item.dateTravel}}
                        </div>
                        <div class="content-price">
                            Total price: <span style="margin-left: 5px; margin-right: 5px; font-weight: 700;">{{item.price ? item.price.toLocaleString() : ' '}}</span> THB
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['booking'])
    }
}
</script>

<style scoped>

.content-frame {
    width: 95%;
    min-height: calc((100vh - 80px) - 4rem);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}

.header-data {
    display: flex;
    align-items: center; 
    margin-bottom: 2rem;
}

.content-position {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 30vh;
}

.content-set-size {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
}

.content-data {
    width: 100%;
    height: 100%;
    border: 2px solid #9B59B6;
    box-shadow: 1px 1px 3px 1px #8E44AD;
    padding: 0.6rem;
    background-color: #9B59B6;
    color: #ffff;
    border-radius: 1rem;
    user-select: none;
}

.info-frame {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
}

.info-text {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.content-price {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 5px 0rem;
}

</style>
