import { useEffect, useState } from 'react';
import { Product } from '@/model/product';
import { pb } from '@/pocketbase';

export const ShopPage = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        pb.collection('products').getList<Product>()
            .then(res => {
                setProducts(res.items)
            })
    }

    console.log(products);

    return (
        <div>
            <h1 className='title'>SHOP</h1>

            {
                products.map(p => {
                    return (
                        <li key={p.id}>
                            { p.name }
                        </li>
                    )
                })
            }
        </div>
    )
}