<template>
 <div class="container">
        <div class="content">
            <div class="content-left">
                <Description title="Hello, Friend!" content="Loremcontenttent-left " class="description" />
                <Button name="Sign Up" to="/client-cadastro"/>
            </div>
            <div class="content-rigth">
                <h1>Sign In To Plataforma</h1>
                <form class="form"  @submit="(e) => submitForm(e)">
                   
                    <label for="">
                        <input type="email" id="email" placeholder="Email" v-model="form.email" required/>
                    </label>
                    <label for="">
                        <input type="password" id="senha" placeholder="Password" v-model="form.password" required/>
                    </label>

                <Button name="Sign in" primaryColor type="submit"/>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../../services/api"
import Button from '../../components/Button.vue'
import Description from '../../components/Description.vue'

export default {
  name: 'ClientLogin',
        components: {
            Button,
            Description
        },
        methods: {
            async submitForm(e) {
                try {
                    e.preventDefault()
                    const result = await api.post('/session', this.form)
                    console.log(result.data);
                    localStorage.setItem('@hospedar-login', JSON.stringify(result.data));
                    alert("Login com sucesso!")
                     this.$router.push(`/entidade-list`);
                } catch (error) {
                    console.log(error);
                    alert("Erro ao tentar login!")
                }
            },

        },

        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },


}
</script>