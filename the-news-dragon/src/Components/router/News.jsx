import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from './EditorInsights';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id
    } = news;
    return (
        <div>
            <div>
                <h2 className='mt-2'>Dragon News</h2>
                <Card className='mb-5'>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/category/${category_id
                            }`}><Button variant="danger">
                                <FaArrowLeft />
                                All news in this category</Button></Link>
                    </Card.Body>
                </Card>
            </div>
            <EditorInsights></EditorInsights>
        </div>
    );
};

export default News;