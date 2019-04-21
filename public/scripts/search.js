$(document).ready(function () {
  $('#product-search').on('input', function() {
  var search = $(this).serialize();
  if(search === "search=") {
    search = "all"
  }
  $.get('/products?' + search, function(data) {
    $('#product-grid').html('');
    data.forEach(function(product) {
      $('#product-grid').append(`
        <div class="col-md-3 col-sm-6">
          <div class="thumbnail">
            <img src="${ product.image }">
            <div class="caption">
              <h4>${ product.name }</h4>
            </div>
            <p>
              <a href="/products/${ product._id }" class="btn btn-primary">More Info</a>
            </p>
          </div>
        </div>
      `);
    });
  });
});

$('#product-search').submit(function(event) {
  event.preventDefault();
});
});

