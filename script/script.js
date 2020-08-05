var data = new Date()
var hora = Number(data.getHours())
var minutos = data.getMinutes()
// var segundos = data.getSeconds()
var foto = document.getElementById('foto')
var titulo = document.getElementById('_title')
var mensagem = document.getElementById('_mensagem')
// hora = 0
// minutos = 0
// segundos = 5

    if (hora <= 9){
        var hora = '0' + Number(data.getHours())
        // var hora = '0' + hora
        }

    if (minutos <= 9){
        var minutos = '0' + data.getMinutes()
        // var minutos = '0' + minutos
        }

    // if (segundos <= 9){
    //     var segundos = '0' + data.getSeconds()
    //     //var minutos = '0' + minutos
    // }

        function alterar() {
            var teste = document.getElementById('teste')
            // window.alert(`${hora}h${minutos}m${segundos}, ${teste}`)
            console.log(teste.value)
            console.log(data)
            console.log(hora)
        }

        function carregar() {
            // var foto = document.getElementById('foto')
            // var titulo = document.getElementById('_title')
            // var mensagem = document.getElementById('_mensagem')

            
            if ( hora >= 0 && hora < 1) { //MEIA NOITE
                foto.src = "images/meianoite.png"
                titulo.innerHTML = `<strong>MEIA NOITE !!!</strong>`
                mensagem.innerHTML = `HORÁRIO OFICIAL DO<p>ÓLEO<p>DE<p>MACACO<p>${hora}:${minutos}!`
                document.body.style.background = 'black'
            }

                else if ( hora >= 1 && hora < 5) { //MADRUGADA
                    foto.src = 'images/madrugada.png'
                    titulo.innerHTML = `Bom dia ou Boa noite?`
                    mensagem.innerHTML = `Agora são exatamente ${hora}:${minutos}h!`
                    document.body.style.background = 'rgb(21, 17, 32)'
                }
            
                else if ( hora >= 5 && hora < 12) { //BOM DIA!!
                    foto.src = "images/manhã.png" 
                    titulo.innerHTML = `Bom dia!`
                    mensagem.innerHTML = `Agora são exatamente ${hora}:${minutos}h!`
                    document.body.style.background = '#8abdbd'
                }
            
                else if (hora >= 12 && hora <= 17) { //BOA TARDE!!
                    foto.src = "images/tarde.png"
                    titulo.innerHTML = `Boa tarde!`
                    mensagem.innerHTML = `Agora são exatamente ${hora}:${minutos}h!`
                    document.body.style.background='orange'
                }
            
                else { //BOA NOITE
                    foto.src = "images/noite.png"
                    titulo.innerHTML = `Boa noite!`
                    // mensagem.innerHTML = `Agora são ${hora}h${minutos}m${segundos}!`
                    mensagem.innerHTML = `Agora são exatamente ${hora}:${minutos}h!`
                    document.body.style.background='#515154'
                }
        }

        function simular() {
            var teste = document.getElementById('teste')
            data = Number.parseInt(teste.value)
            hora = data
            console.log(teste.value)
            console.log(data)
            console.log(hora)

            if (hora <= 9){
                var hora = '0' + hora
            }

            if ( hora >= 0 && hora < 1) { //MEIA NOITE
                foto.src = "images/meianoite.png"
                titulo.innerHTML = `<strong>MEIA NOITE !!!</strong>`
                mensagem.innerHTML = `HORÁRIO OFICIAL DO<p>ÓLEO<p>DE<p>MACACO<p>${teste.value}h!`
                document.body.style.background = 'black'
            } 
                
                else if ( hora >= 1 && hora < 5) { //MADRUGADA
                    foto.src = 'images/madrugada.png'
                    titulo.innerHTML = `Bom dia ou Boa noite?`
                    mensagem.innerHTML = `Agora são ${teste.value}h!`
                    document.body.style.background = 'rgb(21, 17, 32)'
                } 
                
                else if ( hora >= 5 && hora < 12) { //BOM DIA!!
                    foto.src = "images/manhã.png" 
                    titulo.innerHTML = `Bom dia!`
                    mensagem.innerHTML = `Agora são ${teste.value}h!`
                    document.body.style.background = '#8abdbd'
                } 
                
                else if (hora >= 12 && hora <= 17) { //BOA TARDE!!
                    foto.src = "images/tarde.png"
                    titulo.innerHTML = `Boa tarde!`
                    mensagem.innerHTML = `Agora são ${teste.value}h!`
                    document.body.style.background='orange'
                } 
                
                else if (hora <= 23) { //BOA NOITE
                    foto.src = "images/noite.png"
                    titulo.innerHTML = `Boa noite!`
                    // mensagem.innerHTML = `Agora são ${hora}h${minutos}m${segundos}!`
                    mensagem.innerHTML = `Agora são ${teste.value}h!`
                    document.body.style.background='#515154'
                }
                
                else {
                    mensagem.innerHTML = `Insira um valor válido.`
                }

        }
        

        

        