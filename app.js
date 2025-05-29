function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
                <div class="feedback-buttons">
                    <button class="btn-sabia">Eu sabia</button>
                    <button class="btn-nao-sabia">Não sabia</button>
                </div>
            </div>
        </div>
    `;

    cartao.addEventListener('click', function(e) {
        
        if (!e.target.classList.contains('btn-sabia') && !e.target.classList.contains('btn-nao-sabia')) {
            this.classList.toggle('virado');
        }
    });

    
    const btnSabia = cartao.querySelector('.btn-sabia');
    const btnNaoSabia = cartao.querySelector('.btn-nao-sabia');
    
    btnSabia.addEventListener('click', function() {
        cartao.classList.add('sabia');
        cartao.classList.remove('nao-sabia');
        
    });
    
    btnNaoSabia.addEventListener('click', function() {
        cartao.classList.add('nao-sabia');
        cartao.classList.remove('sabia');
        
    });

    container.appendChild(cartao);
}

let totalCartoes = 0;
let cartoesEstudados = 0;

function atualizarProgresso() {
    document.getElementById('contador').textContent = cartoesEstudados;
    document.getElementById('total').textContent = totalCartoes;
    document.querySelector('.progresso-preenchido').style.width = `${(cartoesEstudados / totalCartoes) * 100}%`;
}
