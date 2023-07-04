'use client'

import { NextPageContext } from 'next';

import { Abilities } from 'components/Abilities';
import { Filters } from 'components/Abilities/Filters';

export const Perks = () => {
    return (
        <main>
            <Filters />
            <Abilities />
        </main>
    )
}

export async function getServerSideProps(context: NextPageContext) {
    const { query } = context;

    return {
        props: {
            query,
        },
    };
}

export default Perks;