<template>
    <div class="content-btn">
        <div>
            <a :href="href" type="submit" class="btn btn-second"> <i
                    class="fa fa-building"></i> {{name}}</a>
        </div>
    </div>
</template>

<script>
   export default {
       props:{
          href: String,
          name: String
       }
   }
</script>

<style>
    .content-btn{
      word-wrap: break-word;
      margin: 18px 10px;
    }
    .btn {
        border-radius: 15px;
        text-transform: capitalize;
        color: #fff;
        padding: 10px 50px;
       
        font-size: 10px;
        cursor: pointer;
        font-weight: bold;
        align-self: center;
        border-width: 0.1px;
    }

    .btn-primary {
        background-color: transparent;
        border-color: #fff;
    }

    .btn-primary:hover {
        background-color: #fff;
        color: #4E5FCD;
    }

    .btn-second {
        background-color: transparent;

        background-color: transparent;
        border: 1px solid #fff;

    }

    .btn-second:hover {
        background-color: #fff;
        border: 1px solid #4E5FCD;
        color: #4E5FCD;
    }


    #btn {
        margin-bottom: 100px;
    }
</style>