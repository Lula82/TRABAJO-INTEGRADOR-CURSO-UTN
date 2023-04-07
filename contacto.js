let name= $("#nombre").val();
    let email= $("#email").val();
    let number= $("#telefono").val();
    let mensaje= $("#mensaje").val();
    var errors = 0;
function validateForm(){
    
    if(name.length < 2)
    {
       errors++;
       $("#nombre").addClass('error');   
    }
    else
    {
       $("#nombre").removeClass('error');
    }
    if(mensaje.length < 5)
    {
       errors++;
       $('#mensaje').addClass('error');   
    }
    else
    {
       $('#mensaje').removeClass('error');
    }
    if(errors==0){
        location.assign("success.html");
    }
}
$("#submit-btn").on("click", function(e){
    e.preventDefault();
    console.log("ENVIADO");
    validateForm();
});