import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw501fef3d/images/ProductImages/110324/110324_434_l_WR.jpg?sw=900'},
    {id: 2, name: 'Mackbook', description: 'Apple macbook.', price: '$10', image: 'https://home.ripley.com.pe/Attachment/WOP_5/2004267031232/2004267031232_2.jpg'}
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;