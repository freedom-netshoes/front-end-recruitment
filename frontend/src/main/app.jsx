import axios from 'axios'
import WebConfig from '../resources/WebConfig'
import React, { Component } from 'react';

// async componentDidMount () {
//  const request = await fetch('full-patch/products');
//  const result = await request.json()
//  this.setState({
//   products: result
//  })
// }

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {products : []}
    }

    async componentDidMount() {
        await axios.get(WebConfig.apiProductUrl).then(res => {
            this.setState({
                products: res.data
            })
        }).catch(result => {
            console.log(result.message);
        });

    }
getInitialState() {
    return {data: {products : []}};
}
    render() {
        return (
            <div className='row center-xs'>
                <div className='container'>
                    {this.props.products.map(product => (
                        <li {...{
                            className: 'col-md-4 col-sm-6 col-xs-12 center-xs',
                            key: product.id
                        }}>
                            <a {...{
                                href: 'javascript:void(0);',
                                onClick: () => {
                                },
                                title: product.title
                            }}>
                            </a>
                        </li>
                    ))}
                </div>
            </div>
        );
    }
}