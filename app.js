new Vue({
    el: '#app',
    data: {
        isPlayingGame : true,
        guess: {
            red : 127,
            green : 127,
            blue : 127,
        },
        randomColor: null,
    },
    methods: {
        getRandom255(){
            return Math.round(Math.random() * 256) - 1
        },
        submitGuess() {
            this.isPlayingGame = false;
        },
        playAgain() {
            this.isPlayingGame = true;
            this.resetRandomColor();
        },
        getRandomColor() {
            var vm = this;
            var randomColor = `rgb(${vm.getRandom255()},${vm.getRandom255()},${vm.getRandom255()})`;
            return randomColor;
        },
        resetRandomColor() {
            var vm = this;
            vm.randomColor = this.getRandomColor();
        }
    },
    computed: {
        getGuessColor(){
            var vm = this;
            return `rgb(${vm.guess.red},${vm.guess.green},${vm.guess.blue})`;
        },
        getRandomColorArray(){
            return this.randomColor.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',')
        },
        getRandomColorString(){
            var rgb = this.getRandomColorArray;
            if(this.isPlayingGame){
                rgb = ["?", "?", "?"];
            }
            return `R: ${rgb[0]} G: ${rgb[1]} B:${rgb[2]}`
        },
        gameScore(){
            var vm = this;
            var guessArr = [vm.guess.red,vm.guess.green,vm.guess.blue]
            var rgb  = this.getRandomColorArray;
            var sum = 0;

            guessArr.map((guess, index) => {
                sum += Math.abs(guess-rgb[index])
            });
            console.log(guessArr)
            console.log(rgb)
            if(sum == 1){
                return sum + " point"
            } else {
                return sum + " points"
            }
        }
    },
    created(){
        this.resetRandomColor();
    },
})