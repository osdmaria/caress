import Vue from "vue";
import Vuetify from "/node_modules/vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                LightPink: "#E3BEC6",
                DarkBlue: "#1572A1",
                CremyColor: "#EFDAD7",
                LightBlue: "#9AD0EC",
            }

        }
    }
});
