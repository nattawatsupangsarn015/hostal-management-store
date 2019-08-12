<template>
    <section class="hidden-sm-and-down">
        <div class="header-image">
            <img class="image-content" src="../../assets/header.jpg" alt="header-image" />
            <div class="header-text">
                Hostel Management
            </div>
        </div>
        <div class="content-position">
            <div class="content-frame">
                <div class="content-set-size" v-for="(item, index) in this.products" :key="index">
                    <div class="sold-out" v-if="!item.allotment">SOLD OUT</div>
                    <router-link tag="div" :to="'/product/' + item._id" class="content-data">
                        <h1>{{item.name}}</h1>
                        <div class="content-detail">
                            {{item.detail}}
                        </div>
                        <div class="content-price">
                            <span style="margin-right: 5px; font-weight: 700;">{{item.price ? item.price.toLocaleString() : ' '}}</span> THB
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['products'])
    }
}
</script>

<style scoped>

.header-image {
    position: relative;
    width: 100%;
    height: 20rem;
    margin-bottom: 2rem;
}

.image-content {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.header-text {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    font-size: 2rem;
    color: #E67E22;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
}

.content-position {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 30vh;
}

.content-frame {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 85%;
}

.content-set-size {
    position: relative;
    width: 25%;
    padding: 1rem;
    margin-bottom: 1rem;
}

.sold-out {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-weight: 700;
    color: #ffff;
    background-color: rgb(231, 76, 60, 0.9);
    width: 40%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
}

.content-data {
    width: 100%;
    height: 100%;
    border: 2px solid #9B59B6;
    padding: 0.6rem;
    color: #9B59B6;
    border-radius: 1rem;
    box-shadow: 1px 1px 2px 0px;
    user-select: none;
    cursor: pointer;
}

.content-data h1 {
    line-height: 1.7em;
    max-height: 3.4em;
    min-height: 3.4em;
}

.content-data:hover {
    box-shadow: 1px 1px 4px 1px #8E44AD;
    background-color: #9B59B6;
    color: #ffff;
    transition: 0.3s;
}

.content-data:active {
    box-shadow: 1px 1px 6px 1px #8E44AD;
    background-color: #9B59B6;
    color: #ffff;
}

.content-detail {
    font-size: 13px;
    margin-top: 5px;
    line-height: 1.7em;
    max-height: 5.1em;
    min-height: 5.1em;
    overflow: hidden;
}

.content-price {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 5px 0rem;
}

</style>