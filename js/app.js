`user strict`


var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
var array = [];
var container= document.getElementById('sales');
var articleE1= document.createElement('article');
container.appendChild(articleE1);



  var tab1 = document.createElement('table');
   articleE1.appendChild(tab1);
function Salmon(location, minCustomer, maxCustomer, avgCookie) {
    this.location = location,
        this.customerNum = 0;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookie = avgCookie;
    this.cookieAvg = 0;
    this.customer = [];
    this.total = 0;
    objArray = [];
    array.push(this);
    //objArray.push(this);
}
Salmon.prototype.avarage2 = function () {

    for (var i = 0; i < hours.length; i++) {
        this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
        this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
        //this.counter = this.counter + this.cookieAvg;
        this.customer[i] = this.cookieAvg;
        this.total = this.total + this.customer[i];

    }

}
// Salmon.prototype.city = function(){

//     var tr1 = document.createElement('tr');
//     tab1.appendChild(tr1);
//     var th1 = document.createElement ('th');
//     tr1.appendChild(th1);
//     th1.textContent = ' ';
//     for(var i =0; i<hours.length; i++) {
//         var th1 = document.createElement ('th');
//         tr1.appendChild(th1);
//   th1.textContent = `${this.location[i]}`;

//     }

// }

   Salmon.prototype.render = function () {
    
                  var tr1 = document.createElement('tr');
                   tab1.appendChild(tr1);
                   var th1 = document.createElement ('th');
                   tr1.appendChild(th1);
                   th1.textContent = ' ';
                   for(var i =0; i<hours.length; i++) {
                       var th1 = document.createElement ('th');
                       tr1.appendChild(th1);
                 th1.textContent = `${hours[i]}`;
               }
               var th2 = document.createElement('th');
               tr1.appendChild(th2);
               th2.textContent = 'TOTAL';
}
Salmon.prototype.render1 = function () {
    // var container= document.getElementById('sales');
    //         var articleE1= document.createElement('article');
    // container.appendChild(articleE1);
    
    //var tab1 = document.createElement('table');
                  // articleE1.appendChild(tab1);
                  var tr1 = document.createElement('tr');
                   tab1.appendChild(tr1);
                //    var td3 = document.createElement ('td');
                //    tr1.appendChild(td3);
                   var td2 = document.createElement('td');
                   tr1.appendChild(td2);
                   td2.textContent = this.location;
                   for(var i =0; i<hours.length; i++) {
                   var td1 = document.createElement('td');
                   tr1.appendChild(td1);
                   td1.textContent = `${this.customer[i]}`;
                   }
                   var td3 = document.createElement('td');
                   tr1.appendChild(td3);
                   td3.textContent = this.total;

}

Salmon.prototype.render2 = function () {
    var sum = 0;
    var tr1 = document.createElement('tr');
    tab1.appendChild(tr1);
    var td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = 'TOTAL';
    
    for(var i =0; i<hours.length; i++) {
        var td1 = document.createElement('td');
        tr1.appendChild(td1);
        sum = sum + obj1.customer[i] + obj2.customer[i] + obj3.customer[i] + obj4.customer[i] + obj5.customer[i];
        td1.textContent = `${sum}`;
        sum = 0;

}
}









//     Salmon.prototype.render1 = function(){
//         var container= document.getElementById('sales');
//         var articleE1= document.createElement('article');
// container.appendChild(articleE1);

// var tab1 = document.createElement('table');
//                articleE1.appendChild(tab1);
//                for(var i =0; i<hours.length; i++) {
//                var td1 = document.createElement('td');
//                tab1.appendChild(td1);
//                td1.textContent = `${this.location}`
//                }
// // var x = document.createElement("TD");
// //   var t = document.createTextNode("new cell");
// //   x.appendChild(t);
// //   document.getElementById("myTr").appendChild(x);


//     }


// var location1 = ['Seatel', 'Tokyo', 'Dubai', 'Paris', 'Lima',];
// Salmon.prototype.Location1 = function (){
// for (j =0; j < location1.length; j++){
var obj1 = new Salmon('Seatel', 23, 65, 6.3);
obj1.avarage2();
obj1.render();
obj1.render1();

console.log(this.obj1);

