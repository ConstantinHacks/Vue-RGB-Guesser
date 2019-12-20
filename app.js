new Vue({
    el: '#app',
    data: {
        guess: {
            red : 127,
            green : 127,
            blue : 127,
        }
    },
    methods: {
        getRandom255 : function(){
            return Math.round(Math.random() * 256) - 1
        },
    },
    computed: {
        getRandomColor : function(){
            var vm = this;
            var randomColor =  `rgb(${vm.getRandom255()},${vm.getRandom255()},${vm.getRandom255()})`;
            console.log(randomColor);
            return randomColor;
        },
        getGuessColor : function(){
            var vm = this;
            return `rgb(${vm.guess.red},${vm.guess.green},${vm.guess.blue})`;
        }
    },
})