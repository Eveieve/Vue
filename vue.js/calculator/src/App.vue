<script>
export default {
  data() {
    return {
      output : null, 
      prev :  null, 
      cur : null, 
      operator : null,
      operatorActions : {
        // 사칙 연산 수행하는 함수를 객체로 정의 
        '+' : (a,b) => a + b, 
        '-' : (a,b) => a -b,
        '*' : (a, b) => a * b, 
        '/' : (a, b) => a / b, 
      },
    };
  }, 

  methods : {
    // 사용자 입력값에 따라 계산하는 가장 큰 흐름 분기 함수
    operation(e) {
      const n = e.currentTarget.value;
      if( n === 'C') {
        this.clear(); // clear 
      } else if (['+', '-', '*', '/', '='].includes(n)) {
        this.calculate(n); 
      } else {
        this.saveUserInput(n);

      }
    },

    // 사용자 입력값을 저장 
    saveUserInput(n) {
      // 아무 숫자도 입력하지 않은(null) 상태면 n 저장하기 
      // null 이 아니라면 숫자뒤에 이어붙이기 (덧셈 아님)
      this.cur = this.cur === null ? n : (this.cur +=n);
      this.output = this.cur; 
    },
    // 초기화 
    clear() {
      this.output = null;
      this.prev = null;
      this.cur = null;
      this.operator = null;
    }, 

    // 실제 계산하기 
    calculate(n) {
      // 입력한 값이 연산자인 경우
      // 숫자를 입력하지 연산자 클릭한 경우 
      if(!this.cur && !this.prev) {
        alert('You need to input a number first');
        return;
      }

      // 사칙 연산 기호를 연속으로 클릭 
      if (this.operator !== '' && !this.cur) {
        return;
      }
      // 등호 클릭 후 한번 더 클릭한 경우 
      if(n === '=' && this.prev === this.cur) {
        return;
      }
     
      if (this.operator !== null) {
        return;
      }

      this.cur = Number(this.cur); // normal case - change to number 
      if(this.operator !== null) {
        this.prev = this.operatorActions[this.operator](this.prev, this.cur);
        // 등호면 연산 결과 노출 
        if (n === '=') {
          this.output = this.prev;
          this.operator = null;
          this.cur = this.prev;
        } else {
          this.output = null;
          this.operator = n;
          this.cur = null;
        }
      } else {
        this.output = null;
        this.operator = n;
        this.prev = this.cur;
        this.cur = null;
      }
    }

  },
}
</script>

<template>
  <div class="calculator">
      <form name="forms">
        <input type="text" name="output" v-model = "output" readonly />
        <input type="button" class="clear" value="C" @click="operation"/>
        <input type="button" class="operator" value="/" @click="operation"/>
        <input type="button" value="1" @click="operation"/>
        <input type="button" value="2" @click="operation"/>
        <input type="button" value="3" @click="operation"/>
        <input type="button" class="operator" value="*" @click="operation"/>
        <input type="button" value="4" @click="operation"/>
        <input type="button" value="5" @click="operation"/>
        <input type="button" value="6" @click="operation"/>
        <input type="button" class="operator" value="+" @click="operation"/>
        <input type="button" value="7" @click="operation"/>
        <input type="button" value="8" @click="operation"/>
        <input type="button" value="9" @click="operation"/>
        <input type="button" class="operator" value="-" @click="operation"/>
        <input type="button" class="dot" value="." @click="operation"/>
        <input type="button" value="0" @click="operation"/>
        <input type="button" class="operator result" value="=" @click="operation"/>
      </form>
    </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type='text'] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}

</style>
