<template>
 <div class="container">
        <div class="content">
            <div class="content-left">
                <Description title="Welcome back!" content="Loremcontenttent-left " class="description" />
                <Button name="Sign Up" to="/client-cadastro"/>
            </div>
            <div class="content-rigth">
                <h1>Sign In To Plataforma</h1>
                <form class="form">
                   
                    <label for="">
                        <input type="email" id="email" placeholder="Email" />
                    </label>
                    <label for="">
                        <input type="password" id="senha" placeholder="Password" />
                    </label>

                </form>
                <Button name="Sign in" primaryColor />
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../../components/Button.vue'
import Description from '../../components/Description.vue'

export default {
  name: 'ClientLogin',
        components: {
            Button,
            Description
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