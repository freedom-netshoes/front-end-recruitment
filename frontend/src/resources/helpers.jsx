export const PriceFormat = (value) => {
    value = value.toFixed(2).toString().split('.');
    return { integer: value[0], decimal: value[1] };
};

export const InstallmentsFormat = (price, installments) => {
    return (price / installments).toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 })
};