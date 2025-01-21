import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findProductsByCategory } from '../../../State/Product/Action'; // Adjust this import path

const useProductsByCategory = (categoryName) => {
    const dispatch = useDispatch();
    // Access the productsByCategory state correctly
    const productsByCategory = useSelector(state => state.products.productsByCategory);

    useEffect(() => {
        // Dispatch the action to fetch products by category
        dispatch(findProductsByCategory(categoryName));
    }, [dispatch, categoryName]);

    // Return products specific to the category or an empty array if none
    return productsByCategory[categoryName] || [];
};

export default useProductsByCategory;
