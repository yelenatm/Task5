<template>
    <section class="user-action">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <div class="user-block">

                        <h1 class="user-block__header">Забыли пароль</h1>

                        <div class="user-block__content">
                            <form v-on:submit.prevent autocomplete="off">
                                <div
                                    class="form-group"
                                    v-bind:class="{ 'form-group--error': $v.credentials.email.$error, 'form-group--success': !$v.credentials.email.$invalid && $v.credentials.email.$dirty }" >
                                    <label>Восстановить пароль</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="signup-form-email"
                                        aria-describedby="Email"
                                        v-model.trim="credentials.email"
                                        @input="$v.credentials.email.$touch()"
                                    >
                                    <div class="form-group__message" v-if="$v.credentials.email.$error">Пожалуйста, введите Ваш email.</div>
                                </div>

                                <button
                                    id="forgot-submit-button"
                                    class="btn btn-green btn-lg mt-4 btn-block"
                                    @click="submit()"
                                >
                                <span v-if="pending"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></span>
                                <span v-else><i class="fa fa-paper-plane"></i> Восстановить пароль</span>
                                </button>

                                <div class="mt-4 small">
                                    <p>Еще не зарегистрированы? <router-link :to="{name: 'signup'}">Зарегистрироваться.</router-link></p>
                                    <p>Хотите войти в аккаунт? <router-link :to="{name: 'login'}">Войти</router-link></p>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'forgot',
    data () {
        return {
            credentials: {
                email: ''
            },
            pending: false
        }
    },
    methods: {
        async submit () {
            if (this.$v.$invalid) { this.$v.$touch(); return }

            this.pending = true

            const credentials = {
                email: this.credentials.email
            }

            try {
                await this.$store.dispatch('user/userForgot', credentials)
                this.$toasted.success('Пожалуйста, проверьте Ваш email.')
                this.credentials.email = ''
                this.$v.$reset()
                this.$router.push({name: 'home'})
            } catch (error) {
                // Do the same thing even if it fails - so we don't tip off
                // the hackers.
                this.$toasted.success('Пожалуйста, проверьте Ваш email.')
                this.credentials.email = ''
                this.$v.$reset()
                this.$router.push({name: 'home'})
            } finally {
                this.pending = false
            }
        }
    },
    validations: {
        credentials: {
            email: {
                required
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
