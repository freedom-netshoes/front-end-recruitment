import React from 'react';

function bkp () {
  return (
    <div className='row center-xs'>
      <div id='container'>
        <section id='products' className='col-xs-12'>
          <ul className='row'>
            <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
              <a href='javascript:void(0);' title='Chuteira Nike'>
                <figure>
                  <img src='img/calcao-nike-corinthians.jpg' alt='Chuteira Nike' />
                </figure>
                <h4 className='title'>Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h4>
                <p className='price'>R$ <strong>149</strong>,90</p>
                <p className='installments'>ou 3 x <strong>R$ 25,00</strong></p>
              </a>
            </li>
            <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
              <a href='javascript:void(0);' title='Chuteira Nike'>
                <figure>
                  <img src='img/calcao-nike-corinthians.jpg' alt='Chuteira Nike' />
                </figure>
                <h4 className='title'>Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h4>
                <p className='price'>R$ <strong>49</strong>,90</p>
                <p className='installments'>ou 3 x <strong>R$ 25,00</strong></p>
              </a>
            </li>
            <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
              <a href='javascript:void(0);' title='Chuteira Nike'>
                <figure>
                  <img src='img/calcao-nike-corinthians.jpg' alt='Chuteira Nike' />
                </figure>
                <h4 className='title'>Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h4>
                <p className='price'>R$ <strong>9</strong>,90</p>
                <p className='installments'>ou 3 x <strong>R$ 25,00</strong></p>
              </a>
            </li>
            <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
              <a href='javascript:void(0);' title='Chuteira Nike'>
                <figure>
                  <img src='img/calcao-nike-corinthians.jpg' alt='Chuteira Nike' />
                </figure>
                <h4 className='title'>Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h4>
                <p className='price'>R$ <strong>149</strong>,90</p>
                <p className='installments'>ou 3 x <strong>R$ 25,00</strong></p>
              </a>
            </li>
            <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
              <a href='javascript:void(0);' title='Chuteira Nike'>
                <figure>
                  <img src='img/calcao-nike-corinthians.jpg' alt='Chuteira Nike' />
                </figure>
                <h4 className='title'>Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h4>
                <p className='price'>R$ <strong>149</strong>,90</p>
                <p className='installments'>ou 3 x <strong>R$ 25,00</strong></p>
              </a>
            </li>
          </ul>
        </section>
        <aside id='cart' className='open'>
          <form className="col-xs-12" role="form">
            <h3 className='cart-title'>
              <span className='bag'>
                <div className='total'>3</div>
              </span>
              Sacola
            </h3>
            <ul>
              <li className='row middle-xs delete'>
                <hr />
                <div className='col-xs-12 col-sm-9 start-sm'>
                  <figure>
                    <img src='img/calcao-nike-corinthians_thumb.jpg' alt='Chuteira Nike' />
                  </figure>
                  <h4 className='title'>Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h4>
                  <p className='size'>GG | Preto e branco</p>
                  <p className='quantity'>Quantidade: 2</p>
                </div>
                <div className='col-xs-12 col-sm-3 end-xs'>
                  <a href='javascript:void(0);' className='close ico-cancel33' />
                  <p className='price'>R$ <strong>149</strong>,90</p>
                </div>
              </li>
              <li className='row middle-xs'>
                <hr />
                <div className='col-xs-12 col-sm-9 start-sm'>
                  <figure>
                    <img src='img/calcao-nike-corinthians_thumb.jpg' alt='Chuteira Nike' />
                  </figure>
                  <h4 className='title'>Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h4>
                  <p className='size'>GG | Preto e branco</p>
                  <p className='quantity'>Quantidade: 2</p>
                </div>
                <div className='col-xs-12 col-sm-3 end-xs'>
                  <a href='javascript:void(0);' className='close ico-cancel33' />
                  <p className='price'>R$ <strong>149</strong>,90</p>
                </div>
              </li>
              <li className='row conclude'>
                <hr />
                <p className='subtotal col-xs-12 col-sm-6 start-sm'>Subtotal</p>
                <div className='col-xs-12 col-sm-6 end-sm'>
                  <p className='price'>R$ <strong>379</strong>,70</p>
                  <p className='installments'>ou em até 10 X <strong>R$ 37,97</strong></p>
                </div>
                <div className='col-xs-12 btn-buy-container'>
                  <input type='submit' className='btn-buy' value='Comprar' />
                </div>
              </li>
            </ul>
          </form>
        </aside>
      </div>
    </div>
  )
}

export default bkp;
