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
