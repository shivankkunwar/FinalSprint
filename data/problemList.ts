import { question } from "@/types";
import InteractiveCarousel from '../components/questionCode/InteractiveCarousel';

export const problems:question[] = [{
    id:1,
    title: "Interactive Carousel Component",
    difficulty: "Easy",
    type:"UI Component",
    tags: ["Interactive"],
    Code: InteractiveCarousel,
    overview: "Create a responsive image carousel component that allows users to navigate through a collection of images with smooth transitions and intuitive controls.",
    requirements:["Implement previous/next navigation buttons","Add slide indicators showing current position","Implement smooth slide transitions"],
    behavior:["Carousel should loop infinitely","Navigation controls should be easy to use","Component should be responsive on all screen sizes"]    
}]

