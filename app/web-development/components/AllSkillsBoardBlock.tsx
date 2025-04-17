import { Grid, Flex } from '@radix-ui/themes';
import React from 'react';
import { FaDesktop, FaCode, FaCogs, FaUniversalAccess, FaServer, FaShoppingCart, FaMobileAlt, FaBell, FaSearch } from 'react-icons/fa';
import SkillDetailCard from './SkillDetailCard';

const contentsMap = [
    {
        title: 'Website Design',
        description: 'Elevate your online presence with our expert website design services. Our team creates stunning, user-friendly websites that drive results.',
        icons: <FaDesktop className="text-4xl text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-12" />
    },
    {
        title: 'Website Development',
        description: 'Unlock the full potential of your website with our expert web development services. Our team creates high-performance, custom solutions tailored to your needs.',
        icons: <FaCode className="text-4xl text-green-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1" />
    },
    {
        title: 'Custom Platforms',
        description: 'Streamline your business processes with our custom application development services. Our expert team creates tailored solutions to meet your unique needs.',
        icons: <FaCogs className="text-4xl text-purple-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-360" />
    },
    {
        title: 'Accessibility Design',
        description: 'Want to make your website accessible to all users? Our accessibility design services provide inclusive, user-friendly solutions. Contact us today.',
        icons: <FaUniversalAccess className="text-4xl text-orange-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1" />
    },
    {
        title: 'Hosting and Support',
        description: 'Looking for reliable hosting and support services for your website? Our team offers assistance and secure, fast hosting options to keep your site running smoothly.',
        icons: <FaServer className="text-4xl text-teal-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-12" />
    },
    {
        title: 'eCommerce Websites',
        description: 'Ready to take your business online? Our eCommerce website development services can help you create a user-friendly platform to boost your sales.',
        icons: <FaShoppingCart className="text-4xl text-red-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1" />
    },
    {
        title: 'Mobile App Development',
        description: 'Looking for a mobile app that stands out? Our mobile app development services offer innovative, user-friendly solutions that exceed expectations.',
        icons: <FaMobileAlt className="text-4xl text-indigo-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-12" />
    },
    {
        title: 'Branding',
        description: 'Create a lasting impression with our branding and logo design services. Our team will help you establish a unique brand identity that stands out.',
        icons: <FaBell className="text-4xl text-yellow-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 hover:animate-pulse" />
    },
    {
        title: 'SEO & Page Optimization',
        description: 'Boost your website’s visibility, search ranking and organic traffic with our effective SEO and Page optimization services.',
        icons: <FaSearch className="text-4xl text-pink-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-360" />
    },
];


const AllSkillsBoardBlock = () => {
    return (
        <Grid columns={{ initial: '1', sm: '2', lg: '3' }} gap="9" rows={{
            initial: '1fr',
        }} className="p-10">
            {contentsMap.map((item, index) => (
                <SkillDetailCard key={index} title={item.title} description={item.description} icons={item.icons} />
            ))}
        </Grid>
    );
};

export default AllSkillsBoardBlock;