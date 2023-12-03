Vue.component('weird-input', {
  props: ['name', 'id', 'value'],
  watch: {
    value: {
      handler: function (after, before) {
        this.$emit('input', this.value);
        let self = this;
        this.caret = false;
        if (after.length > before.length) {
          if (this.value.slice(-1) == ' ') return false;
          setTimeout(function () {
            self.animated = true;
            setTimeout(function () {
              self.animated = false;
              self.caret = true;
            }, 300);
          }, 200);
        }
      } } },


  data: function () {
    return {
      animated: false,
      caret: true };

  },
  computed: {
    arr: function () {
      return this.value.split('');
    } },

  template: `<div class="nice-input" :class="{'nice-input--shaked': animated, 'nice-input--caret': !caret}">
    <input type="text" :id="id != undefined ? id : 'input-'+name" :name="name" autocomplete="off" v-model="value" />
    <label :for="id != undefined ? id : 'input-'+name">
    <span class="nice-input__animate" v-for="word in arr">{{word}}</span>
    </label>
  </div>  
  ` });


var app = new Vue({
  el: '.container',
  components: ['weird-input'],
  data: {
    message: '' } });