var obj2 = new Salmon('Tokyo', 3, 24, 1.2);
obj2.avarage2();
obj2.render1();
console.log(this.obj2);

var obj3 = new Salmon('Dubai', 11, 38, 3.7);
obj3.avarage2();
//obj3.render()
obj3.render1();
console.log(this.obj3);

var obj4 = new Salmon('Paris', 20, 38, 2.3);
obj4.avarage2();
obj4.render1();
console.log(this.obj4);

var obj5 = new Salmon('Lima', 2, 16, 4.6);
obj5.avarage2();
obj5.render1();
console.log(this.obj5);

 
 
obj1.render2();
   


// var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];

// var salSeattle = {
//     location: 'Seattle',
//     customerNum: 0,
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookie: 6.3,
//     cookieAvg: 0,
//     counter: 0,
//     customer: [],
//     total : 0,
//     //avarage: function (minCustomer, maxCustomer) {
//     // this.customerNum = Math.floor(Math.random() * (maxCustomer - minCustomer)) + minCustomer;
//     //},

//     avarage2: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
//             this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
//             //this.counter = this.counter + this.cookieAvg;
//             this.customer[i] = this.cookieAvg;
//             this.total = this.total + this.customer[i];

//         }


//     },
// //         total : function(){
// // for (i=0; i< hours.length; i++){
// // total = total + this.cookieAvg[i];
// // }
// //  console.log(this.total);

// //         },

//     render: function () {
//         var container= document.getElementById('sales');
//         var articleE1= document.createElement('article');
//     container.appendChild(articleE1);
//         var h2H = document.createElement('h2');
//             articleE1.appendChild(h2H);
//             h2H.textContent = this.location;

//            var ulU = document.createElement('ul');
//            articleE1.appendChild(ulU);
//            for(var i =0; i<hours.length; i++) {
//                var liL = document.createElement('li');
//                ulU.appendChild(liL);
//              liL.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
//            }
//            liL.textContent = `total = ${this.total}`;


//     }
// }

// salSeattle.avarage2(23, 65);
// //salSeattle.avarage2();
// salSeattle.render();
// console.log(salSeattle);



// var salTokyo = {
//     location: 'Tokyo',
//     customerNum: 0,
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCookie: 1.2,
//     cookieAvg: 0,
//     counter: 0,
//     customer: [],
//     total : 0,
//     avarage2: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
//             this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
//             //this.counter = this.counter + this.cookieAvg;
//             this.customer[i] = this.cookieAvg;

//             this.total = this.total + this.customer[i];

//         }
//     },
//     render: function () {
//         var container= document.getElementById('sales');
//         var articleE1= document.createElement('article');
//     container.appendChild(articleE1);
//         var h2H = document.createElement('h2');
//             articleE1.appendChild(h2H);
//             h2H.textContent = this.location;

//            var ulU = document.createElement('ul');
//            articleE1.appendChild(ulU);
//            for(var i =0; i<hours.length; i++) {
//                var liL = document.createElement('li');
//                ulU.appendChild(liL);
//              liL.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
//            }

//            liL.textContent = `total = ${this.total}`;
//     }
// }
// salTokyo.avarage2(3, 24);
// //salTokyo.avarage2();
// salTokyo.render();
// console.log(salTokyo);





// var salDubai = {
//     location: 'Dubai',
//     customerNum: 0,
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookie: 3.7,
//     cookieAvg: 0,
//     counter: 0,
//     customer: [],
//     total : 0,
//     avarage2: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
//             this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
//             //this.counter = this.counter + this.cookieAvg;
//             this.customer[i] = this.cookieAvg;
//             this.total = this.total + this.customer[i];


//         }
//     },
//     render: function () {
//         var container= document.getElementById('sales');
//         var articleE1= document.createElement('article');
//     container.appendChild(articleE1);
//         var h2H = document.createElement('h2');
//             articleE1.appendChild(h2H);
//             h2H.textContent = this.location;

//            var ulU = document.createElement('ul');
//            articleE1.appendChild(ulU);
//            for(var i =0; i<hours.length; i++) {
//                var liL = document.createElement('li');
//                ulU.appendChild(liL);
//              liL.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
//            }

//            liL.textContent = `total = ${this.total}`;
//     }
// }
// salDubai.avarage2(11, 38);
// salDubai.render();
// //salDubai.avarage2();
// console.log(salDubai);

