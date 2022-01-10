# Ramper - Micro-serviço de chat
​
Exemplo de funções lambdas invoke local calculando o termo total de uma sequência fibonacci e exibição da sequência fibonacci de um número;
  * Calcula o termo total da sequência fibonacci
  * Exibi a sequência fibonacci de um determinado número
​
### Configuração 
- clone o repositório
- rode o comando ```npm install -g serverless``` (pode ser necessário rodar utilizando sudo) para ter acesso ao framework serverless para criação de funções lambda
​
### Mão na massa
- para rodar a função local que calcula o termo da sequência fibonacci ```sls invoke local -f calcFibonacci -p app/lib/data-number.json```
- para rodar a função local que exibi a sequência fibonacci ```sls invoke local -f printSequenceFibonacci -p app/lib/data-number.json```

​

​

