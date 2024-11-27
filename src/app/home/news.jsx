import { Container } from '@chakra-ui/react';
import React from 'react';

const mockNews = [
    {
        title: 'News 1',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
    },
    {
        title: 'News 2',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
    },
    {
        title: 'News 3',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
    },
    {
        title: 'News 4',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
    },
    {
        title: 'News 5',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
    },
    {
        title: 'News 6',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
    },
    {
        title: 'News 7',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
    },
    {
        title: 'News 8',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies lacinia. Nullam nec nunc nec nunc ultricies',
    },
];
const News = () => {
    return (
        <Container>
            <h2>news</h2>
            <ul>
                {mockNews.map((news, index) => (
                    <li key={index}>
                        <h3>{news.title}</h3>
                        <p>{news.content}</p>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default News;
