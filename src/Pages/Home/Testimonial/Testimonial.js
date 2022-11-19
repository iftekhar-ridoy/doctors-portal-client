import React from 'react';
import img1 from '../../../assets/icons/quote.svg'
import reviewer1 from '../../../assets/images/people1.png';
import reviewer2 from '../../../assets/images/people2.png';
import reviewer3 from '../../../assets/images/people3.png';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: reviewer1
        },
        {
            _id: 2,
            name: 'Winson Harry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: reviewer2
        },
        {
            _id: 3,
            name: 'Winson Harry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: reviewer3
        }

    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patents Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48 ' src={img1} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;