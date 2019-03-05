<template>
  <h1>{{ title }}</h1>
</template>

<script>
import api from '~/static/js/api.js';

export default {
  async asyncData ({ params }) {
      return api.get_tool_list().then((res)=>{
              return {title:res.data}
      })
  }
}
</script>