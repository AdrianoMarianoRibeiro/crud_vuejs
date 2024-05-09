<template lang="">
  <div>
    <h1>DataTable</h1>
  </div>
</template>

<script lang="ts">

import getAll from '@/services/contactList.ts';

export default {
  name: 'ContactList',

  components: {

  },

  data() {
    return {};
  },

  watch: {

  },

  computed: {

  },

  methods: {
    getContactList() {
      const { posts, error, loading } = getAll();
    }
  },

  created() {}
};

</script>

<style lang="">

</style>
