`user strict`

var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];

var salSeattle = {
    location: 'Seattle',
    customerNum: 0,
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie: 6.3,
    cookieAvg: 0,
    counter: 0,
    customer: [],
    total : 0,
    //avarage: function (minCustomer, maxCustomer) {
    // this.customerNum = Math.floor(Math.random() * (maxCustomer - minCustomer)) + minCustomer;
    //},

    avarage2: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
            this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
            //this.counter = this.counter + this.cookieAvg;
            this.customer[i] = this.cookieAvg;
            this.total = this.total + this.customer[i];

        }
        

    },
//         total : function(){
// for (i=0; i< hours.length; i++){
// total = total + this.cookieAvg[i];
// }
//  console.log(this.total);

//         },
         
    render: function () {
        var container= document.getElementById('sales');
        var articleE1= document.createElement('article');
    container.appendChild(articleE1);
        var h2H = document.createElement('h2');
            articleE1.appendChild(h2H);
            h2H.textContent = this.location;
    
           var ulU = document.createElement('ul');
           articleE1.appendChild(ulU);
           for(var i =0; i<hours.length; i++) {
               var liL = document.createElement('li');
               ulU.appendChild(liL);
             liL.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
           }
           liL.textContent = `total = ${this.total}`;

        
    }
}

salSeattle.avarage2(23, 65);
//salSeattle.avarage2();
salSeattle.render();
console.log(salSeattle);



var salTokyo = {
    location: 'Tokyo',
    customerNum: 0,
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2,
    cookieAvg: 0,
    counter: 0,
    customer: [],
    total : 0,
    avarage2: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
            this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
            //this.counter = this.counter + this.cookieAvg;
            this.customer[i] = this.cookieAvg;
            
            this.total = this.total + this.customer[i];

        }
    },
    render: function () {
        var container= document.getElementById('sales');
        var articleE1= document.createElement('article');
    container.appendChild(articleE1);
        var h2H = document.createElement('h2');
            articleE1.appendChild(h2H);
            h2H.textContent = this.location;
    
           var ulU = document.createElement('ul');
           articleE1.appendChild(ulU);
           for(var i =0; i<hours.length; i++) {
               var liL = document.createElement('li');
               ulU.appendChild(liL);
             liL.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
           }

           liL.textContent = `total = ${this.total}`;
    }
}
salTokyo.avarage2(3, 24);
//salTokyo.avarage2();
salTokyo.render();
console.log(salTokyo);





var salDubai = {
    location: 'Dubai',
    customerNum: 0,
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 3.7,
    cookieAvg: 0,
    counter: 0,
    customer: [],
    total : 0,
    avarage2: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
            this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
            //this.counter = this.counter + this.cookieAvg;
            this.customer[i] = this.cookieAvg;
            this.total = this.total + this.customer[i];


        }
    },
    render: function () {
        var container= document.getElementById('sales');
        var articleE1= document.createElement('article');
    container.appendChild(articleE1);
        var h2H = document.createElement('h2');
            articleE1.appendChild(h2H);
            h2H.textContent = this.location;
    
           var ulU = document.createElement('ul');
           articleE1.appendChild(ulU);
           for(var i =0; i<hours.length; i++) {
               var liL = document.createElement('li');
               ulU.appendChild(liL);
             liL.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
           }

           liL.textContent = `total = ${this.total}`;
    }
}
salDubai.avarage2(11, 38);
salDubai.render();
//salDubai.avarage2();
console.log(salDubai);

var salParis = {
    location: 'Paris',
    customerNum: 0,
    minCustomer: 20,
    maxCustomer: 38,
    avgCookie: 2.3,
    cookieAvg: 0,
    counter: 0,
    customer: [],
    total : 0,
    avarage2: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
            this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
            //this.counter = this.counter + this.cookieAvg;
            this.customer[i] = this.cookieAvg;
            this.total = this.total + this.customer[i];


        }
    },
    render: function () {
        var container= document.getElementById('sales');
        var articleE1= document.createElement('article');
    container.appendChild(articleE1);
        var h2H = document.createElement('h2');
            articleE1.appendChild(h2H);
            h2H.textContent = this.location;
    
           var ulU = document.createElement('ul');
           articleE1.appendChild(ulU);
           for(var i =0; i<hours.length; i++) {
               var liL = document.createElement('li');
               ulU.appendChild(liL);
             liL.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
           }
           liL.textContent = `total = ${this.total}`;
        
    }
    
}
salParis.avarage2(20, 38);
salParis.render();
//salParis.avarage2();
console.log(salParis);

var salLima = {
    location: 'Lima',
    customerNum: 0,
    minCustomer: 2,
    maxCustomer: 16,
    avgCookie: 4.6,
    cookieAvg: 0,
    counter: 0,
    customer: [],
    total : 0,
    avarage2: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customerNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
            this.cookieAvg = Math.floor(this.customerNum * this.avgCookie);
            //this.counter = this.counter + this.cookieAvg;
            this.customer[i] = this.cookieAvg;
            this.total = this.total + this.customer[i];
        }
        },

        render: function () {
            var container= document.getElementById('sales');
            var articleE1= document.createElement('article');
        container.appendChild(articleE1);
            var h2H = document.createElement('h2');
                articleE1.appendChild(h2H);
                h2H.textContent = this.location;
        
               var ulU = document.createElement('ul');
               articleE1.appendChild(ulU);
               for(var i =0; i<hours.length; i++) {
                   var liL = document.createElement('li');
                   ulU.appendChild(liL);
                 liL.textContent = `${hours[i]}: ${this.customer[i]} cookies`;
               }
    
               liL.textContent = `total = ${this.total}`;
        }
    }


salLima.avarage2(2, 16);
salLima.render()
//salLima.avarage2();
console.log(salLima);