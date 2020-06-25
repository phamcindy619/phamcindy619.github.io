import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home(props) {

    return (
        <div className="container">
            <Link to="files/CindyPhamResume.pdf" target="_blank" download>
                <Button outline color="primary">Resume</Button>
            </Link>
        </div>
    );
}

export default Home;