<template>
    <PageTitle title="Baza svih dokumenata" icon-src="/icons/icon-document.svg" />
    <div class="mb-6">
        <router-link
          to="/documents/document"
          activeClass="bg-primary-500"
          class="txt-neutral-800 fs-300 fw-500"
        >Document Page</router-link>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
export default {
    components: {
        PageTitle,
    }
};
</script>
