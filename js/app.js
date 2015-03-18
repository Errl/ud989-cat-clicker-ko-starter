var ViewModel = function () {
    this.clickCount = ko.observable(0);
    //this.catLevel = ko.observable('Newborn');
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://flickr.come/photos/big');

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };

    this.catLevel = ko.computed(function () {
        return this.clickCount() < 10 ? "Newborn" : (this.clickCount() <= 39 ? "Infant": (this.clickCount() <= 79 ? "Teen" : "Adult"));
    }, this);
}

ko.applyBindings(new ViewModel)

