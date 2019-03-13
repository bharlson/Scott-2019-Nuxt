<template>
    <nav>
        <div>
            <slot></slot>
        </div>
    </nav> 
</template>
<script>
import Logo from '@/components/Logo.vue';

export default {
    components: {
        Logo
    }
}
</script>
