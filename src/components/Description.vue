<template>
    <article>
        <div>
            <h2 class="title title-second">Welcome</h2>
            <p class="description">Lorem ipsum is placeholder text</p>
            <p class="description"> commonly used in the graphic </p>
            <p class="description">print, and publishing. </p>
        </div>
    </article>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    article {
        /* margin-bottom: 230px; */
        margin-top: 10px;
        font-weight: lighter;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title-second {
        color: #fff;
    }

    .title {
        font-size: 32px;
        font-weight: bold;
        text-transform: capitalize;
    }

    .description {
        font-size: 18px;
        font-weight: 300;
        color: #fff;
        line-height: 30px;
    }
    
</style>