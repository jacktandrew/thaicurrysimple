

var feed = new Instafeed({
    get: 'user',
    mock: true,
    limit: '10',
	links: 'false',
    sortby: 'random',
    userId: 571446556,
    clientId: '5240c7b23e1e4277a7446b92ca589347',
    resolution: 'standard_resolution',
    accessToken: '571446556.467ede5.a6faa2eb89484b4a8cc67ca67243b613',

    template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});


feed.run();


feed = new Instafeed({

        
        
        
  
  custom: {
    images: [],
    currentImage: 0,
    showImage: function () {
      var result, image;
      image = this.options.custom.images[this.options.custom.currentImage];
      result = this._makeTemplate(this.options.template, {
        model: image,
        id: image.id,
        link: image.link,
        image: image.images[this.options.resolution].url,
        caption: this._getObjectProperty(image, 'caption.text'),
        likes: image.likes.count,
        comments: image.comments.count,
        location: this._getObjectProperty(image, 'location.name')
      });
      $("#instafeed").html(result);
    }
  },
  success: function (data) {
    this.options.custom.images = data.data; 
    this.options.custom.showImage.call(this);
  }
});