<script>

export default {
 data() {
  return {
    output : null, // 출력값 저장
    prev : null, // 이전값 저장
    curr : null, // 현재값 저장
    operator : null, // 연산자 저장

  }
 },


 methods : {
    saveInput(input) {
    
    if (this.curr === null) {
      this.curr = input
    }else {
      this.curr+=input; 
  }
  this.output = this.curr; 
},

  operate(e) {
    const input = e.currentTarget.value;

    if(input === 'C') {
      this.clear()
    }else if(['+', '-', '*', '/', '='].includes(input)){
      this.calculate(input);
    } else {
      this.saveInput(input);
    }
  },

clear() { 
  this.output = null;
  this.curr = null;
  this.prev = null;
  this.operator = null;
},


  // 실제 계산하는 함수 (예외들도 포함 )
calculate(input) {

// 숫자도 없고 이전 결과도 없는데 연산 시도할 때
if (!this.curr && !this.prev) {
    return;
  }

  // 연산자를 연속으로 누를 때
  if (this.operator !== null && this.curr !== null && input !== '=') {
    return;
  }

  //  '='을 여러 번 누를때 (마지막 계산 결과 이후 새로운 숫자 입력 하지 않음)
  if (input === '=' && this.prev === this.curr) {
    return;
  }

  if (this.curr !== null) {
    this.curr = Number(this.curr)
  }

  if(this.operator !== null) { 
    this.prev = this.performOperation[this.operator](this.prev, this.curr); 


    if (input === '='){ 
    this.output = this.prev; 
    this.operator = null;
    this.curr = null; 

    } else { 
    this.output = null; 
    this.operator = input; 
    this.curr = null; 
  }
  }else { 
        this.output = null; 
        this.operator = input; 
        this.prev = this.curr; 
        this.curr = null; 
      }
},
}
}
</script>
<template>
  <div class="calculator">
      <form name="forms">
        <input type="text" name="output" v-model = "output" readonly />
        <input type="button" class="clear" value="C" @click="operate"/>
        <input type="button" class="operator" value="/" @click="operate"/>
        <input type="button" value="1" @click="operate"/>
        <input type="button" value="2" @click="operate"/>
        <input type="button" value="3" @click="operate"/>
        <input type="button" class="operator" value="*" @click="operate"/>
        <input type="button" value="4" @click="operate"/>
        <input type="button" value="5" @click="operate"/>
        <input type="button" value="6" @click="operate"/>
        <input type="button" class="operator" value="+" @click="operate"/>
        <input type="button" value="7" @click="operate"/>
        <input type="button" value="8" @click="operate"/>
        <input type="button" value="9" @click="operate"/>
        <input type="button" class="operator" value="-" @click="operate"/>
        <input type="button" class="dot" value="." @click="operate"/>
        <input type="button" value="0" @click="operate"/>
        <input type="button" class="operator result" value="=" @click="operate"/>
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
  background-color: #FFFFFF;
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
  background-color: #ED4848;
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