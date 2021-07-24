
<template>
  <div class="container">
    <div class="content background-dark content-left">
      <Logo />
    </div>

    <div class="content content-rigth">
    <div class="header">
      <Header />
    </div>
         
      <div >
      <div class="description">
          <Description />
      </div>
          <div class="buttons">
            <Buttons name="Business" />
            <Buttons name="Client" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from './components/Header.vue'
  import Buttons from './components/Buttons.vue'
  import Logo from './components/Logo.vue'
  import Description from '../src/components/Description.vue'
  export default {
    name: 'Welcome',
    components: {
      Header,
      Logo,
      Buttons,
      Description
    }
  }
</script>

<style scoped>
  .description {
    margin-top: 195px;

  }

  .content-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    margin-left: 20px;
  }
</style>
