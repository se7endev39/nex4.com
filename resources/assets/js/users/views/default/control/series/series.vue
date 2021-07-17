<template>
    <div class="xjkax">
        <div class="top-item" v-if="data.top !== null">
            <carousel class="list-carousel" navigationPrevLabel='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="100%" class="arrow-right-svg"><g><g>
                                                            <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>
                                                          </g></g> </svg>' navigationNextLabel='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="100%" class="arrow-left-svg"><g transform="matrix(-1 1.22465e-16 -1.22465e-16 -1 129 129)"><g>
                                                            <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>
                                                          </g></g> </svg>' :navigationEnabled="true" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="5000" easing="ease-in-out" :perPageCustom="[[220,1], [420,1],[768, 1], [1024, 1]]">
                <slide v-for="(item,index) in data.top" :key="index">

                    <div class="top-item__film-cover" v-if="item.type === 'series'">
                        <div class="gradient"></div>
                        <img :src="'/storage/backdrops/original_' + item.backdrop" :alt="item.name" width="100%" class="backdrop" v-if="item.cloud == 'local' ">
                        <img :src=" lg_backdrop + item.backdrop" :alt="item.name" width="100%" class="backdrop" v-if="item.cloud == 'aws' ">
                        <router-link :to="{name: 'show-movie', params:{id: item.id}}">
                            <div class="top-item__film-ovarlay">

                                <div class="top-item__film-details">

                                    <div class="hidden-sm-down poster">
                                        <img :src="'/storage/posters/300_' + item.poster" :alt="item.name" class="poster" v-if="item.cloud == 'local'">
                                        <img :src=" sm_poster + item.poster" :alt="item.name" class="poster" v-if="item.cloud == 'aws'">
                                        </div>

                                        <div class="title">
                                            <h2>
                                                <strong>{{item.name}}</strong>
                                            </h2>
                                            <div class="text-center row margin-left-auto">
                                                <div class="stars" v-for="index in parseInt(item.rate/2 + parseInt(item.rate)%2)" :key="index">
                                                    <div class="row margin-left-auto margin-right-1">
                                                        <img src="/themes/default/img/favor.svg" alt="favor" width="17px"  height="17px" v-if="item.cloud == 'local'">
                                                    </div>
                                                </div>
                                                <div class="stars" v-for="index in parseInt(6-item.rate/2-parseInt(item.rate)%2)" :key="'A'+index">
                                                    <div class="row margin-left-auto margin-right-1">
                                                        <img src="/themes/default/img/infavor.svg" alt="favor" width="17px"  height="17px" v-if="item.cloud == 'local'">
                                                    </div>
                                                </div>
                                                <p style="margin-left:4px;font-size:20px;">{{item.rate}}</p>
                                                <div class="control">
                                            <div class="btn-group">

                                                <router-link role="button" class="btn btn-sm btn-warning" :to="{name: 'movie-player', params: {id: item.id}}">
                                                    {{$t('home.play')}}

                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 191.255 191.255"
                                                        style="enable-background:new 0 0 191.255 191.255;" xml:space="preserve"
                                                        width="100%" class="top-play-svg">
                                                        <g>
                                                            <path d="M162.929,66.612c-2.814-1.754-6.514-0.896-8.267,1.917s-0.895,6.513,1.917,8.266c6.544,4.081,10.45,11.121,10.45,18.833  s-3.906,14.752-10.45,18.833l-98.417,61.365c-6.943,4.329-15.359,4.542-22.512,0.573c-7.154-3.97-11.425-11.225-11.425-19.406  V34.262c0-8.181,4.271-15.436,11.425-19.406c7.153-3.969,15.569-3.756,22.512,0.573l57.292,35.723  c2.813,1.752,6.513,0.895,8.267-1.917c1.753-2.812,0.895-6.513-1.917-8.266L64.512,5.247c-10.696-6.669-23.661-7-34.685-0.883  C18.806,10.48,12.226,21.657,12.226,34.262v122.73c0,12.605,6.58,23.782,17.602,29.898c5.25,2.913,10.939,4.364,16.616,4.364  c6.241,0,12.467-1.754,18.068-5.247l98.417-61.365c10.082-6.287,16.101-17.133,16.101-29.015S173.011,72.899,162.929,66.612z"
                                                                data-original="#000000" class="active-path" data-old_color="#ffffff"
                                                                fill="#ffffff" />
                                                        </g>
                                                    </svg>

                                                </router-link>

                                                <button class="btn btn-sm btn-plus btn-circle btn-success ml-1"
                                                        v-if="! item.is_favorite"
                                                        @click.prevent="SHOW_COLLECTION_MODAL(item.id, '/storage/backdrops/600_' + item.backdrop, item.name, 'movie', null, index)">
                                                    {{$t('home.my_list')}}

                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="top-collection-svg"
                                                        x="0px" y="0px" viewBox="0 0 31.444 31.444" style="enable-background:new 0 0 31.444 31.444;"
                                                        xml:space="preserve" width="100%">
                                                        <g>
                                                            <path d="M1.119,16.841c-0.619,0-1.111-0.508-1.111-1.127c0-0.619,0.492-1.111,1.111-1.111h13.475V1.127  C14.595,0.508,15.103,0,15.722,0c0.619,0,1.111,0.508,1.111,1.127v13.476h13.475c0.619,0,1.127,0.492,1.127,1.111  c0,0.619-0.508,1.127-1.127,1.127H16.833v13.476c0,0.619-0.492,1.127-1.111,1.127c-0.619,0-1.127-0.508-1.127-1.127V16.841H1.119z"
                                                                data-original="#ffffff" class="active-path" data-old_color="#ffffff"
                                                                fill="#ffffff" />
                                                        </g>
                                                    </svg>

                                                </button>

                                                <button class="btn btn-sm btn-plus btn-circle btn-danger ml-1"
                                                        v-if="item.is_favorite"
                                                        @click.prevent="DELETE_FROM_COLLECTION(item.id, 'movie', null, index)">
                                                    {{$t('home.my_list')}}

                                                    <svg version="1.1" class="top-collection-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        x="0px" y="0px" viewBox="0 0 511.999 511.999" width="100%" style="enable-background:new 0 0 511.999 511.999;"
                                                        xml:space="preserve">
                                                        <g>
                                                            <g>
                                                                <path d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0
                                                                                        c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136
                                                                                        C513.921,95.666,513.921,83.198,506.231,75.508z"
                                                                    fill="#ffffff" />
                                                            </g>
                                                        </g>

                                                    </svg>

                                                </button>

                                            </div>
                                        </div>
                                            </div>
                                            <div class="row margin-left-auto">
                                                <p class="border-radius-13" v-for="code in (item.genre.split(','))" :key="code.index">{{ code }} </p>
                                            </div>


                                            <!-- <small>{{item.genre}}</small> -->
                                        </div>
                                        <div class="overview">
                                            <p>{{ item.overview | truncate(110, item.overview )}}</p>
                                        </div>



                                    </div>

                                </div>
                        </router-link>

                    </div>

                    <!-- END Top Movie -->

                    <div class="top-item__film-cover" v-if="item.type === 'series'">
                        <div class="gradient"></div>
                        <img :src="'/storage/backdrops/original_' + item.backdrop" :alt="item.name" width="100%" v-if="item.cloud == 'local' ">
                        <img :src=" lg_backdrop + item.backdrop" :alt="item.name" width="100%"  v-if="item.cloud == 'aws' ">
                        <router-link :to="{name: 'show-series', params:{id: item.id}}">
                            <div class="top-item__film-ovarlay">

                                <div class="top-item__film-details">
                                    <div class="hidden-sm-down poster">
                                        <img :src="'/storage/posters/300_' + item.poster" :alt="item.name" class="poster" v-if="item.cloud == 'local'">
                                        <img :src=" sm_poster + item.poster" :alt="item.name" class="poster" v-if="item.cloud == 'aws'">
                                        </div>

                                        <div class="title">
                                            <h2>
                                                <strong>{{item.name}}</strong>
                                            </h2>
                                            <small>{{item.genre}}</small>
                                        </div>
                                        <div class="overview">
                                            <p>{{ item.overview | truncate(110, item.overview )}}</p>
                                        </div>

                                        <div class="control">
                                            <div class="btn-group">

                                                <router-link role="button" class="btn btn-sm btn-warning" :to="{name: 'series-player', params: {series_id: item.id}}">
                                                    {{$t('home.play')}}

                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 191.255 191.255"
                                                        style="enable-background:new 0 0 191.255 191.255;" xml:space="preserve"
                                                        width="100%" class="top-play-svg">
                                                        <g>
                                                            <path d="M162.929,66.612c-2.814-1.754-6.514-0.896-8.267,1.917s-0.895,6.513,1.917,8.266c6.544,4.081,10.45,11.121,10.45,18.833  s-3.906,14.752-10.45,18.833l-98.417,61.365c-6.943,4.329-15.359,4.542-22.512,0.573c-7.154-3.97-11.425-11.225-11.425-19.406  V34.262c0-8.181,4.271-15.436,11.425-19.406c7.153-3.969,15.569-3.756,22.512,0.573l57.292,35.723  c2.813,1.752,6.513,0.895,8.267-1.917c1.753-2.812,0.895-6.513-1.917-8.266L64.512,5.247c-10.696-6.669-23.661-7-34.685-0.883  C18.806,10.48,12.226,21.657,12.226,34.262v122.73c0,12.605,6.58,23.782,17.602,29.898c5.25,2.913,10.939,4.364,16.616,4.364  c6.241,0,12.467-1.754,18.068-5.247l98.417-61.365c10.082-6.287,16.101-17.133,16.101-29.015S173.011,72.899,162.929,66.612z"
                                                                data-original="#000000" class="active-path" data-old_color="#ffffff"
                                                                fill="#ffffff" />
                                                        </g>
                                                    </svg>

                                                </router-link>


                                                <button class="btn btn-sm btn-plus btn-circle btn-success ml-1"
                                                        v-if="! item.is_favorite"
                                                        @click.prevent="SHOW_COLLECTION_MODAL(item.id, '/storage/backdrops/600_' + item.backdrop, item.name, 'movie', null, index)">
                                                    {{$t('home.my_list')}}

                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="top-collection-svg"
                                                        x="0px" y="0px" viewBox="0 0 31.444 31.444" style="enable-background:new 0 0 31.444 31.444;"
                                                        xml:space="preserve" width="100%">
                                                        <g>
                                                            <path d="M1.119,16.841c-0.619,0-1.111-0.508-1.111-1.127c0-0.619,0.492-1.111,1.111-1.111h13.475V1.127  C14.595,0.508,15.103,0,15.722,0c0.619,0,1.111,0.508,1.111,1.127v13.476h13.475c0.619,0,1.127,0.492,1.127,1.111  c0,0.619-0.508,1.127-1.127,1.127H16.833v13.476c0,0.619-0.492,1.127-1.111,1.127c-0.619,0-1.127-0.508-1.127-1.127V16.841H1.119z"
                                                                data-original="#ffffff" class="active-path" data-old_color="#ffffff"
                                                                fill="#ffffff" />
                                                        </g>
                                                    </svg>

                                                </button>

                                                <button class="btn btn-sm btn-plus btn-circle btn-danger ml-1"
                                                        v-if="item.is_favorite"
                                                        @click.prevent="DELETE_FROM_COLLECTION(item.id, 'movie', null, index)">
                                                    {{$t('home.my_list')}}

                                                    <svg version="1.1" class="top-collection-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        x="0px" y="0px" viewBox="0 0 511.999 511.999" width="100%" style="enable-background:new 0 0 511.999 511.999;"
                                                        xml:space="preserve">
                                                        <g>
                                                            <g>
                                                                <path d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0
                                                                                        c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136
                                                                                        C513.921,95.666,513.921,83.198,506.231,75.508z"
                                                                    fill="#ffffff" />
                                                            </g>
                                                        </g>

                                                    </svg>

                                                </button>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                        </router-link>

                    </div>

                    <!-- END Top Series -->

                </slide>
            </carousel>

        </div>
        <div class="col-12 series-page">

            <div class="loader" v-if="loading">
                <loader></loader>
            </div>

            <!-- END Loader -->


            <collection-modal @hideModalCollectionCancel="HIDE_COLLECTION_MODAL_CANCEL"
                              @hideModalCollectionSave="HIDE_COLLECTION_MODAL_SAVE"
                              :id="collection.id" :poster="collection.poster" :name="collection.name"
                              :type="collection.type" :index="collection.index"></collection-modal>

            <!-- END Collection component -->

            <div class="col-12 sort text-right" v-if="$auth.isAuthenticated() === 'active' ">

                <div class="btn-group">
                    <div class="dropdown ml-1">
                        <button class="btn btn-sm btn-secondary btn-blue" id="dropdownTrendingButton"
                                data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            {{$t(trendingActiveTranslate)}}
                        </button>

                        <div class="dropdown-menu  dropdown-menu-right" aria-labelledby="dropdownTrendingButton">
                            <a class="dropdown-item" v-for="(item,index) in trendingList" :key="index"
                               :class="{'active': activeTrending == item.value}"
                               @click="activeTrending = item.value; trendingActiveTranslate = item.translate">{{$t(item.translate)}}</a>
                        </div>

                    </div>
                    <div class="dropdown ml-1">
                        <button class="btn  btn-sm btn-secondary btn-blue mr-1" id="dropdownGenreButton"
                                data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            {{$t(genreActiveTranslate)}}
                        </button>

                        <div class="dropdown-menu  dropdown-menu-right" aria-labelledby="dropdownGenreButton">
                            <a class="dropdown-item" v-for="(item, index) in genreList" :key="index"
                               :class="{'active': activeGenre == item.name}"
                               @click="activeGenre = item.name">{{item.name}}</a>
                        </div>

                    </div>
                </div>

            </div>

            <hr>


            <div class="col-12" v-if="data.series !== null">

                <div class="row">

                    <div class="col-6 col-md-4 col-lg-3 col-xl-1-5 col-xxl-1-5 p-2 p-md-4"
                         v-for="(item, index) in data.series" :key="index">

                        <transition name="slide-down-fade">

                            <div class="animation" v-show="showSlideUpAnimation">
                                <div class="poster" @mouseover="ACTIVE_SLELECTED_SERIES(item.id)">

                                    <div class="poster__backdrop-image">

                                        <router-link :to="{name: 'show-series', params: {id: item.id}}">

                                            <progressive-img :src="'/storage/posters/600_' + item.poster"
                                                             placeholder="/themes/default/img/loader-image.png"
                                                             :alt="item.name"
                                                             width="100%"
                                                             :aspect-ratio="1.5"
                                                             :blur="0"
                                                             v-if="item.cloud === 'local' "  />

                                            <progressive-img :src=" md_poster + item.poster"
                                                             placeholder="/themes/default/img/loader-image.png"
                                                             :alt="item.name"
                                                             width="100%"
                                                             :aspect-ratio="1.5"
                                                             :blur="0"
                                                             v-if="item.cloud == 'aws' "  />

                                            <transition name="fade">

                                                <div class="poster__backdrop_overlay-info"
                                                     v-if="active_series === item.id ">

                                                    <div class="header pull-right">


                                                        <div class="mt-0">

                                                            <div class="poster__add-collection-icon text-right"
                                                                 v-if="! item.is_favorite">

                                                                <img src="/themes/default/img/infavor.svg" alt="favor" width="100%"  @click.prevent="SHOW_COLLECTION_MODAL(item.id, '/storage/backdrops/600_' + item.backdrop, item.name, 'series', index)"  v-if="item.cloud == 'local'">
                                                                <img src="/themes/default/img/infavor.svg" alt="favor" width="100%"  @click.prevent="SHOW_COLLECTION_MODAL(item.id, md_backdrop + item.backdrop, item.name, 'series', index)" v-if="item.cloud == 'aws'" >

                                                            </div>

                                                            <div class="poster__remove-collection-icon text-right"
                                                                 v-if="item.is_favorite">


                                                                <img src="/themes/default/img/favor.svg" alt="favor" width="100%" @click.prevent="DELETE_FROM_COLLECTION(item.id, 'series', index)" >

                                                            </div>


                                                        </div>


                                                        <!-- END My List -->


                                                        <div class="mt-1">

                                                            <div class="poster__add-like-icon text-right"
                                                                 v-if="! item.is_like">

                                                                <img src="/themes/default/img/dislike.svg" alt="dislike" width="100%" @click.prevent="ADD_NEW_LIKE(item.id, 'series', index, 'add')">

                                                            </div>


                                                            <div class="poster__remove-like-icon  text-right"
                                                                 v-if="item.is_like">

                                                                <img src="/themes/default/img/like.svg" alt="like" width="100%" @click.prevent="ADD_NEW_LIKE(item.id, 'series', index, 'delete')">

                                                            </div>

                                                        </div>

                                                        <!-- END Likes -->


                                                    </div>
                                                    <!-- END Header -->


                                                    <div class="body text-center">


                                                        <div class="play">

                                                            <div v-if="item.already_episode !== 0 && item.already_episode !== null">


                                                                <router-link
                                                                        :to="{name: 'series-player', params: {series_id: item.id}}"
                                                                       >

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                                                                viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;"
                                                                xml:space="preserve" width="100%" class="play-svg">
                                                                <g>
                                                                    <g>
                                                                        <path d="M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392   c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421   S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421   s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z"
                                                                            data-original="#000000" class="active-path" data-old_color="#ffffff"
                                                                            fill="#ffffff" />
                                                                        <path d="M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883   l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333   c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029   C113.877,77.926,111.575,77.902,109.699,78.969z"
                                                                            data-original="#000000" class="active-path" data-old_color="#ffffff"
                                                                            fill="#ffffff" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                                </router-link>



                                                            </div>

                                                            <div v-else>
                                                                <h3>
                                                                    <strong>{{$t('show.soon')}}</strong>
                                                                </h3>
                                                            </div>

                                                        </div>


                                                    </div>

                                                </div>

                                            </transition>
                                        </router-link>

                                    </div>

                                </div>


                                <div class="mt-2">
                                    <p class="ml-2"> {{item.name}} </p>
                                    <div class="row margin-left-auto">
                                        <small class="text-muted ml-2">Adventure</small>
                                        <div class="row margin-left-auto margin-right-2">
                                            <img src="/themes/default/img/favor.svg" alt="favor" width="17px"  height="17px" v-if="item.cloud == 'local'">
                                            <p style="margin-left:4px;">{{item.rate}}</p>
                                        </div>

                                    </div>
                                </div>


                                <div class="progress"
                                     v-if="item.current_time !== null && $auth.isAuthenticated() === 'active' ">
                                    <div class="progress-bar" role="progressbar"
                                         :style="{width: (item.current_time/item.duration_time)*100 +'%'}"
                                         :aria-valuenow="(item.current_time/item.duration_time)*100"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </transition>
                    </div>
                </div>
            </div>

            <div v-else>
                <div class="mt-5 text-center notfound">

                    <h4>
                        <notfound></notfound>

                        <strong>{{$t('home.sorry_no_result')}}</strong>

                    </h4>
                </div>
            </div>

        </div>
    </div>

