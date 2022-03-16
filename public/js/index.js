

var count =0;
var persona = {
    nome: 'Fulano De Tal',
    situacao: 'Desempregado',
    foto : '',
}

const image1 ="./public/images/homem_sem_dinheiro.jpg";
const image2 ="./public/images/homem_buscando_emprego.jpg";
const image3 ="./public/images/homem_com_dinheiro2.jpg";

// 
window.onload = function() {

    let btn1 =document.querySelector('#shift');

    if(! btn1) {
        alert('Erro! Componente "shift" não localizado.');
        return;
    };

    // atribui evento ao botão
    btn1.onclick = shift;
    // simula o clicque do botão
    btn1.click();

};


// troca situação do persona
function shift() {
    count++;

    if( count==1 ) {
        persona.nome = 'Fulano De Tal';
        persona.situacao = 'Desempregado';
        persona.foto = image1;
    }
    else if( count==2 ) { 
        persona.nome = 'Sr. Esperanza';
        persona.situacao = 'Buscando emprego';
        persona.foto = image2;
    }
    else if( count==3 ) { 
        persona.nome = 'Dr. Feliz Fortunato';
        persona.situacao = 'Empregado';
        persona.foto = image3;

        // zera contador do app
        count =0;
    };

    //console.log('persona.foto: ',  persona.foto);

    //  atribui valor aos elementos html
    document.querySelector('#name').innerHTML = 'Nome: '+persona.nome;
    document.querySelector('#situation').innerHTML = 'Situação : '+persona.situacao;
    document.querySelector('#photo').setAttribute('src', persona.foto); 
}