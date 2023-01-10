
<script setup lang="ts">

</script>

<template>
    <div>   
        <button>Anterior</button>
        <button>1</button>
        <button class="active">2</button>
        <button>3</button>
        <button>Siguiente</button>
    </div>
</template>


<style scoped>
div{
    margin-top: 10px;
}
button{
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid var(--color-border);
    color: var(--color-text);
    cursor: pointer;
    padding: 10px;
    transition: all .5s;
}

button:hover{
    background-color: hsla(160, 100%, 37%, 0.2);
    transition: all .5s;
}

button:disabled{
    cursor: not-allowed;
}
.active{
    background-color: hsla(160, 100%, 37%, 0.2);
}
</style>