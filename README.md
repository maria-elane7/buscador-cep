# Buscador de CEP

Uma pagina simples de cadastro que consulta um CEP e preenche automaticamente os dados de endereço. O projeto foi feito com HTML, CSS e JavaScript e utiliza a API pública ViaCEP.

Este projeto foi desenvolvido para praticar JavaScript e o consumo de APIs.

Ao sair do campo **CEP**, o sistema verifica se o valor possui oito dígitos numéricos. Se estiver válido, consulta o endereço na API e informa o logradouro, bairro, cidade e estado nos campos correspondentes.

## Link do projeto: https://maria-elane7.github.io/buscador-cep/

## Funcionalidades

- Consulta de CEP pela API ViaCEP
- Preenchimento automático de endereço, bairro, cidade e estado
- Validação básica do formato do CEP
- Mensagens para CEP invalido, CEP nao encontrado e falha na consulta
- Layout responsivo

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- [ViaCEP](https://viacep.com.br/)

## Como executar

Não é necessário instalar pacotes ou configurar um servidor.

1. Baixe ou clone este repositorio.
2. Abra o arquivo `index.html` no navegador.

Você também pode usar a extensão Live Server do VS Code para abrir o projeto com mais praticidade.

## Como usar

1. Digite um CEP com oito numeros no campo indicado, por exemplo: `01001000`.
2. Clique fora do campo ou pressione a tecla **Tab**.
3. Aguarde a consulta.
4. Os campos de endereço, bairro, cidade e estado serão preenchidos automaticamente.

> Digite apenas numeros no campo CEP. Por exemplo, use `01001000` em vez de `01001-000`.

## Estrutura do projeto

```text
buscador-cep/
|-- index.html
|-- assets/
|   |-- css/
|   |   `-- style.css
|   `-- js/
|       `-- script.js
`-- README.md
```

## Como funciona

A consulta acontece no arquivo `assets/js/script.js`. Quando o campo CEP perde o foco, o JavaScript cria uma requisição para o ViaCEP:

```text
https://viacep.com.br/ws/{cep}/json/
```

Depois, a resposta da API é usada para preencher o formulário. Caso o CEP não exista ou a requisição falhe, uma mensagem curta aparece no campo de endereço.

## Observacoes

- Este projeto depende da disponibilidade da API ViaCEP e de uma conexao com a internet.
- O botao **Salvar** ainda nao envia ou persiste os dados.
- O campo CEP aceita somente oito caracteres numericos.
