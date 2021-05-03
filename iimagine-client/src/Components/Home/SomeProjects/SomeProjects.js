import React, { useState } from 'react';
import AttachmentIcon from '@material-ui/icons/Attachment';
import './SomeProjects.css'

const projectsData = [
    {
        id: 1,
        name: "I-imagine",
        img: "https://i.imgur.com/mnNrNaI.png",
        link: "https://i.imgur.com/mnNrNaI.png"
    },
    {
        id: 2,
        name: "I-imagine",
        img: "https://i.imgur.com/j5cc05b.png",
        link: "https://i.imgur.com/j5cc05b.png"
    },
    {
        id: 3,
        name: "I-imagine",
        img: "https://i.imgur.com/xgsQfet.png",
        link: "https://i.imgur.com/xgsQfet.png"
    },
    {
        id: 4,
        name: "I-imagine",
        img: "https://i.imgur.com/blit4CS.png",
        link: "https://i.imgur.com/blit4CS.png"
    },
    {
        id: 5,
        name: "I-imagine",
        img: "https://i.imgur.com/OToLYjw.png",
        link: "https://i.imgur.com/OToLYjw.png"
    },
    {
        id: 6,
        name: "I-imagine",
        img: "https://i.imgur.com/A8J3tIQ.png",
        link: "https://i.imgur.com/A8J3tIQ.png"
    },
    {
        id: 7,
        name: "I-imagine",
        img: "https://i.imgur.com/5HH07mT.png",
        link: "https://i.imgur.com/5HH07mT.png"
    },
    {
        id: 8,
        name: "I-imagine",
        img: "https://i.imgur.com/5HH07mT.png",
        link: "https://i.imgur.com/5HH07mT.png"
    },

]

const SomeProjects = () => {
    const [projects] = useState(projectsData)
    return (
        <div className="container-lg">
            <div className="projects-title text-center">
                <h2>Our Some Projects</h2>
            </div>
            <div className="projects-items">
                <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-2">

                    {
                        projects.slice(0, 6).map(project =>

                            <div key={project.id} className="col projects-item-div">
                                <div className="card projects-item h-100">
                                    <img src={project.img} className="card-img-top" alt="..." />
                                    <div className="projects-overlay d-flex align-items-center justify-content-center">
                                        <div>
                                            <h5 className="card-title">{project.name}</h5>
                                            <a href={project.link} target="_blank" rel="noreferrer">
                                                <AttachmentIcon style={{ color: '#fff' }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default SomeProjects;