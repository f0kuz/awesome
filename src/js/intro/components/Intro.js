import React from 'react';
import IntroHeader from './IntroHeader';
import ShapeAwesome from './../../common/components/ShapeAwesome';
import IntroSocial from './IntroSocial';


const Intro = () => (
    <section className="intro">
        <IntroHeader />
        <ShapeAwesome />
        <IntroSocial />
    </section>
);

export default Intro;
