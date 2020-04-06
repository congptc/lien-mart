<template>
<div>
    <div class="jumbotron text-center background-top">
        <h1 class="title">{{conf.title}}</h1>
        <p class="slogan">{{conf.slogan}}</p>
    </div>
    <Container/>
</div>
</template>

<script>
import Container from './components/Container';

export default {
    name:"App",
    components:{
        Container
    },
    data(){
       return {
            conf:this.$root.$data.conf
       } 
    }

}
</script>


