<template>
   <v-container>
       <v-layout row wrap >
 <v-flex xs12 sm6 class="text-xs-center text-sm-right">
     <v-btn large router to="/notes" class="red" dark>Explore Notes</v-btn>
 </v-flex>
  <v-flex xs12 sm6 class="text-xs-center text-sm-left">
     <v-btn large router to="/notes/new" class="red" dark>Create  Notes</v-btn>
 </v-flex>
       </v-layout>
       <v-layout row wrap class="mt-2">
           <v-flex xs12 >
  <v-carousel style="cursor:pointer">
    <v-carousel-item
      v-for="note in notes"
      :key="note.id"
      :src="note.imgurl"
      reverse-transition="fade"
      transition="fade"
      @click="onloadnote(note.id)"
    ></v-carousel-item>
       </v-carousel>
           </v-flex>
       </v-layout>
        <v-layout row wrap class="mt-2">
 <v-flex xs12  class="text-xs-center ">
    <p class="p">Join Us Today</p>
 </v-flex>
       </v-layout>
   </v-container>
</template>
<script>
export default {
  computed: {
    notes () {
      return this.$store.getters.featurednotes
    }
  },
  methods: {
    onloadnote (id) {
      this.$router.push('/notes/' + id)
    }
  }
}
</script>
<style scoped>
.p{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 2em;
}
</style>
