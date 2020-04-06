<template>
    <div class="container">
        <div class="row" v-if="products.length">
            <ListProduct 
                v-for="prod in products"
                :key="prod.id"
                :prod="prod"
            />
        </div>
        <p v-else>
            Nothing left in the list.
        </p>
    </div>
</template>

<script>
import ListProduct from './ListProduct';




export default {
    components:{
        ListProduct
    },
    data (){
        return{
            products:this.$root.$data.prods
        }
    }
    
}
</script>