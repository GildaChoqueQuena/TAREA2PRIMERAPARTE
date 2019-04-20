/*ejercicio3*/

router.get('/ejercicio3', function(req, res, next){
  var params = req.query;
  var res = params.res;
  var matris1 = new Array();
  var matris2 = new Array();
  var cont=0;
  var consulta;
  matris1 = matris1[0].split(",");
  matris2 = matris2[1].split(",");
  for (var i = 0; i < matrix1.length; i++) {
    for (var j = 0; j < matrix2.length; j++) {
      if(matris1[i] == matris2[j]){
        cont ++;
      }
    }
  }
  if(const==matris1.length && const==matris2.length){
    consulta = true;
  }
  else{
    consulta = false;
  }
});
