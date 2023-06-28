import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 1, href: "#services", text: "services" },
  { id: 1, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat soluta et distinctio eaque dolore dolorem asperiores libero, tempore autem quod quas cupiditate impedit corporis, non incidunt tenetur nemo eum corrupti",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat soluta et distinctio eaque dolore dolorem asperiores libero, tempore autem quod quas cupiditate impedit corporis, non incidunt tenetur nemo eum corrupti",
  },
  {
    id: 1,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat soluta et distinctio eaque dolore dolorem asperiores libero, tempore autem quod quas cupiditate impedit corporis, non incidunt tenetur nemo eum corrupti",
  },
];

export const tours = [
  {
    id: 1,
    images: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore atque obcaecati numquam minima ipsum corrupti optio inventore dicta, rem cum fugiat? Ipsum voluptatum beatae saepe ad quibusdam ab. Ducimus.",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    images: tour2,
    date: "august 26th, 2020",
    title: "Indonesia Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore atque obcaecati numquam minima ipsum corrupti optio inventore dicta, rem cum fugiat? Ipsum voluptatum beatae saepe ad quibusdam ab. Ducimus.",
    location: "indonesia",
    duration: 6,
    cost: 2100,
  },
  {
    id: 3,
    images: tour3,
    date: "august 26th, 2020",
    title: "USA Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore atque obcaecati numquam minima ipsum corrupti optio inventore dicta, rem cum fugiat? Ipsum voluptatum beatae saepe ad quibusdam ab. Ducimus.",
    location: "usa",
    duration: 6,
    cost: 2100,
  },
  {
    id: 4,
    images: tour4,
    date: "august 26th, 2020",
    title: "Kenya Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore atque obcaecati numquam minima ipsum corrupti optio inventore dicta, rem cum fugiat? Ipsum voluptatum beatae saepe ad quibusdam ab. Ducimus.",
    location: "kenya",
    duration: 6,
    cost: 2100,
  },
];
