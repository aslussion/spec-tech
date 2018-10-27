$("document").ready(function(){

  //form
  $('.phoneMask').livequery(function(){
        $(this).mask("(999) 999-99-99");
    });
    $(".formAjax").livequery(function(){
      $(this).validate({
        rules:validate_rules,
        messages:'',
      });
    });

    $(document).on('click', '.formAjax-button', function(){
      var form = $(this).closest('form');
        if(form.valid()){
          $.ajax({  
            type: 'GET',
            url: form.attr('action'),  
            data: form.serialize(), 
            success: function(html_res){
              if(html_res == 'success'){
                form.get(0).reset();
                $.fancybox('Сообщение успешно отправлено.');
              }
              else if(html_res == 'required'){
                $.fancybox('Не заполнены обязательные поля.');
              }

              else{
                $.fancybox('Не заполнены обязательные поля.');
              }
            },
          });
        }
        return false;
    });

    //fancybox
    $('.fancy').on('touchstart click', function(e) {
      var id = $(this).attr('href');
      if(id.length)
        $.fancybox($(id).html() );
      return false;
    });
    $('.fancyImg').fancybox({
      prevEffect  : 'none',
      nextEffect  : 'none',
    });

    //effects
    $(".js-boxl--left,.product:not(:first-child)").boxLoader({
      direction:"x",
      position: "50%",
      effect: "fadeIn",
      duration: "1s",
      windowarea: "85%"
    });
    $(".formInline").boxLoader({
      direction:"none",
      position: "none",
      effect: "fadeIn",
      duration: "2s",
      windowarea: "85%"
    });

    var ourPluses = $('.ourPlus .ourPlus-item');
    ourPluses.eq(0).boxLoader({
      direction:"x",
      position: "-50%",
      effect: "fadeIn",
      duration: "1s",
      windowarea: "85%"
    });
    ourPluses.eq(1).boxLoader({
      direction:"x",
      position: "-100%",
      effect: "fadeIn",
      duration: "2s",
      windowarea: "85%"
    });

    ourPluses.eq(2).boxLoader({
      direction:"x",
      position: "100%",
      effect: "fadeIn",
      duration: "2s",
      windowarea: "85%"
    });
    ourPluses.eq(3).boxLoader({
      direction:"x",
      position: "50%",
      effect: "fadeIn",
      duration: "1s",
      windowarea: "85%"
    });

});//end ready


