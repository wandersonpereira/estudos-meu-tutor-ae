Banco Santo André

Dado o exercicio 16, crie uma função na class ExtratoRepository que adicione um gasto de um cliente (por cpf) exemplo:

```bash
{
    "cpf": "76534062002",
    "local": "Magalu",
    "valor": 3000.00
}
```

Nesta função se um cliente não tiver mais saldo disponível, não deve adicionar mais gastos e deve imprimir uma mensagem notificando que já foi consumido todo saldo;

Na Classe SaldoClienteRepository criar uma função para alterar o limite de crédito de um cliente, porem só poderá almentar o limite se o valor solicitado for menor que 10% do limite atual;