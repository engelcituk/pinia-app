<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue';

</script>
<template>
    <div>
        <h3>Guardando..</h3>
        <h3>Guardado</h3>

        <LoadingModal v-if="false"/>

        <div>
            <h1>Ecituk</h1>
            <form action="">
                <input
                    type="text"
                    placeholder="Nombre"
                >
                <br>
                <input
                    type="text"
                    placeholder="Dirección"
                >
                <br>
                <button type="submit">Guardar</button>
            </form>

        </div>
    </div>
    <pre>
    Toda la información del client
    </pre>
</template>


<style scoped>
input {
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 10px;
}
button{
    margin-bottom: 10px;
}
</style>