// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-will-be-presenting-my-work-on-multimodal-vaes-at-the-jds-2025-in-marseille",
          title: 'I will be presenting my work on Multimodal VAEs at the JDS-2025 in...',
          description: "",
          section: "News",},{id: "news-our-paper-multivae-a-python-package-for-multimodal-variational-autoencoders-on-partial-datasets-was-accepted-for-publication-in-joss-the-library-is-available-here-sparkles-smile",
          title: 'Our paper “MultiVae: A Python package for Multimodal Variational Autoencoders on Partial Datasets.”...',
          description: "",
          section: "News",},{id: "news-our-paper-bridging-the-inference-gap-in-multimodal-variational-autoencoders-was-accepted-for-publication-in-jdssv",
          title: 'Our paper “Bridging the inference gap in Multimodal Variational Autoencoders” was accepted for...',
          description: "",
          section: "News",},{id: "news-i-was-attending-the-workshop-ai-across-scales-at-the-newton-institute-in-cambridge-and-presented-a-poster-about-our-work-on-unsupervised-anomaly-detection",
          title: 'I was attending the workshop AI across Scales at the Newton Institute in...',
          description: "",
          section: "News",},{id: "news-we-presented-a-poster-at-iabm-2026-in-lyon",
          title: 'We presented a poster at IABM 2026 in Lyon!',
          description: "",
          section: "News",},{id: "news-we-will-be-at-ohbm-2026-in-bordeaux-to-present-our-work-on-latent-maximum-a-posteriori-optimisation-for-anomaly-detection",
          title: 'We will be at OHBM-2026 🧠 in Bordeaux to present our work on...',
          description: "",
          section: "News",},{id: "news-our-work-mitigating-the-reconstruction-detection-trade-off-in-vae-based-unsupervised-anomaly-detection-was-accepted-for-an-oral-presentation-at-isbi-2026-in-london",
          title: 'Our work Mitigating the reconstruction-detection trade-off in VAE-based unsupervised anomaly detection was accepted...',
          description: "",
          section: "News",},{id: "projects-multivae",
          title: 'MultiVae',
          description: "A library for multimodal VAEs on incomplete datasets",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multivae/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Agathe_Senellart_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%67%61%74%68%65.%73%65%6E%65%6C%6C%61%72%74@%69%6E%72%69%61.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AgatheSenellart# your GitHub user name", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=zTH1JzcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
