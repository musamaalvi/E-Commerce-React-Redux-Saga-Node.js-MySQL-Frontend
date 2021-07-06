import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import { findSalesItems } from "../Actions/search.action"
import Sorting from '../Components/FilterSorting/Sorting';
import Filter from '../Components/FilterSorting/Filter'
import ProductList from "../Components/Product/ProductList"
import { categoryData, categoryDataHighToLow, categoryDataLowToHigh, newest } from "../data/category.data"
import { Col, Row } from "reactstrap"
import './product.css'
export function useDisplay(filter) {
    let initialData = filter === "sales" ? findSalesItems() : categoryData

    const [displayData, setDisplay] = useState(initialData);

    const searchResult = useSelector(state => state.SearchReducer).input;

    const sortData = (option) => {
        switch (option) {
            case "price-high-to-low":
                return categoryDataHighToLow
            case "price-low-to-high":
                return categoryDataLowToHigh
            case "newest":
                return newest
            default:
                return categoryData
        }
    }

    useEffect(() => {
        setDisplay(searchResult.length === 0 ? initialData : searchResult)
        // eslint-disable-next-line
    }, [searchResult])

    function sortDisplayList(option) {
        setDisplay(sortData(option) !== "" ? sortData(option) : initialData)
    }

    const handleFilter = (filteredProducts) => {
        setDisplay(filteredProducts.length > 0 ? filteredProducts : initialData)
    }

    return { displayData, sortDisplayList, handleFilter }

}

export default function ProductListPage({ sales }) {
    const filter = sales ? "sales" : "all"
    const { displayData, sortDisplayList, handleFilter } = useDisplay(filter)

    return (
        <div className="AllProducts">
            <Row className="">
                <Col xs={12} md={3}>
                    <Sorting onSort={sortDisplayList} />
                    <Filter handleFilter={handleFilter} />
                </Col>
                <Col xs={12} md={9} className="product_testing">
                    <ProductList display={displayData} />
                </Col>
            </Row>
        </div>
    );
}