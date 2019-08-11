<template>
    <section class="hidden-sm-and-up">
        <div class="map-header">
            <GmapMap
            :center="center"
            :zoom="7"
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
                <div class="button-text">
                    Book Now
                </div>
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
        ...mapState(['product'])
    }
}
</script> 

<style scoped>

.map-header {
    width: 100%;
    height: 15rem;
    margin-bottom: 3rem;
}

.content-frame {
    color:  #34495E;
    width: 100%;
    height: 100%;
    padding: 0rem 0.7rem;
    margin-bottom: 2rem;
}

.content-frame h1 {
    font-size: 0.9rem;
}

.content-detail {
    margin-top: 1rem;
    text-indent: 50px;
    font-size: 11px;
    letter-spacing: 0.5px;
}

.button-frame {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
}

.button-text {
    font-weight: 700;
    background-color: #1ABC9C;
    color: #ffff;
    width: 5rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    user-select: none;
    cursor: pointer;
}

.icon-button {
    display: block;
    margin-left: 10px;
}

</style>
