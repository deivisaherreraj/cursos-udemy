<template>
  <div class="general">
    <SliderComponent :isViewButton="false" :defaultText="'Formulario'" :size="'small'"></SliderComponent>
    <div class="center">
      <section id="content">
        <p className="article-item-favorite" v-if="user.nombres && user.apellidos">
          <strong>Nombre: </strong>
          <span>{{ user.nombres + ' ' + user.apellidos }}</span>
        </p>
        <form class="mid-form" @submit.prevent="formSubmit()">
          <div class="form-group">
            <label for="nombres">Nombres</label>
            <input type="text" name="nombres" id="nombres" v-model="user.nombres">
            <div v-for="(error, index) of v$.user.nombres.$errors" :key="index">
              <small>{{ error.$message }}</small>
            </div>
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" id="apellidos" v-model="user.apellidos">
            <div v-for="(error, index) of v$.user.apellidos.$errors" :key="index">
              <small>{{ error.$message }}</small>
            </div>
          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" id="bio" v-model="user.bio"></textarea>
            <div v-for="(error, index) of v$.user.bio.$errors" :key="index">
              <small>{{ error.$message }}</small>
            </div>
          </div>

          <div class="form-group radiobuttons">
            <input type="radio" name="genero" value="hombre" v-model="user.genero" /> Hombre
            <input type="radio" name="genero" value="mujer" v-model="user.genero" /> Mujer
            <input type="radio" name="genero" value="otro" v-model="user.genero" /> Otro
            <div v-for="(error, index) of v$.user.genero.$errors" :key="index">
              <small>{{ error.$message }}</small>
            </div>
          </div>
          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import SliderComponent from './../../../layout/slider/SliderComponent.vue';
import SidebarComponent from './../../../layout/sidebar/SidebarComponent.vue';

export default {
  name: 'FormularioComponent',
  components: {
    SliderComponent,
    SidebarComponent
  },
  validations() {
    return {
      user: {
        nombres: { required },
        apellidos: { required },
        bio: { required },
        genero: { required }
      }
    }
  },
  data() {
    return {
      v$: useValidate(),
      user: {
        nombres: '',
        apellidos: '',
        bio: '',
        genero: ''
      }
    };
  },
  methods: {
    formSubmit() {
      this.v$.$validate()
      if (!this.v$.$error) {
        console.log('Form successfully submitted.')
      } else {
        console.log('Form failed validation')
      }
    }
  }
}
</script>