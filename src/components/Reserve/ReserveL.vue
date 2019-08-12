<template>
    <section class="hidden-sm-and-down">
        <div class="content-position">
            <div class="content-frame">
                <h1 style="font-size: 1.7rem;">Confirm your information</h1>
                <div class="input-frame">
                    <input class="input-data" type="text" v-model="name" placeholder="Name" />
                    <input class="input-data" type="text" v-model="lastName" placeholder="Last name" />
                </div>
                <div class="input-frame">
                    <input class="input-data" type="text" v-model="email" placeholder="Email" />
                    <input class="input-data" type="text" v-model="birthDay" placeholder="Birth day ex(dd-mm-yy)" />
                </div>
                <div class="input-frame">
                    <div class="input-data" style="border: 0px;">
                        <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="dateTravel"
                                label="Pick your date travel."
                                prepend-icon="event"
                                readonly
                                v-on="on"
                                color="#2980B9"
                            ></v-text-field>
                            </template>
                            <v-date-picker :min="this.date" color="#2980B9" v-model="dateTravel" @input="menu = false"></v-date-picker>
                        </v-menu>
                    </div>
                    <div class="input-data" style="border: 0px;">
                        <div class="amount-person">
                            <i @click="removeFunc()" class="material-icons icon-amount" style="background-color: #E74C3C;">remove</i>
                            {{this.amount}}
                            <i @click="addFunc()" class="material-icons icon-amount" style="background-color: #1ABC9C;">add</i>
                        </div>
                    </div>
                </div>
                <div class="input-frame">
                    <div class="total-price">Total price: <span style="color: #E67E22; font-weight: 700;">{{(this.product.price * this.amount) ? (this.product.price * this.amount).toLocaleString() : '0'}}</span> THB</div>
                    <div @click="bookFunc()" class="book-button">Book Now</div>
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
        if(this.auth){
            _this.parseJwt(this.auth)
        }
    },
    data() {
        return {
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            name: "",
            lastName: "",
            birthDay: "",
            email: "",
            amount: 1,
            price: 0,
            dateTravel: new Date().toISOString().substr(0, 10),
            userId: ""
        }
    },
    methods: {
        parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            this.userId = JSON.parse(jsonPayload).userId
            this.name = JSON.parse(jsonPayload).name
            this.lastName = JSON.parse(jsonPayload).lastName
            this.email = JSON.parse(jsonPayload).email
            this.birthDay = JSON.parse(jsonPayload).birthDay
        },
        addFunc() {
            this.amount++
        },
        removeFunc() {
            if(this.amount - 1 ) this.amount--
        },
        bookFunc() {
            if(this.product.allotment < this.amount){
                alert('Your booking exceeds our remaining seats.')
            }
            else {
                this.allotment = this.product.allotment - this.amount
                this.price = this.amount * this.product.price
                this.$store.commit('CREATE_BOOKING', {data: {
                    userId: this.userId,
                    productId: this.product._id,
                    allotment: this.allotment,
                    name: this.name,
                    lastName: this.lastName,
                    email: this.email,
                    birthDay: this.birthDay,
                    dateTravel: this.dateTravel,
                    amount: this.amount,
                    price: this.price
                }})
            }
        }
    },
    computed: {
        ...mapState(['product']),
        ...mapState(['auth'])
    }
}
</script>

<style scoped>

.content-position {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-frame {
    margin-top: 2rem;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #2980B9;
    padding: 2rem;
    border-radius: 2rem;
}

.input-frame {
    margin-top: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.input-data {
    width: 48%;
    border: 1px solid;
    border-radius: 1rem;
    padding: 8px;
    outline: none;
}

.amount-person {
    font-size: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
}

.icon-amount {
    cursor: pointer;
    user-select: none;
    color: #fff;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.date-travel-frame {
    width: 100%;
}

.total-price {
    font-size: 1.2rem;
}

.book-button {
    font-weight: 700;
    background-color: #1ABC9C;
    color: #ffff;
    width: 9rem;
    height: 2.5rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
}

</style>
