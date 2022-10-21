import React, {useState} from "react";
import { Anchor, Button, Drawer } from 'antd';
const {Link} = Anchor;

function AppHeader(){
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fa fa-bolt"></i>
                    <a href="#">Tech</a>
                </div>
                <div className="mobileHidden">
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features"/>
                        <Link href="#works" title="How It Works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                </div>
                <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features"/>
                        <Link href="#works" title="How It Works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </Drawer>
                
            </div>
        </div>
    )
}

export default AppHeader;