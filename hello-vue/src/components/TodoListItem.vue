<template>
    <li>
        {{ todo.text }}
        <button @click="$emit('remove', todo.id)">Delete</button>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>
