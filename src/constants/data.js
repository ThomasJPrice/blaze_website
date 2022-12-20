import images from "./images";

const features = [
    {
        title: 'Powerful Analytics',
        imgUrl: images.Feature01
    },
    {
        title: 'Powerful Analytics',
        imgUrl: images.Feature02
    },
    {
        title: 'Free to Get Started',
        imgUrl: images.Feature03
    },
    {
        title: 'Complete Dashboard',
        imgUrl: images.Feature04
    },
]

const reviews = [
    {
        name: 'Shaun Stevens',
        imgUrl: images.ShaunS,
        title: 'Founder @CraftLab',
        stars: images.stars,
        content: '“Blaze.io did a great job! My new website is so much more professional, good looking and easier to work with than my old site.”'
    },
    {
        name: 'James Smith',
        imgUrl: images.JamesS,
        title: 'Founder @LabLess',
        stars: images.stars,
        content: '“Blaze.io did a great job! My new website is so much more professional, good looking and easier to work with than my old site.”'
    },
    {
        name: 'Laryssa Stone',
        imgUrl: images.LaryssaS,
        title: 'Marketing Manager @Samsung',
        stars: images.stars,
        content: '“Blaze.io did a great job! My new website is so much more professional, good looking and easier to work with than my old site.”'
    },
    {
        name: 'Ersad Samuel',
        imgUrl: images.ErsadS,
        title: 'Design Lead @Apple',
        stars: images.stars,
        content: '“Blaze.io did a great job! My new website is so much more professional, good looking and easier to work with than my old site.”'
    },
]

const footerLinks = [
    {
        title: 'Overview',
        links: [
            {
                name: 'Home',
                link: '#'
            },
            {
                name: 'Product',
                link: '#'
            },
            {
                name: 'Pricing',
                link: '#'
            },
            {
                name: 'Integrations',
                link: '#'
            },
            {
                name: 'Integrations Post',
                link: '#'
            },
        ],
    },
    {
        title: 'Company',
        links: [
            {
                name: 'About',
                link: '#'
            },
            {
                name: 'Blog',
                link: '#'
            },
            {
                name: 'Blog Post',
                link: '#'
            },
            {
                name: 'Contact',
                link: '#'
            },
            {
                name: 'Login',
                link: '#'
            },
        ],
    },
    {
        title: 'Template',
        links: [
            {
                name: 'Getting Started',
                link: '#'
            },
            {
                name: 'Style Guide',
                link: '#'
            },
            {
                name: 'Licences',
                link: '#'
            },
            {
                name: 'Changelog',
                link: '#'
            },
        ],
    },
]

export default { features, reviews, footerLinks }