<template>
    <section class="hidden-sm-and-down">
        <div class="content-frame">
            <i @click="$router.go(-1)" class="material-icons icon-back">arrow_back</i>
            <div class="content-card">
                <div class="card-left">
                    <router-link tag="div" to="/" class="icon-logo" >
                        <i class="material-icons" style="margin-right: 1rem; font-size: 4rem;">hotel</i>
                        Hostel Management
                    </router-link>
                </div>
                <div class="card-right">
                    <h1>Join with us :)</h1>
                    <div class="input-frame">
                        <input class="input-data" type="text" placeholder="Username" v-model="username" />
                        <input class="input-data" :type="showPassword ? 'text' : 'password'" placeholder="Password" v-model="password"/>
                        <i v-if="showPassword" @click="showPassword = false" class="material-icons icon-password">visibility</i>
                        <i v-else @click="showPassword = true" class="material-icons icon-password">visibility_off</i>
                    </div>
                    <div class="input-frame">
                        <input class="input-data" type="text" placeholder="Birth day *ex dd-mm-yy" v-model="birthDay" />
                        <input class="input-data" :type="confirmShowPassword ? 'text' : 'password'" placeholder="Confirm password" v-model="confirmPassword" />
                        <i v-if="confirmShowPassword" @click="confirmShowPassword = false" class="material-icons icon-password">visibility</i>
                        <i v-else @click="confirmShowPassword = true" class="material-icons icon-password">visibility_off</i>
                    </div>
                    <div class="input-frame">
                        <input class="input-data" type="text" placeholder="Name" v-model="name" />
                        <input class="input-data" type="text" placeholder="Last name" v-model="lastName" />
                    </div>
                    <div class="input-frame">
                        <input class="input-data" type="text" placeholder="Email" v-model="email" />
                    </div>
                    <div class="register-button-frame">
                        <div @click="registerFunc()" class="register-button">
                            Register
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            confirmPassword: "",
            name: "",
            lastName: "",
            email: "",
            birthDay: "",
            showPassword: false,
            confirmShowPassword: false
        }
    },
    methods: {
        registerFunc() {
            if(this.password !== this.confirmPassword) {
                alert("Your password don't match with your confirm password.")
            }
            else if(this.username && this.password && this.name && this.lastName && this.email && this.birthDay){
                this.$store.commit('REGISTER_USER', {
                    username: this.username,
                    password: this.password,
                    name: this.name,
                    lastName: this.lastName,
                    email: this.email,
                    birthDay: this.birthDay
                })
            }
            else {
                alert('Please complete your field.')
            }
        }
    }
}
</script>

<style scoped>

.icon-back {
    position: absolute;
    top: 3rem;
    left: 3rem;
    font-size: 2rem;
    color: #E67E22;
    cursor: pointer;
}

.content-frame {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content-card {
    width: 72%;
    height: 60%;
    display: flex;
}

.card-left {
    background-color: #E67E22;
    font-size: 1.6rem;
    color: #ffff;
    width: 50%;
    height: 100%;
    border-left: 2px solid #E67E22;
    border-top: 2px solid #E67E22;
    border-bottom: 2px solid #E67E22;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.card-right {
    color: #E67E22;
    width: 50%;
    height: 100%;
    border-right: 2px solid #E67E22;
    border-top: 2px solid #E67E22;
    border-bottom: 2px solid #E67E22;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card-right h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
}

.input-frame {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 90%;
}

.input-data {
    color: #2C3E50;
    width: 45%;
    height: 2.3rem;
    background: #fff;
    padding: 5px;
    border: 1px solid #E67E22;
    border-radius: 1rem;
    outline: none;
}

::placeholder {
    color: #BDC3C7;
}

.register-button-frame {
    margin-top: 1rem;
}

.register-button {
    color: #ffff;
    background-color: #E67E22;
    font-weight: 700;
    width: 10rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    cursor: pointer;
}

.icon-password {
    position: absolute;
    right: 1rem;
    cursor: pointer;
    user-select: none;
}

</style>