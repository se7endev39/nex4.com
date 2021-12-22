let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/assets/js/users/app.js', 'public/js')
    .js('resources/assets/js/admin/app.js', 'public/js/admin-js/')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .extract([
        'vue-echo',
        'chart.js',
        'pusher-js',
        'vue2-editor',
        'v-tooltip',
        'vue-slider-component',
        'vuejs-datepicker',
    ]);

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery']
});

mix.webpackConfig({
    node: {
        fs: 'empty'
    }
});

