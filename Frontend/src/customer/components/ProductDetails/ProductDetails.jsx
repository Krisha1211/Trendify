
import { useEffect, useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { Rating } from '@mui/material'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ProductReviewcard from './ProductReviewcard';
import LinearProgress from '@mui/joy/LinearProgress';
import Box from '@mui/material/Box';
import Part2data from '../homesectionpart2/part2data';
import Homesectionpart2 from '../homesectionpart2/homesectionpart2';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProductsById } from '../../../State/Product/Action';
import { addItemToCart } from '../../../State/Cart/Action';
import useProductsByCategory from '../homesectionpart2/category';

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {products}=useSelector(store=>store)

    const handleaddtocart = () => {
        const data={productId:params.productId,size:selectedSize.name}

        dispatch(addItemToCart(data))
        navigate("/cart")
    }

    useEffect(() => {
        const data = { productId: params.productId }
        dispatch(findProductsById(data))
    }, [params.productId])
 console.log(products.product);
    const categorywise = useProductsByCategory(products.product?.category.name);
    console.log(categorywise);
    return (
        <div className="bg-white lg:px-20">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                src={products.product?.imgeUrl}
                                alt={product.images[0].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex  flex-wrap space-x-5 justify-center">
                            {product.images.map((item) =>
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 ">
                                    <img
                                        src={products.product?.imgeUrl}
                                        alt={item.alt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>)}
                        </div>

                    </div>

                    {/* Product info */}
                    <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900 text-left">{products.product?.brand}</h1>
                            <h1 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1 text-left'>{products.product?.title}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className='flex space-x-5 items-center text-lg lg:text-xl text-color-gray-900 mt-6'>
                                <p className='font-semibold'>
                                   {products.product?.discountedPrice}
                                </p>
                                <p className='opacity-50 line-through'>
                                   {products.product?.price}
                                </p>
                                <p className='text-green-600 font-semibold'>
                                   {products.product?.discountPresent}
                                </p>

                            </div>
                            {/* Reviews */}
                            <div className="mt-6 ">
                                <div className='flex items-center space-x-3'>
                                    <Rating name="read-only" value={5.5} readOnly />
                                    <p className='opacity-50 text-sm'>
                                        5462 Ratings</p>
                                    <p className='ml-3 text-sm font-meadium text-indigo text-indigo-600 '>
                                        26541 Reviews
                                    </p>
                                </div>

                            </div>

                            <form className="mt-10">

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                        >
                                            {product.sizes.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ focus }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            focus ? 'ring-2 ring-indigo-500' : '',
                                                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                                                        )
                                                    }
                                                >
                                                    {({ checked, focus }) => (
                                                        <>
                                                            <span>{size.name}</span>
                                                            {size.inStock ? (
                                                                <span
                                                                    className={classNames(
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        focus ? 'border' : 'border-2',
                                                                        'pointer-events-none absolute -inset-px rounded-md',
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>
                                <div className='text-left py-2'>
                                    <Button onClick={handleaddtocart} variant="contained" sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}>
                                        Add To Cart
                                    </Button>
                                </div>

                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Description</h3>
                                
                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{products.product?.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </section>
                {/* for rating and review */}
                <section >
                    <h1 className='font-semibold text-lg pb-4 text-left'>Recent Review & Rating</h1>
                    <div className='border p-5'>
                        {/* total grid is 12.. */}
                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className='space-y-5'>
                                    {[1, 1, 1].map((item) => <ProductReviewcard />)}
                                </div>

                            </Grid>

                            <Grid items xs={5} >
                                <h1 className='text-xl font-semibold pt-14 pb-2 text-left'>Product Rating</h1>
                                <div className='flex items-center space-x-3'>
                                    <Rating value={4.6} precision={0.5} readOnly />
                                    <p className='opacity-60'>863215 85522</p>
                                </div>

                                <Box className="mt-5">
                                    <Grid container alignItems="center" gap={2} className='pb-2' >
                                        <Grid items xs={2}>
                                            <p className='text-left'>Excellent</p>
                                        </Grid>
                                        <Grid items xs={7}>
                                            <LinearProgress color='success' variant='outlined' size='md' determinate value={40} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2} className='pb-2'>
                                        <Grid items xs={2}>
                                            <p className='text-left'>Very Good</p>
                                        </Grid>
                                        <Grid items xs={7}>
                                            <LinearProgress color='primary' variant='outlined' size='md' determinate value={35} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2} className='pb-2'>
                                        <Grid items xs={2}>
                                            <p className='text-left'>Good</p>
                                        </Grid>
                                        <Grid items xs={7}>
                                            <LinearProgress color='neutral' variant='outlined' size='md' determinate value={30} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2} className='pb-2'>
                                        <Grid items xs={2}>
                                            <p className='text-left'>Avarage</p>
                                        </Grid>
                                        <Grid items xs={7}>
                                            <LinearProgress color='warning' variant='outlined' size='md' determinate value={20} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2} className='pb-2'>
                                        <Grid items xs={2}>
                                            <p className='text-left'>Poor</p>
                                        </Grid>
                                        <Grid items xs={7}>
                                            <LinearProgress color='danger' variant='outlined' size='md' determinate value={10} />
                                        </Grid>
                                    </Grid>
                                </Box>

                            </Grid>

                        </Grid>
                    </div>
                </section>


                {/* for similar products.. */}
                <section className='pt-10'>
                    <h1 className='text-left py-2 text-xl font-bold'>Similar Product</h1>
                    <div className='flex flex-wrap space-y-5'>
                        {categorywise.map((item) => <Homesectionpart2  key={item.id} product={item} />)}
                    </div>
                </section>
            </div>
        </div>
    )
}
