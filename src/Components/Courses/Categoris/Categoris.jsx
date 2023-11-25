
import { categories } from './CategorisData';
import Container from '../../../Pages/Shared/Container/Container';
import AllCategorisCard from './AllCategorisCard';
import { useSearchParams } from 'react-router-dom';

const Categoris = () => {
    const [params,SetParams] = useSearchParams()
    const category = params.get('category')
    console.log(category)
    return (
        <Container>
            <div className='pt-36 flex items-center justify-between overflow-x-auto'  data-aos="zoom-in">
                {
                    categories.map(categoryItem => <AllCategorisCard 
                        key={categoryItem.label}
                        label={categoryItem.label}
                        icon={categoryItem.icon}
                        selecte={category === categoryItem.label}
                    >

                    </AllCategorisCard>)
                }
            </div>
        </Container>
    );
};

export default Categoris;