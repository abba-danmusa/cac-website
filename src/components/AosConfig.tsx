'use client'
import { JSX, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosConfig = ({children}: {
    children: JSX.Element
}) => {
    useEffect(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );

        if (isMobile) {
            AOS.init({
                duration: 800,
                once: true,
            });
        }
    }, []);
  return (
    
    <div>{children}</div>
  )
}

export default AosConfig