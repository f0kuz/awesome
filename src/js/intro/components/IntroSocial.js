import React from 'react';
import facebook from './../../../assets/images/facebook.svg';
import twitter from './../../../assets/images/twitter.svg';
import googleplus from './../../../assets/images/googleplus.svg';


const IntroSocial = () => {
    let introSocialInvitationText;
    if (window.innerWidth >= 768) {
        introSocialInvitationText = (
            <p className="intro__social--invitation">Look carefully and notice every detail, nothing tricky though.</p>
        )
    } else {
        introSocialInvitationText = (
            <p className="intro__social--invitation">
                <span className="text-nowrap">Look carefully and notice every detail,</span>
                <br /> nothing tricky though.
            </p>
        )
    };

    return (
        <div className="intro__social">
            {introSocialInvitationText}

            <span className="intro__social--profile">
                <a href="/"><img src={facebook} className="intro__social--icon" alt="awesome facebook" /></a>
                {/* using a "hard space" to prevent adding new nodes like e.g. <span> and additional CSS margin property */}
                &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;AWESOME
            </span>
            <span className="intro__social--profile">
                <a href="/"><img src={twitter} className="intro__social--icon" alt="awesome twitter" /></a>
                &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;AWESOME
            </span>
            <span className="intro__social--profile">
                <a href="/"><img src={googleplus} className="intro__social--icon" alt="awesome google+" /></a>
                &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;AWESOME
            </span>
        </div>
    );
};

export default IntroSocial;
