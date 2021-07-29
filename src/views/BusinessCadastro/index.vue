<template>

    <div class="container">
        <div class="content">
            <div class="content-left">
                <Description title="Welcome Back!" content="Log in to the platform" class="description" />
                <Button name="Sign in" to="business-login"/>
            </div>
            <div class="content-rigth">
                <h1>Create Business Account</h1>
                
                <form class="form" >
                 <label for="">

                        <input type="text" id="name" placeholder="Name" v-model="form.name" minlength="6" required/>
                    </label>
                    
                    <label for="">
                        <input type="email" id="email" v-model="form.email" placeholder="Email" required/>
                    </label>
                    <label for="">
                        <input type="password" id="password" v-model="form.password" placeholder="Password" minlength="8" required/>
                    </label>

                </form>
                
               
                <Button name="Sign Up" @click="submitForm" primaryColor to="business-login" />
            </div>
        </div>
    </div>
</template>

<script>
    import api from "../././../services/api.js"

    import Description from "../../components/Description.vue"
    import Button from "../../components/Button.vue"
    
    export default {
        name: 'ClientCadastro',
        data(){
            return{
                form: {
                    name:'',
                    email:'',
                    password:''
                }
            }
        },
          methods: {
       async submitForm() {
         await api.post('/users', this.form)
        alert("Cadastrado com sucesso!")
       
      },
      
    },
        components: {
            Description,
            Button
        }


    }
</script>

<style scoped>
    .container {
        height: 100vh;
        background: #ecf0f1;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .content {
        height: 80%;
        width: 70%;
        display: flex;
    }

    .content-left {
        background-color: #4E5FCD;
        width: 45%;
        display: flex;
        flex-direction: column;
        align-content: stretch;
        justify-content: center;
        align-items: center;
       
    }

    .content-rigth {
        background-color: #fff;
        width: 55%;
        display: flex;
        flex-direction: column;
        align-content: stretch;
        justify-content: center;
        align-items: center;

    }

    .description {
        text-align: center;
        margin-bottom: 20px;
    }

    h1 {
        font-size:14px;
        color: #4E5FCD;
        margin-bottom: 15px;
       
        
    }

    
</style>