// var salParis = {
//     location: 'Paris',
//     customerNum: 0,
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgCookie: 2.3,
//     cookieAvg: 0,
//     counter: 0,
//     customer: [],
//     total : 0,
//     avarage2: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
//             this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
//             //this.counter = this.counter + this.cookieAvg;
//             this.customer[i] = this.cookieAvg;
//             this.total = this.total + this.customer[i];


//         }
//     },
//     render: function () {
//         var container= document.getElementById('sales');
//         var articleE1= document.createElement('article');
//     container.appendChild(articleE1);
//         var h2H = document.createElement('h2');
//             articleE1.appendChild(h2H);
//             h2H.textContent = this.location;

//            var ulU = document.createElement('ul');
//            articleE1.appendChild(ulU);
//            for(var i =0; i<hours.length; i++) {
//                var liL = document.createElement('li');
//                ulU.appendChild(liL);
//              liL.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
//            }
//            liL.textContent = `total = ${this.total}`;

//     }

// }
// salParis.avarage2(20, 38);
// salParis.render();
// //salParis.avarage2();
// console.log(salParis);

// var salLima = {
//     location: 'Lima',
//     customerNum: 0,
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCookie: 4.6,
//     cookieAvg: 0,
//     counter: 0,
//     customer: [],
//     total : 0,
//     avarage2: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
//             this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
//             //this.counter = this.counter + this.cookieAvg;
//             this.customer[i] = this.cookieAvg;
//             this.total = this.total + this.customer[i];
//         }
//         },

//         render: function () {
//             var container= document.getElementById('sales');
//             var articleE1= document.createElement('article');
//         container.appendChild(articleE1);
//             var h2H = document.createElement('h2');
//                 articleE1.appendChild(h2H);
//                 h2H.textContent = this.location;

//                var ulU = document.createElement('ul');
//                articleE1.appendChild(ulU);
//                for(var i =0; i<hours.length; i++) {
//                    var liL = document.createElement('li');
//                    ulU.appendChild(liL);
//                  liL.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
//                }

//                liL.textContent = `total = ${this.total}`;
//         }
//     }


// salLima.avarage2(2, 16);
// salLima.render()
// //salLima.avarage2();
// console.log(salLima);

// //////////////

// var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
// var array = [];
// function Salmon(location, minCustomer, maxCustomer, avgCookie) {
//     this.location = location,
//         this.customerNum = 0;
//     this.minCustomer = minCustomer;
//     this.maxCustomer = maxCustomer;
//     this.avgCookie = avgCookie;
//     this.cookieAvg = 0;
//     this.customer = [];
//     this.total = 0;
//     objArray=[];
//     array.push(this);
//     objArray.push(this);
// }
// Salmon.prototype.avarage2 = function () {

//     for (var i = 0; i < hours.length; i++) {
//         this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
//         this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
//         //this.counter = this.counter + this.cookieAvg;
//         this.customer[i] = this.cookieAvg;
//         this.total = this.total + this.customer[i];

//     }

// }



// //var location1 = ['Seatel', 'Tokyo', 'Dubai', 'Paris', 'Lima',];
// //Salmon.prototype.Location1 = function (){
// //for (j =0; j < location1.length; j++){


// // var obj1 = new Salmon('Seatel', 23, 65, 6.3);
// // console.log(this.obj1);
// // obj1.avarage2();
// // var obj2 = new Salmon('Tokyo', 3, 24, 1.2);
// // console.log(this.obj1);
// // obj2.avarage2();
// // var obj3 = new Salmon('Dubai', 11, 38, 3.7);
// // console.log(this.obj3);
// // obj3.avarage2();
// // var obj4 = new Salmon('Paris', 20, 38, 2.3);
// // console.log(this.obj4);
// // obj4.avarage2();
// // var obj5 = new Salmon('Lima', 2, 16, 4.6);
// // console.log(this.obj5);
// // obj5.avarage2();

// // Salmon.prototype.objArrayLoop = function () {
// // for (i=0; i < objArray.length; i++){
// // objArray[i].avarage2;
// // console.log(objArray[i]);

// // }
// // }

// //new Salmon('seattle',3.4,2.6,5.3)
// // new Salmon('tokyo')
