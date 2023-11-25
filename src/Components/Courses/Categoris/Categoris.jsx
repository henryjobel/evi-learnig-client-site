import React from 'react';
import { categories } from './CategorisData';
import Container from '../../../Pages/Shared/Container/Container';
import AllCategorisCard from './AllCategorisCard';

const Categoris = () => {
    return (
        <Container>
            <div className='pt-36 flex items-center justify-between overflow-x-auto'>
                {
                    categories.map(category => <AllCategorisCard 
                        key={category.label}
                        label={category.label}
                        icon={category.icon}
                    >

                    </AllCategorisCard>)
                }
            </div>
        </Container>
    );
};

export default Categoris;