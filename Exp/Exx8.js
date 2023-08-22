var objetos = Array('cadeira', 'impressora','garfo')
var inputTexT = document.getElementById('inputTexT')
var btnAdd = document.getElementById('btnAdd')
var btnOrdenar = document.getElementById('btnOrdenar')

btnAdd.addEventListener('click', adicionarobjeto)
btnOrdenar.addEventListener('click', ordenarObjetos)

function adicionarobjeto(){
    var valor = inputTexT.value.trim()
    if (valor === ''){
        alert('informe um valor valido')
        return
    }

    if(objetos.includes(valor)){
        alert('objeto ja foi adicionado')
        return
    }
   objetos.push(valor)
   console.log(objetos)

   inputTexT.value = ''
}

function ordenarObjetos(){
    objetos.sort()
    document.write(objetos)
    console.log(objetos)
}