</template>
<script>
    import {
        mapState
    } from "vuex";
    import collection from '../collection/new.vue';
    import {
        Carousel,
        Slide
    } from "vue-carousel";
    import loader from "../utils/loader"
    import notfound from "../utils/notfound"

    export default {
        name: "series",
        components: {
            Carousel,
            Slide,
            loader,
            notfound,
            'collection-modal': collection
        },

        data() {
            return {
                active: null,
                active_series: null,
                show_item: null,
                root_index_show: null,
                activeGenre: "all",
                activeTrending: 1,
                trendingList: [
                    {
                    value: 1,
                    translate: "home.trending"
                    },
                    {
                        value: 2,
                        translate: "home.year"
                    },
                    {
                        value: 3,
                        translate: "home.rating"
                    },
                    {
                        value: 4,
                        translate: "home.likes"
                    }
                ],
                trendingActiveTranslate: "home.trending",
                genreActiveTranslate: "home.genre",
                collection: {
                    id: null,
                    poster: null,
                    name: null,
                    type: null,
                    index: null,
                },
                showSlideUpAnimation: false,

            };
        },

        computed: mapState({
            data: state => state.series.data,
            genreList: state => state.genres.data,
            sort: state => state.event.sort,
            loading: state => state.series.loading
        }),

        watch: {
            sort() {
                this.$store.dispatch("GET_SERIES_SORT_BY_LIST", {
                    trending: this.sort.trending,
                    genre: this.sort.genre
                })
            },
            activeGenre() {
                this.$store.commit("SET_SORT_BY", {
                    trending: this.activeTrending,
                    genre: this.activeGenre
                });
            },
            activeTrending() {
                this.$store.commit("SET_SORT_BY", {
                    trending: this.activeTrending,
                    genre: this.activeGenre
                });
            }

        },

        mounted() {
            if (this.data.length == 0 || this.data === null) {
                if (this.$auth.isAuthenticated()) {
                    this.$store.dispatch("GET_SERIES_LIST");
                    this.$store.dispatch("GET_ALL_GENRES");
                } else {
                    this.$store.dispatch("GET_GHOST_SERIES_LIST");
                }
            }
            setTimeout(() => {
                this.showSlideUpAnimation = true;
            }, 100);
        },

        methods: {

            // Show modal of collection
            SHOW_COLLECTION_MODAL(id, backdrop, name, type, index) {
                if (this.$auth.isAuthenticated()) {
                    this.collection.id = id;
                    this.collection.poster = backdrop;
                    this.collection.name = name;
                    this.collection.type = type;
                    this.collection.index = index;
                } else {
                    this.$router.push({
                        name: 'login'
                    })
                }
            },

            // Hide modal of collection
            HIDE_COLLECTION_MODAL_CANCEL() {
                if (this.$auth.isAuthenticated()) {
                    this.collection.id = null;
                } else {
                    this.$router.push({
                        name: 'login'
                    })
                }
            },

            // Hide modal and update array
            HIDE_COLLECTION_MODAL_SAVE() {
                if (this.$auth.isAuthenticated()) {
                    this.collection.id = null;
                    this.data.series[this.collection.index].is_favorite = true;
                } else {
                    this.$router.push({
                        name: 'login'
                    })
                }
            },

            // Delete mvoie or series from data array
            DELETE_FROM_COLLECTION(id, type, index, rooindex) {
                if (this.$auth.isAuthenticated()) {
                    this.data.series[index].is_favorite = false;
                    this.$store.dispatch('DELETE_FROM_COLLECTION', {
                        id,
                        type
                    })
                } else {
                    this.$router.push({
                        name: 'login'
                    })
                }
            },


            // Add new like or delete it
            // Params type1 detected if add or delete
            ADD_NEW_LIKE(id, type, index, status) {
                if (this.$auth.isAuthenticated()) {
                    if (status === 'add') {
                        // Add true to data array
                        this.data.series[index].is_like = true;
                        this.$store.dispatch('ADD_LIKE', {
                            id,
                            type
                        })

                    } else {
                        // Add false to data array
                        this.data.series[index].is_like = false;
                        this.$store.dispatch('ADD_LIKE', {
                            id,
                            type
                        })
                    }
                } else {
                    this.$router.push({
                        name: 'login'
                    })
                }
            },


            ACTIVE_SLELECTED_SERIES(id) {
                this.active_series = id;
            },

        },

    };
</script>
