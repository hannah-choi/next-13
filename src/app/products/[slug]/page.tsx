import React from 'react';

type Props = {
    params: {
        slug: string;
    };
};

export default function ProductItem({ params }: Props) {
    return <h1>{params.slug} details</h1>;
}

export function generateStaticParams() {
    //다이나믹 라우팅을 하면서 특정 페이지만 정적 라우팅을 하고싶을때
    const products = ['Shirt', 'Skirt'];
    return products.map((product) => ({
        slug: product
    }));
}
