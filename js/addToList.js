//This function is initialised when the 'document' object is ready
$(function(){

var $newItemForm, $list, $button;

$button = $('#plussign');
$list = $('ul');
$newItemForm = $('#newItemForm');

//hides the new list item input box upon page loading
$newItemForm.hide();

/*When user clicks on the plus sign, the input box is revealed for them to enter
the name of their list item.*/
$button.on('click', function(){
          $newItemForm.show();
//Focuses on the nearest child text input element
          $newItemForm.find('input:text').focus();
});

/*When user clicks 'Add Item', the event handler below will listen for this and
prevent the default form submission from taking place, grab what the user has input,
append their new item as an li tag and hide the form to see only the list*/
$newItemForm.on('submit', function(e) {
  e.preventDefault();
  var text = $('input:text').val();
  //Check if the user has actually entered something.
  if(text != '')
  {
  $list.append('<li>' + text + '</li>');
  /*Removes error message*/
  $('p').find('h3').remove();
  }
  else
  {
   $('p').append('<h3>' + 'Error: You need to enter an item. Try Again' + '</h3>')
  }

  $('input:text').val('');
  $newItemForm.hide();
});

/*Event handler waits for user to click on list item and, upon doing so,
checks to see if the list item has a class of 'complete'. If it does,
it will fade out as it is no longer needed in the list. If complete is false,
we give it the class of complete, changing it's CSS style */
$list.on('click', 'li', function(){
  var $this = $(this);
  var complete = $this.hasClass('complete');

  if(complete === true)
  {
    $this.animate({
      opacity: 0.0,
      paddingLeft: '+=180'}, 500, 'swing', function(){
        $this.remove();
      })
    }
    else {
      item = $this.text();
      $this.remove();
      $list.append('<li class=\"complete\">' + '<strike>' + item + '</strike>' + '</li>').hide().fadeIn(300);
    }

});



$('h1').hide().slideDown();
$('p').hide().slideDown();


});
