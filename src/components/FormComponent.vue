<template>
  <div class="form-vadidate">
    <ValidationObserver ref="form">
    <hr>
      <h2 class="head-h2">VeeValidate: vue-i18n</h2>
      <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
        <label class="label-input">Email: </label>
        <input type="text" v-model="email" placeholder="type some email" class="form-control">
        <span class="span-error">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider name="phone" rules="required|max:10" v-slot="{ errors }">
        <label class="label-input">Phone: </label>
        <input type="phone" v-model="phone" placeholder="type phone number" class="form-control">
        <span class="span-error">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider name="age" rules="required|positive" v-slot="{ errors }">
        <label class="label-input">Age: </label>
        <input type="age" v-model="age" placeholder="type your old" class="form-control">
        <span class="span-error">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
        <label class="label-input">Password: </label>
        <input type="password" v-model="password" placeholder="type password" class="form-control">
        <span class="span-error">{{ errors[0] }}</span>
      </ValidationProvider>
    </ValidationObserver>

    <button @click="switchLoc" class="btn ">Switch Locale</button>
    <br>
    <button @click="submit" class="btn">Submit</button>

  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: "FormComponent",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: "",
    password: "",
    phone: "",
    age: "",
    minmax: ""
  }),
  methods: {
    submit() {
      alert('Your Information \n Email: '+ this.email + '\nPhone: '+this.phone+'\n Age: '+this.age);
    },
    switchLoc() {
      // switch the locale.
      this.locale = this.locale === "en" ? "vi" : "en";
      console.log(this.locale);
      // you could also import 'localize' and call it.
      // localize('vi');

      // re-validate to re-generate the messages.
      this.$refs.form.validate();
      console.log(this.$refs);
    }
  }
};
</script>


<style>
.form-vadidate{
  margin-left: 300px;
  width: 500px;
}
.span-error {
  display: block;
}

.form-control {
  margin-bo: 20px;
  width: 300px;
}
.btn {
  margin-top: 20px;
}
.label-input {
  margin-right: 10px;
}
</style>