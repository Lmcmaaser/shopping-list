function shopList(){

    //select shopping list form and look for submit event...?
    $('#js-shopping-list-form').submit(function(event){
        //prevent from from submitting
        event.preventDefault();

    //create variable for list item input
    let item = $('#shopping-list-entry').val();

    //add new list item
    $('.shopping-list').append(
        `<li>
            <span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);

    //clear list item input for new item
    $('#shopping-list-entry').val('');
    
    });

    //in shppoing list, look for click delete button event and remove
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove(); //why li and not span?
    });

    //look for click check button event and toggle check
    $('.shopping-list').on('click','.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        
    });
}

$(shopList);

