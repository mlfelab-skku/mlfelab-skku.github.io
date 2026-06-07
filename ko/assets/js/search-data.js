
const currentUrl = window.location.href;
const siteUrl = "https://mlfelab-skku.github.io";
let updatedUrl = currentUrl.replace("https://mlfelab-skku.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("ko".length > 0) {
  updatedUrl = updatedUrl.replace("/ko", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-홈",
    title: "홈",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/ko/";
    },
  },{id: "dropdown-프로필",
              title: "프로필",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/ko/professor/";
              },
            },{id: "dropdown-발표",
              title: "발표",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/ko/talks/";
              },
            },{id: "dropdown-프로젝트",
              title: "프로젝트",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/ko/projects/";
              },
            },{id: "dropdown-강의",
              title: "강의",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/ko/teaching/";
              },
            },{id: "dropdown-cv",
              title: "CV",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/ko/cv/";
              },
            },{id: "dropdown-개요",
              title: "개요",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/ko/research/";
              },
            },{id: "dropdown-why-bptt-costate",
              title: "Why BPTT ≈ Costate?",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/ko/research/why-bptt-costate/";
              },
            },{id: "nav-구성원",
          title: "구성원",
          description: "연구실 구성원.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/ko/people/";
          },
        },{id: "dropdown-게재-논문",
              title: "게재 논문",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/ko/publications/";
              },
            },{id: "dropdown-진행-중-논문",
              title: "진행 중 논문",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/ko/papers-in-progress/";
              },
            },{id: "nav-소식-amp-활동",
          title: "소식 &amp; 활동",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/ko/news/";
          },
        },{id: "nav-합류",
          title: "합류",
          description: "진학 희망 학생 및 협업자 안내.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/ko/join/";
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
      },{id: "news-연구실-새-웹사이트를-공개했습니다",
          title: '연구실 새 웹사이트를 공개했습니다. 🎉',
          description: "",
          section: "News",},{id: "news-연구실이-경주에서-열린-2026-한국경영과학회-춘계공동학술대회-6월-4-5일-에-참가해-구두-2건-포스터-5건을-발표했습니다-사진은-소식-활동에서-볼-수-있습니다",
          title: '연구실이 경주에서 열린 2026 한국경영과학회 춘계공동학술대회(6월 4–5일)에 참가해 구두 2건·포스터 5건을 발표했습니다. 🎉...',
          description: "",
          section: "News",},{id: "projects-pg-dpo",
          title: 'PG-DPO',
          description: "동적 포트폴리오 선택을 위한 Pontryagin-Guided Direct Policy Optimization.",
          section: "Projects",handler: () => {
              window.location.href = "/ko/projects/1_pg_dpo/";
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
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
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
