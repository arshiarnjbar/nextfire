import { Nav } from 'react-bootstrap';
import Link from 'next/link';


export default function Footer() {
    const a = 'awd';
    return (
        <Nav className="justify-content-between mt-auto pb-2 pt-5" activeKey="/home">
            <Nav.Item>
                <Link href="/" passHref><Nav.Link><h6 className="text-dark">PORTFOLIO</h6></Nav.Link></Link>
            </Nav.Item>
            <Nav.Item>
                <Link href="/about" passHref><Nav.Link><h6 className="text-dark">ABOUT</h6></Nav.Link></Link>
            </Nav.Item>
            <Nav.Item>
                <Link href="/contact" passHref><Nav.Link><h6 className="text-dark">CONTACT</h6></Nav.Link></Link>
            </Nav.Item>
            <Nav.Item className="d-none d-sm-inline-block">
                <Nav.Link href='https://instagram.com/maminaudio' target="_blank"><h6 className="text-dark">INSTAGRAM</h6></Nav.Link>
            </Nav.Item>
        </Nav>
    );
}