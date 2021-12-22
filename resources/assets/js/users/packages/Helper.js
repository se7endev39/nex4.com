import router from './Routes';

export default function (Vue) {

    Vue.helper = {
        back() {
            router.go(-1);
        },

        home() {
            router.push({name: 'discover'});
        },
        set_caption(caption) {
            localStorage.setItem('caption', caption);
        },
        client_secret() {
            return '2mujsVvDNyq6abf7VXRiFp58WlNmKDobM2s8Z5wz';
			
        },
        // braintree sandbox/production key
        sandbox_key() {
           // return 'sandbox_74by38tp_z9s82h8kcpwy7fvz';
			return 'production_76qxzt3t_n25s4cy7yj2bmcb6';
        },
        current_theme() {
            const theme = document.body.firstElementChild.className;
            if(theme !== undefined){
                return theme;
            }
        },
        //Get token and check it
        getIntGatewayStatus(request) {
            const data = JSON.parse(localStorage.getItem('_site_info'))
            if (request === 'int_gateway') {
                return data.int_gateway;
            }

        }
    };
    //make auth global
    Object.defineProperties(Vue.prototype, {
        $Helper: {
            get: () => {
                return Vue.helper;
            }
        }
    });
}
