import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
    padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>  loading ? <Loader />:
    <Container>
        <Helmet>
            <title>TV Shows | Brandon Kim</title>
        </Helmet>
        { topRated && topRated.length > 0 && (
        <Section title="Top Rated TV">
        { topRated.map(tv => 
            <Poster 
                key={tv.id}
                id={tv.id} 
                title={tv.original_name} 
                imageUrl={tv.poster_path}  
                rating={tv.vote_average} 
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={false}
            />
            ) }
        </Section>
        )}

        { airingToday && airingToday.length > 0 && (
        <Section title="On Air">
        { airingToday.map(tv => 
            <Poster 
                key={tv.id}
                id={tv.id} 
                title={tv.original_name} 
                imageUrl={tv.poster_path}  
                rating={tv.vote_average} 
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={false}
            />
            ) }
        </Section>
        )} 


        { popular && popular.length > 0 && (
        <Section title="Popular">
        { popular.map(tv => 
            <Poster 
                key={tv.id}
                id={tv.id} 
                title={tv.original_name} 
                imageUrl={tv.poster_path}  
                rating={tv.vote_average} 
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={false}
            />
            ) }
        </Section>
        )}
        { error && <Message color ="#d63031" text={ error }/>} 
    </Container>
    ;

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array, 
    airingToday: PropTypes.array, 
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter;