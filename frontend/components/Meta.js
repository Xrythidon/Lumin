import React from 'react'
import Head from 'next/head'

const Meta = ({title, description, keywords}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
    )
}

Meta.defaultProps = {
    title: "Welcome to Lumin :)",
    description: "Handmade Dainty Jewelry",
    keywords: "Dainty Jewelry, Gold, Lumin, Etsy, ShopLuminJewelry"
}

export default Meta
