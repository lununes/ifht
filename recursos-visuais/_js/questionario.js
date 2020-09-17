/**
 * Fun��o para alinhar as respostas do questionario das licoes
 */

jQuery(document).ready(function($){
    // multipla escolha
    var item = $(".answeroption .fitem");

    item.checkbox.removeClass("col-md-9");
    item.checkbox.addClass("col-12");
    item.getElementsByClassName("col-md-3").setAttribute("style", "display:none;");

    // verdadeiro ou falso
    var item = $(".fcontainer .fitem .felement");

    item.removeClass("col-md-9");
    item.addClass("col-md-12");
});
