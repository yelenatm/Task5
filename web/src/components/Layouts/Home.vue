<template>
    <section class="main-content">
        <div class="container">
            <div class="row">

                <div class="col-md-12">
                    <h1><strong>Добро пожаловать на мою страницу с любимыми сериалами!</strong></h1>
                </div>
                <div id="demo">
                    <div class="flex">
                    <div class="content" v-for="serial in serials" :key="serial.id">
                        <h7>{{ serial.title }}</h7>
                        <img class="thumbnail" :src="serial.image" v-bind:alt="serial"/>
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

    name: 'home',
    computed: {
        ...mapState({
            user: state => state.user.user
        }),
    },
    mounted() {
    },

    el: '#demo',
    data() {
        return {
            serials: [
                {
                    title: 'Во все тяжкие',
                    image: "https://media1.fdncms.com/saltlake/imager/breaking-bad-season-5-return-date/u/big/2301504/blog9369widea.jpg?cb=1526586408",
                    id: '1'
                },
                {
                    title: 'Нарко',
                    image: "https://66.media.tumblr.com/eec01819a436ff3cc86a1d317cb37c91/tumblr_inline_nw1ukxHal61qjuey1_500.jpg",
                    id: '1'
                },
                {
                    title: 'Корона',
                    image: "https://images-eu.ssl-images-amazon.com/images/I/51nKKt3l16L._SS500.jpg",
                    id: '1'
                },
                {
                    title: 'Аббатство Даунтон',
                    image: "https://direct.rhapsody.com/imageserver/images/Alb.175580825/500x500.jpg",
                    id: '1'
                },
                {
                    title: 'Викинги',
                    image: "https://cdn62.zvooq.com/pic?type=release\u0026id=3320389\u0026size=500x500\u0026ext=jpg",
                    id: '1'
                },
                {
                    title: 'Родина',
                    image: "https://i1.sndcdn.com/artworks-000065871896-mxibcy-t500x500.jpg",
                    id: '1'
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
</style>
