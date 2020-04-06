<template>
<div class="col-sm-3">
        <div class="thumbnail item">
            <a href="#">
                <img :src="'./img/prd/'+prod.img" style="width:100%">
                <div class="caption caption-custom">
                    <p>{{prod.name}}</p>
                    <p class="price">{{prod.price}}</p>
                </div>
            </a>
        </div>
</div>
</template>

<script>
export default {
    props:{
        prod:{
            type:Object
        }
    }
}
</script>