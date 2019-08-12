<template>
    <section class="hidden-sm-and-up">
        <div class="content-frame">
            <i @click="$router.go(-1)" class="material-icons icon-back">arrow_back</i>
            <div class="content-card">
                <div class="card-right">
                    <h1>Join with us :)</h1>
                    <div class="input-frame">
                        <input class="input-data" type="text" placeholder="Username" v-model="username" />
                        <div class="input-password-frame">
                            <input class="input-data" style="margin: 0;" :type="showPassword ? 'text' : 'password'" placeholder="Password" v-model="password"/>
                            <i v-if="showPassword" @click="showPassword = false" class="material-icons icon-password">visibility</i>
                            <i v-else @click="showPassword = true" class="material-icons icon-password">visibility_off</i>
                        </div>
                        <input class="input-data" type="text" placeholder="Birth day *ex dd-mm-yy" v-model="birthDay" />
                        <div class="input-password-frame">
                            <input class="input-data" style="margin: 0;"  :type="confirmShowPassword ? 'text' : 'password'" placeholder="Confirm password" v-model="confirmPassword" />
                            <i v-if="confirmShowPassword" @click="confirmShowPassword = false" class="material-icons icon-password">visibility</i>
                            <i v-else @click="confirmShowPassword = true" class="material-icons icon-password">visibility_off</i>
                        </div>
                        <input class="input-data" type="text" placeholder="Name" v-model="name" />
                        <input class="input-data" type="text" placeholder="Last name" v-model="lastName" />
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
    top: 10px;
    left: 10px;
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
    width: 95%;
    height: 100%;
    display: flex;
}

.card-right {
    color: #E67E22;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card-right h1 {
    margin-bottom: 2rem;
    font-size: 1.7rem;
}

.input-frame {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 90%;
    flex-wrap: wrap;
}

.input-password-frame {
    position: relative;
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
}

.input-data {
    color: #2C3E50;
    width: 100%;
    height: 2.3rem;
    background: #fff;
    padding: 5px;
    border: 1px solid #E67E22;
    border-radius: 1rem;
    outline: none;
    margin-bottom: 1rem;
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
    height: 100%;
    position: absolute;
    right: 1rem;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>