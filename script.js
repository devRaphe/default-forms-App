$(function(){
$('.js-form').submit(e =>{
e.preventDefault();
  const userTextElement = $(event.currentTarget).find('#user-text');
  $('.js-display-user-text').text(`Item: ${userTextElement.val()}`);
  userTextElement.val("");
})
})

