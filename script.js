function greetUser() {
	var name = document.getElementById("nameInput").value;
	alert("很高兴认识你，" + name + "!");
}

$(document).ready(function() {
  $('.navbar-nav a').click(function(e) {
    e.preventDefault();
    var section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 1000);
  });
});
```
