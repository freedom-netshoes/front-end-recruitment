import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import Installments from 'Installments';
import Photo from 'Photo';
import Price from 'Price';
import Title from 'Title';
import styles from './Catalog.scss';

@CSSModules(styles)
class Catalog extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <section {...{
        className: 'col-xs-12',
        id: 'products',
        styleName: 'products'
      }}>
        <ul className='row'>
          <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
            <a href='javascript:void(0);' title='Chuteira Nike'>
              <Photo />
              <Title />
              <Price />
              <Installments />
            </a>
          </li>
          <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
            <a href='javascript:void(0);' title='Chuteira Nike'>
              <Photo />
              <Title />
              <Price />
              <Installments />
            </a>
          </li>
          <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
            <a href='javascript:void(0);' title='Chuteira Nike'>
              <Photo />
              <Title />
              <Price />
              <Installments />
            </a>
          </li>
          <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
            <a href='javascript:void(0);' title='Chuteira Nike'>
              <Photo />
              <Title />
              <Price />
              <Installments />
            </a>
          </li>
          <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
            <a href='javascript:void(0);' title='Chuteira Nike'>
              <Photo />
              <Title />
              <Price />
              <Installments />
            </a>
          </li>
          <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
            <a href='javascript:void(0);' title='Chuteira Nike'>
              <Photo />
              <Title />
              <Price />
              <Installments />
            </a>
          </li>
          <li className='col-md-4 col-sm-6 col-xs-12 center-xs'>
            <a href='javascript:void(0);' title='Chuteira Nike'>
              <Photo />
              <Title />
              <Price />
              <Installments />
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Catalog;
