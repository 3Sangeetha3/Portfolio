import { useEffect } from 'react';

export const MetaTags = ({ 
  title = "Sangeetha | Full-Stack Developer & CSE Student",
  description = "Passionate full-stack developer specializing in MERN stack. CSE student creating secure and efficient web applications with exceptional user experiences.",
  image = "https://cdn.jsdelivr.net/gh/3sangeetha3/PicLink@Images-branch/images/1745211660912-520444358.png",
  url = "https://sangeetha-portfolio.vercel.app/",
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags dynamically
    const updateMetaTag = (property, content, isProperty = true) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let element = document.querySelector(selector);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        // Create new meta tag if it doesn't exist
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:url', url);
    
    // Update basic meta tags
    updateMetaTag('description', description, false);
    updateMetaTag('title', title, false);
    
  }, [title, description, image, url, type]);

  return null; // This component doesn't render anything
};

export default MetaTags;
