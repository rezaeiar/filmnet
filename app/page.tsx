"use client"
import Poster from './components/templates/Home/Poster/Poster'
import Upcoming from './components/templates/Home/Upcoming/Upcoming'
import Genres from './components/templates/Home/Genres/Genres'
import LatestCars from './components/templates/Home/LatestCars/LatestCars'
import Cinema from './components/templates/Home/Cinema/Cinema'
import Suggestion from './components/templates/Home/Suggestion/Suggestion'
import { Latest } from './components/templates/Home/Latest/Latest'

const Home = () => {

    return (
        <>
            <Latest></Latest>
            <Suggestion></Suggestion>
            <Cinema></Cinema>
            <LatestCars></LatestCars>
            <Genres></Genres>
            <Poster></Poster>
            <Upcoming></Upcoming>
        </>
    )
}

export default Home