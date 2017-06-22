import fetch from 'isomorphic-fetch';

async function GetProdutos (url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET'
    }).then(response => {
      if (response.status >= 400) {
        reject({
          'message': 'Deu erro',
          response
        });
      }
      return response.json();
    }).then(response => {
      resolve({
        message: 'Consulta feita com sucesso',
        response
      });
    });
  });
}

export default GetProdutos;
