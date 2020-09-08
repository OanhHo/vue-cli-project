import Vue from "vue";
import { extend, localize } from "vee-validate";
import { required, email, min, max} from "vee-validate/dist/rules";
import vi from "vee-validate/dist/locale/vi.json";
import en from "vee-validate/dist/locale/en.json";

// Install required rule.
extend("required", required);

// Install email rule.
extend("email", email);

// Install min rule.
extend("min", min);

//install max rule
extend("max",max);

//install positive rule
extend('positive', {
    validate: value => {
        return value >= 0;
    }
});

// //minmax rule
// extend('minmax', {
//     validate(minmax, { min, max }) {
//         return minmax.length >= min && minmax.length <= max;
//     },
//     params: ['min', 'max'],
//     message: 'Field is not a valid'
// });

// Install English and Vietnam localizations.
localize({
    en: {
        messages: en.messages,
        names: {
            email: "E-mail Address",
            password: "Password",
            age: "age",
            phone: "Phone Number"
        },
        fields: {
            password: {
                min: "{_field_} is too short, you want to get hacked?"
            },
            phone: {
                max: "{_field_} of 10 mumber"
            },
            age: {
                positive: "The {_field_} field must be a positive number"
            }
        }
    },
    vi: {
        messages: vi.messages,
        names: {
            email: "Địa chỉ email",
            password: "Mật khẩu",
            age:"Tuổi",
            phone: "Số điện thoại"
        },
        fields: {
            password: {
                min: "{_field_} quá ngắn, bạn có muốn thay đổi?"
            },
            phone: {
                max: "{_field_} gồm 10 số"
            },
            age: {
                positive: "{_field_} phải là số lớn hơn 0 "
            }
        }
    }
});

let LOCALE = "en";

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, "locale", {
    get() {
        return LOCALE;
    },
    set(val) {
        LOCALE = val;
        localize(val);
        console.log(localize(val));
    }
});
