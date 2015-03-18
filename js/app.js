var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://flickr.come/photos/big');

    this.nickName = ko.observableArray([
        { nick: 'Tabbs' },
        { nick: 'Babbs' },
        { nick: 'Tabitha' },
        { nick: 'mo' }
    ]);

    this.catLevel = ko.computed(function () {
        return this.clickCount() < 10 ? "Newborn" : (this.clickCount() <= 39 ? "Infant" : (this.clickCount() <= 79 ? "Teen" : "Adult"));
    }, this);
}

var ViewModel = function () {
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
    //{ clickCount: this.clickCount, name: this.name, imgSrc: this.imgSrc, imgAttribution: this.imgAttribution, nickName: this.nickName, incrementCounter: this.incrementCounter}

}

ko.applyBindings(new ViewModel)

