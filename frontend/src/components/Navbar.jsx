import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
    const [activeKey, setActiveKey] = useState("home");

    return (
        <>
            <style>{`
                .nav-link-custom {
                    position: relative;
                    transition: all 0.3s ease;
                    padding-bottom: 0.5rem !important;
                }
                
                /* Desktop hover effects */
                @media (min-width: 992px) {
                    .nav-link-custom:hover {
                        color: #000 !important;
                        transform: translateY(-2px);
                    }
                    
                    .nav-link-custom::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%) scaleX(0);
                        width: 80%;
                        height: 2px;
                        background-color: #000;
                        transition: transform 0.3s ease;
                    }
                    
                    .nav-link-custom:hover::after {
                        transform: translateX(-50%) scaleX(1);
                    }
                    
                    .nav-link-custom.active::after {
                        transform: translateX(-50%) scaleX(1);
                    }
                }
                
                /* Mobile styles */
                @media (max-width: 991px) {
                    .nav-link-custom {
                        padding: 0.75rem 1rem !important;
                        margin: 0.25rem 0 !important;
                        border-radius: 8px;
                    }
                    
                    .nav-link-custom.active {
                        background-color: rgba(0, 0, 0, 0.08);
                    }
                    
                    .nav-link-custom:active {
                        background-color: rgba(0, 0, 0, 0.12);
                    }
                }
                
                .nav-link-custom.active {
                    color: #000 !important;
                    font-weight: 600;
                }
                
                .connect-btn {
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                @media (min-width: 992px) {
                    .connect-btn:hover {
                        transform: scale(1.05);
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    }
                }
                
                .connect-btn:active {
                    transform: scale(0.98);
                }

                .navbar-sticky {
                    position: sticky !important;
                    top: 0;
                    z-index: 1000;
                }
            `}</style>

            <Navbar expand="lg" className="navbar-sticky bg-[#fff8f0] p-3 border-b-2 border-black">
                <Container fluid>
                    <div href="#" className="pr-12 playfair-display text-3xl">Oindri.</div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav
                            className="me-auto my-2 my-lg-0"
                            activeKey={activeKey}
                            onSelect={(selectedKey) => setActiveKey(selectedKey)}
                            navbarScroll
                        >
                            <Nav.Link
                                eventKey="home"
                                href="#home"
                                className={`zalando-sans mx-1 nav-link-custom ${activeKey === 'home' ? 'active' : ''}`}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                eventKey="about"
                                href="#about"
                                className={`zalando-sans mx-1 nav-link-custom ${activeKey === 'about' ? 'active' : ''}`}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                eventKey="academics"
                                href="#academics"
                                className={`zalando-sans mx-1 nav-link-custom ${activeKey === 'psychology' ? 'active' : ''}`}
                            >
                                Academics
                            </Nav.Link>
                            <Nav.Link
                                eventKey="achievements"
                                href="#achievements"
                                className={`zalando-sans mx-1 nav-link-custom ${activeKey === 'dance' ? 'active' : ''}`}
                            >
                                Achievements
                            </Nav.Link>
                            <Nav.Link
                                eventKey="publications"
                                href="#publications"
                                className={`zalando-sans mx-1 nav-link-custom ${activeKey === 'publications' ? 'active' : ''}`}
                            >
                                Publications
                            </Nav.Link>
                            <Nav.Link
                                eventKey="gallery"
                                href="#gallery"
                                className={`zalando-sans mx-1 nav-link-custom ${activeKey === 'gallery' ? 'active' : ''}`}
                            >
                                Gallery
                            </Nav.Link>

                        </Nav>

                        <a
                            href="mailto:yourmail@gmail.com"
                            style={{ textDecoration: 'none' }}>
                            <div className="zalando-sans d-flex gap-2 justify-center items-center bg-black rounded-full p-2.5 px-3 text-white connect-btn">
                                <p className="m-0 p-0">Lets Connect</p>
                                <div className="material-symbols-outlined">
                                    north_east
                                </div>
                            </div>
                        </a>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavScrollExample;