
/*funcion para validar campos del formulario*/
function fn_validar(){
        var rut = $("#txt_rut").val();
        var data = data;
        var nombre = $("#txt_nombre").val();
        var apellido_paterno = $("#txt_paterno").val();
        var apellido_materno = $("#txt_materno").val();
        var email = $("#txt_email").val();
        var cuenta = $("#cmb_cuenta option:selected").text();
        var contra1 =$("#txt_contrena").val() ;
        var contra2 =$("#txt_validar_conta").val();
        var validador = true;

        $("#mensajes").empty();
        if(rut == "") {
            validador = false;
            $('#mensajes').append('<li> Debe ingresar rut </li>');
        
        }
        if(nombre == "") {
            validador = false;
            $("#mensajes").append('<li> Debe ingresar nombre </li>');
            
        }
        if(nombre.length <=4){
            $("#mensajes").append('<li> Debe ingresar nombre de al menos 4 letras </li>');
        } 
        if(apellido_paterno == "") {
            validador = false;
            $("#mensajes").append('<li> Debe ingresar su apellido paterno </li>');        
        }
        if(apellido_materno == "") {
            validador = false;
            $("#mensajes").append('<li> Debe ingresar su apellido materno </li>');        
        }
        if(email == "") {
            validador = false;
            $("#mensajes").append('<li> Debe ingresar email </li>');        
        }
        if(cuenta == "Seleccione...") {
            validador = false;
            $("#mensajes").append('<li> Debe ingresar su tipo de cuenta  </li>');        
        }
        if(contra1 == ""){
            validador = false;
            $("#mensajes").append('<li> Debe ingresar contraseña</li>');
        }
        if(contra1.length <= 8){
            validador = false;
            $("#mensajes").append('<li> Debe ingresar contraseña de al menos 8 digitos </li>');

        }
        if(contra2.length <= 8){
            validador = false;
            $("#mensajes").append('<li>Debe tener el mismo largo que la primera contraseña</li>');
        }
        if(contra2 == ""){
            validador = false;
            $("#mensajes").append('<li> Debe repetir contraseña</li>');
        }
        if(contra2 !== contra1 ){
            validador = false;
            $("#mensajes").append('<li> Las contraseñas deben coincidir</li>');
        }
       
        if(validador){
            $("#lbl_registro").text("Usuario registrado correctamente");
            $("#lbl_registro").addClass('text-success');
           
            	
             
        }
    
    var valorRut = $("#txt_rut");  
    $.getJSON('https://api.libreapi.cl/rut/validate?rut='+valorRut.val(),function(data){
            var data = data;
            console.log(data);
            if(data) {
                $("#lbl_rut").text('El rut es correcto');	
                $("#lbl_rut").addClass('text-success');
            }
    });
   
}
/*funcion para limpiar txt del fomulario con el boton limpiar*/ 
function fn_limpiar(){
    $("#mensajes").empty();
    contra1 = $("#txt_contrena").val("") ;
    contra2 = $("#txt_validar_conta").val("");
    nombre = $("#txt_nombre").val("");
    apellido_paterno = $("#txt_paterno").val("");
    apellido_materno = $("#txt_materno").val("");
    email = $("#txt_email").val("");
    cuenta = $("#cmb_cuenta option:selected").text();
    rut = $("#lbl_rut").text('');	
    ruts = $("#txt_rut").val("");
    
};
/* funcion que trae la informacion economica y de la temperatura*/
function informacion(){
    $.getJSON('https://api.libreapi.cl/economy/indicators', function(data){      
        var infoeco = data; 
        $("#lbl_ecoInfo").text("Indicadores Economicos : Dólar: $"+Math.round(infoeco.data.dolar)+
        " - Euro: $"+Math.round(infoeco.data.euro)+" - UF: $"+Math.round(infoeco.data.uf));
      });
      
      $.getJSON('https://api.libreapi.cl/weather/stations?name=Pudahuel%20Santiago',function(data){   
        var temperatura = data; 
        $("#lbl_climas").text("Temperatura Actual: "+Math.round(temperatura.data[0].temperature)+"°");
      });
  };

/*se le da la funcion a los botons para gestionar el proceso*/
$('#btn_limpiar').click(function(){
    fn_limpiar()
})

$('#btn_registrar').click(function(){
   
    fn_validar();
})
