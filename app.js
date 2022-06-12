let pedidodeproducto = Number(prompt("Ingrese el precio del producto"))
let pedidodecuotas = Number(prompt("Ingrese cantidad de cuotas (hasta 12)"))
let resultado;

if (pedidodecuotas <= 12 ) {
resultado = alert("El precio por cuotas es de:" + pedidodeproducto / pedidodecuotas)
 const dividir = (pedidodeproducto, pedidodecuotas) => {
     let resultado;
     resultado = pedidodeproducto / pedidodecuotas
    return resultado}

 console.log(dividir(pedidodeproducto, pedidodecuotas))
} else {
    alert("Solo puedes solicitar hasta 12 cuotas!")
}

