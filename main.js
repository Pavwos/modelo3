$(window).on("load", function(){
    $(".cssload-container").delay(1000).fadeOut(500);
});

function contar(){
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('coloca certo seu animal 😡')
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if( p <= 0 ){
            window.alert('passo invalido cuzao')
            p = 1
        }
        if( i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c}  > `
            }
        } else{
            for(c = i; c >= f ; c -= p)
            res.innerHTML += ` ${c}  > `
        }
        res.innerHTML += `Fim`
    }
}