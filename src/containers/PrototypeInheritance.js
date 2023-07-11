import React from "react";

function PrototypeInheritance(props) {
  //inheritance
  class Father {
    showFMoney() {
      return "Father Money is 10000rs";
    }
  }

  class Son extends Father {
    showSMoney() {
      return "Son Money is 12000rs";
    }
  }

  let s = new Son();
  console.log(s.showFMoney());

  // Prototype inheritance


  let Mobile = function () { 
    this.a = 10;
  };

  Mobile.prototype.c = 30 ;

  let Samsung = function () { 
    Mobile.call(this)
    this.b = 20;
  }

  let S = new Samsung();

  Samsung.prototype = Object.create(Mobile.prototype);
  Samsung.prototype.constructor = Samsung ;

  console.log(S.c , S.b);


  // Prototype inheritance


  let x = {
    name1 : 'Amit',
    language : 'JavaScript'
  }

  console.log(x);

  let y = {
   age: '20',
   city:'surat',
   name:'patel'
  }

  x.__proto__ = y

  console.log(x.name);




  return (
    <>
      <h1>Inheritance</h1>
      <h2>
        {s.showFMoney()} <br></br>
        {s.showSMoney()}
      </h2>

      <h1>Prototype Inheritance</h1>
      <h2>
       a = {S.a} <br></br>
       b = {S.b} <br></br>
        c = {S.c}
      </h2>
    </>
  );
}

export default PrototypeInheritance;
