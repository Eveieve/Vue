
import { createApp, h } from 'vue'

createApp({ // {} 는 객체라는 뜻 
    // 데이터 속성을 추가할땐 data()
    data() {
        return {message: 'Hello Vuejs',};
    },
    // 기능 속성을 추가할땐 method 
    methods: {
        reverse(){ //reverse 라는 메서드 정의
            this.message = this.message.split('').reverse().join('');
        },
    },
    //data와 methods를 사용해 렌더링
    render(){
        return h('div', [h('p', this.message), 
            h('button', {onClick : this.reverse}, 'Reverse'),]);
    },

}).mount('#app');



// 