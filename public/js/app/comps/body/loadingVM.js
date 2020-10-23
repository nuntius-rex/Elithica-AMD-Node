define(['knockout'], function(ko) {
  return function loadingViewModal() {
    console.log("loading VM loaded...");


    this.loadingCSS=ko.observable(`
      #loadingDiv{
        text-align:center;
      }
    `);

    $(document).ready(function(){
        //$('#loadingDiv').show();
        setTimeout(function(){
          $('#loadingDiv').hide();
          $('main').fadeIn();
        }, 500);
    });

  } //End VM function
}); //End Module
