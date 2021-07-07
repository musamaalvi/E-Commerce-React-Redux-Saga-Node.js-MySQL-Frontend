import React from 'react';
import List from '@material-ui/core/List';
import EachProductInstruction from "./ProductInstructionItem";
import { Divider } from '@material-ui/core';
import { Fragment } from 'react';
import ProductReviewItem from "./ProductReviewItem"
import { v4 as uuidv4 } from 'uuid';

let data = [
    {
        title: "Detail",
        body: " Combining our signature seamless knit with superior, sculpting design.• Figure - enhancing contours• Elasticated jacquard waistband• DRY technology• 56 % Nylon, 41 % Polyester, 3 % Elastane• Model is 5'5"
    },
    {
        title: "Care",
        body: "Do not use Water for cleaning"
    },
    {
        title: "Delivery",
        body: "Free shipping for orders over 99AUD. Internatonal shipping available."
    }
]

const ProductInstruction = ({reviews, review_body}) => {
    data[0].body = review_body
    return (
        <List
            style={{ textAlign: "center", alignItems: "center" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <Divider />
            <ProductReviewItem/>
            {data.map(each => {
                return (<Fragment key={uuidv4()}>
                    <EachProductInstruction data={each} />
                    <Divider title="Reviews"/>
                </Fragment>)
            })}
        </List>
    )

}

export default ProductInstruction;