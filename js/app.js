var app = angular.module('AppPrueba', ['ngAnimate']);
 
/*app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
$stateProvider
		.state('main',{			
			url:'/main',
			templateUrl: 'template/tablaFoods.html',
			controller: 'controlmain'
			});

$urlRouterProvider.otherwise('/main');
}]);*/
function mensaje(){
  alert("Mensaje");
}		
function carga(url,id){
var pagecnx = createXMLHttpRequest();
pagecnx.onreadystatechange=function(){
  if (pagecnx.readyState == 4 &&
     (pagecnx.status==200 || window.location.href.indexOf("http")==-1))
	 document.getElementById(id).innerHTML=pagecnx.responseText;
  }
  pagecnx.open('GET',url,true)
  pagecnx.send(null)
}


function createXMLHttpRequest(){
var xmlHttp=null;
if (window.ActiveXObject) xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
else if (window.XMLHttpRequest)
	     xmlHttp = new XMLHttpRequest();
return xmlHttp;
}


app.controller('control1', function($scope) {
  //comentarios
  $scope.Datos = 1;
        //$scope.foods= ['pizza','carne','pollo','guiso'];
  $scope.cargar = function (){
   $('#contenido').html("<a href='javaScript:;' ng-click='cargar();'> asd </a>"); 
  $scope.Datos = $scope.Datos +1;
}
});// FIN control1
app.controller('control2', function($scope) {
  //comentarios
  $scope.Datos = 1;
        //$scope.foods= ['pizza','carne','pollo','guiso'];
  $scope.cargar = function (){
  $scope.Datos = $scope.Datos +1;
}
});// FIN control2

app.controller('controlmain', function($scope) {
  //comentarios
        $scope.foods= ['pizza','carne','pollo','guiso'];
});// FIN control1



function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenidoArc = e.target.result;
    mostrarContenido(contenidoArc);
  };
  lector.readAsText(archivo);
}
function clearFile(e){
   mostrarContenido('');
}

function mostrarContenido(contenidoArc) {
  var elemento = document.getElementById('contenido-archivo');
  elemento.innerHTML = contenidoArc;

}
