<template>
    <section class="hidden-sm-and-down">
        <div class="map-header">
            <GmapMap
            :center="center"
            :zoom="18"
            map-type-id="terrain"
            style="width: 100%; height: 100%;"
            >
                <GmapMarker
                    :position="product.location"
                    :clickable="true"
                    @click="center=product.location"
                />
            </GmapMap>
        </div>
        <div class="content-frame">
            <h1>{{this.product.name}} - <span style="color:#2ECC71;">{{this.product.price ? this.product.price.toLocaleString() : ' '}}</span> THB / NIGHT</h1>
            <div class="content-detail">{{this.product.detail}}</div>
            <div class="button-frame">
                <router-link tag="div" :to="'/reserve/' + this.product._id" class="button-text">
                    <i class="material-icons icon-button" style="margin-right: 10px;">hotel</i>Book Now <span class="icon-button"> :D </span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'

var _this

export default {
    mounted() {
        _this = this
        setTimeout(() => {
            _this.setCenterMap()
        }, 500);
    },
    data () {
        return {
            center: {lat: 0, lng: 0}
        }
    },
    methods: {
        setCenterMap() {
            this.center = this.product.location
        }
    },
    computed: {
        ...mapState(['product']),
        ...mapState(['auth'])
    }
}
</script> 

<style scoped>

.map-header {
    width: 100%;
    height: 20rem;
    margin-bottom: 2rem;
}

.content-frame {
    color:  #34495E;
    width: 100%;
    height: 100%;
    padding: 0rem 2rem;
    margin-bottom: 2rem;
}

.content-frame h1 {
    font-size: 1.7rem;
}

.content-detail {
    margin-top: 1rem;
    text-indent: 50px;
}

.button-frame {
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;
    margin-top: 4rem;
}

.button-text {
    font-weight: 700;
    background-color: #1ABC9C;
    color: #ffff;
    width: 12rem;
    height: 3.5rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
}

.button-text:hover .icon-button {
    display: block;
    transition: 0.3s;
}

.button-text:hover {
    width: 15rem;
    transition: 0.3s;
}

.icon-button {
    display: none;
    margin-left: 10px;
}

</style>
