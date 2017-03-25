// Config data
const Config = {
  cartArea: 30, // Área em pixels que se o mouse entrar, a sessão do carrinho aparece
  currencyFormat: 'R$',
  dir_content: 'img/', // Diretório das fotos
  url_json: 'data/products.json', // URL dos dados JSON dos produtos
  url_submit: '/' // URL enviada após o envio do submit do carrinh
};

const ToSeo = function () {
  const with_accent = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ/';
  const no_accent = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC-';
  const new_str = '';

  for (let i = 0; i < this.length; i++) {
    if (with_accent.search(this.substr(i, 1)) >= 0) {
      new_str += no_accent.substr(with_accent.search(this.substr(i, 1)), 1);
    } else {
      new_str += this.substr(i, 1);
    };
  };
  return new_str.toLowerCase().replace(/ /g, "-");
};


const FormatPrice = {
  // Splita o número fracionário
  getSplit: function(price) {
    price = price.toFixed(2).toString().split('.');
    return {int: price[0], float: price[1]};
  },
  // Calcula o valor da parcela e retorna com vírgula
  getInstallments: function(installments, price) {
    return installments > 1 ? (price / installments).toFixed(2).replace('.', ',') : '';
  }
};

export {Config, ToSeo, FormatPrice};