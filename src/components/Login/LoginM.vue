<template>
    <section class="hidden-md-and-up hidden-xs-only">
        <div class="login-frame">
            <router-link tag="div" to="/" class="close-login">
                x
            </router-link>
            <div class="login-content">
                <router-link tag="div" to="/" class="icon-header">
                    <div class="icon-header-pic">
                        <i class="material-icons" style="font-size: 2.5rem;">hotel</i>
                    </div>
                    Hostel Management
                </router-link>
                <div class="input-frame">
                    <i class="material-icons icon-input">person</i>
                    <input class="input-data-username" type="text" placeholder="Username" v-model="username" />
                </div>
                <div class="input-frame">
                    <i class="material-icons icon-input">vpn_key</i>
                    <input class="input-data-password" :type="showPassword ? 'text' : 'password'" placeholder="Password" v-model="password" />
                    <i v-if="showPassword" @click="showPassword = false" class="material-icons icon-password">visibility</i>
                    <i v-else @click="showPassword = true" class="material-icons icon-password">visibility_off</i>
                </div>
                <div class="register-text">
                    Join with us
                </div>
                <div class="login-button-frame">
                    <div class="login-button">
                        LOGIN
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
            showPassword: false
        }
    }
}
</script>

<style scoped>

.close-login {
    position: absolute;
    top: 1rem;
    right: 5rem;
    color: #E67E22;
    font-weight: 700;
    font-size: 2rem;
    cursor: pointer;
}

.login-frame {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-content {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon-header {
    display: flex;
    align-items: center;
    color: #E67E22;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.7rem;
    margin-bottom: 2rem;
}

.icon-header-pic {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
}

.input-frame {
    display: flex;
    width: 100%;
    margin-top: 1.5rem;
    height: 2.85rem;
}

.icon-input {
    width: 3rem;
    color: #E67E22;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #E67E22;
    border-top: 1px solid #E67E22;
    border-left: 1px solid #E67E22;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.input-data-username {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #E67E22;
    border-top: 1px solid #E67E22;
    border-right: 1px solid #E67E22;
    color: #E67E22;
    padding: 7px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    outline: none;
}

.input-data-password {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #E67E22;
    border-top: 1px solid #E67E22;
    color: #E67E22;
    padding: 7px;
    outline: none;
}

::placeholder {
    color: #E67E22;
}

.icon-password {
    color: #E67E22;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    border-right: 1px solid #E67E22;
    border-bottom: 1px solid #E67E22;
    border-top: 1px solid #E67E22;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    user-select: none;
}

.register-text {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    color: #E67E22;
    margin-top: 4px;
    cursor: pointer;
    user-select: none;
}

.login-button-frame {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}

.login-button {
    background-color: #E67E22;
    color: #ffff;
    font-weight: 700;
    width: 100%;
    height: 2.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    cursor: pointer;
}

</style>