/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
    title: "Next.js + Tailwind CSS + MongoDB + TypeScript",
    titleTemplate: "%s | Next.js + Tailwind CSS + MongoDB + TypeScript",
    defaultTitle: "Next.js + Tailwind CSS + MongoDB + TypeScript Starter",
    description:
        "Abhay's personalized Next.js + Tailwind CSS + MongoDB + TypeScript starter template",
    canonical: "https://next-mongo-tail.vercel.app/",
    openGraph: {
        url: "https://next-mongo-tail.vercel.app/",
        title: "Next.js + Tailwind CSS + MongoDB + TypeScript Starter",
        description: "Next.js + Tailwind CSS + MongoDB + TypeScript template",
        type: "website",
        images: [  
            {
                url: "https://photos.app.goo.gl/FtG2GBEpt5BiCdQT7",
                alt: "Abhay's Next.js + Tailwind CSS + MongoDB + TypeScript starter template Image",
                width: 800,
                height: 600,
            },
        ],
        site_name: "Next.js + Tailwind CSS + MongoDB + TypeScript Starter",
    },
    twitter: {
        handle: "@abhayprajapati_",
        site: "@site",
        cardType: "summary_large_image",
    },
    additionalLinkTags: [
        {
            rel: "icon",
            href: "https://res.cloudinary.com/yehez/image/upload/v1630902976/Assassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg",
        },
    ],
};

export default defaultSEOConfig;