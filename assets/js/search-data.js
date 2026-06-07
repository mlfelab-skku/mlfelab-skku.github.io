
const currentUrl = window.location.href;
const siteUrl = "https://mlfelab-skku.github.io";
let updatedUrl = currentUrl.replace("https://mlfelab-skku.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-profile",
              title: "profile",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/professor/";
              },
            },{id: "dropdown-talks",
              title: "talks",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/talks/";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-teaching",
              title: "teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-cv",
              title: "cv",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/cv/";
              },
            },{id: "dropdown-overview",
              title: "Overview",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/";
              },
            },{id: "dropdown-why-bptt-costate",
              title: "Why BPTT ≈ Costate?",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research/why-bptt-costate/";
              },
            },{id: "nav-people",
          title: "people",
          description: "Members of the research group.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-published",
              title: "Published",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-papers-in-progress",
              title: "Papers in Progress",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/papers-in-progress/";
              },
            },{id: "nav-news-amp-activities",
          title: "news &amp; activities",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-join-us",
          title: "join us",
          description: "Information for prospective students and collaborators.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/join/";
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
      },{id: "news-our-new-group-website-is-online",
          title: 'Our new group website is online. 🎉',
          description: "",
          section: "News",},{id: "news-our-group-took-part-in-the-2026-korms-spring-joint-conference-in-gyeongju-jun-4-5-presenting-2-talks-and-5-posters-see-news-amp-amp-activities-for-photos",
          title: 'Our group took part in the 2026 KORMS Spring Joint Conference in Gyeongju...',
          description: "",
          section: "News",},{id: "projects-pg-dpo",
          title: 'PG-DPO',
          description: "Pontryagin-Guided Direct Policy Optimization for dynamic portfolio selection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_pg_dpo/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%67%68%75%68@%73%6B%6B%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
          id: 'lang-ko',
          title: 'ko',
          section: 'Languages',
          handler: () => {
            window.location.href = "/ko" + updatedUrl;
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
