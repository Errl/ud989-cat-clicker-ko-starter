var initialCats = [
        {
            name: 'Molly',
            imgSrc: 'images/molly.jpg',
            imgAttribution: 'https://flickr.come/photos/big',
            clickCount: 0,
            nickNames: ['Tabbs', 'Babbs', 'Tabitha', 'mo']
        },

        {
            name: 'Henry',
            imgSrc: 'images/cat1.jpg',
            imgAttribution: 'https://flickr.come/photos/big',
            clickCount: 0,
            nickNames: ['Tabbs', 'Babbs', 'Tabitha', 'mo']
        },

         {
             name: 'Saly',
             imgSrc: 'images/cat2.jpg',
             imgAttribution: 'https://flickr.come/photos/big',
             clickCount: 0,
             nickNames: ['Tabbs', 'Babbs', 'Tabitha', 'mo']
         },

        {
            name: 'Bo',
            imgSrc: 'images/cat3.jpg',
            imgAttribution: 'https://flickr.come/photos/big',
            clickCount: 0,
            nickNames: ['Tabbs', 'Babbs', 'Tabitha', 'mo']
        },

         {
             name: 'Ruben',
             imgSrc: 'images/cat4.jpg',
             imgAttribution: 'https://flickr.come/photos/big',
             clickCount: 0,
             nickNames: ['Tabbs', 'Babbs', 'Tabitha', 'mo']
         },

        {
            name: 'Lilly',
            imgSrc: 'images/cat5.jpg',
            imgAttribution: 'https://flickr.come/photos/big',
            clickCount: 0,
            nickNames: ['Tabbs', 'Babbs', 'Tabitha', 'mo']
        }
]


var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttributiuon);
    this.selected = ko.observable();
    this.nickName = ko.observableArray(data.nickNames);

    this.catLevel = ko.computed(function () {
        return this.clickCount() < 10 ? "Newborn" : (this.clickCount() <= 39 ? "Infant" : (this.clickCount() <= 79 ? "Teen" : "Adult"));
    }, this);
}

var ViewModel = function () {
    var self = this;
    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };


}

ko.applyBindings(new ViewModel)

