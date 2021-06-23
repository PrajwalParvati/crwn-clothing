import react from 'react'
import ShopData from './shop.data'
import CollectionPreview from '../preview-collection/collection-preview.component'
//import {Switch, Route } from 'react-router-dom';
class ShopPage extends react.Component {
    constructor() {
        super()
        this.state = {
            collection: ShopData

        }

    }
    render() {
        const { collection } = this.state
        return <div className="shop-page">
            {
                collection.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    }

}
export default ShopPage;