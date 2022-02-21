import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root{
        --white: #FFFFFF;
        --grey-50: #FAFAFC;
        --grey-100: #DADADA;
        --grey-300:  #BCBCBC;
        --grey-500: #9E9BAF;
        --green-50: #707070;
        --green-200: #BADC58;
        --blue-400: #2D3561;
        --blue-700: #1D164D;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }


    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
      font-family: 'Mulish', sans-serif; 
      font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }
    
    section {
        max-width: 1120px;
        margin: 0 auto;
    }

    @media (max-width: 1079px) {
        padding: 0 20px;
    }

    button, a {
        cursor: pointer;
    }

    .slick-slide, .slick-active, .slick-cloned{
        
        margin-right: 2rem;
        transition: .3s;        

        @media (min-width: 1024px) {
            max-width: 360px;
        }

        @media (max-width: 1024px) {
            max-width: 320px;
            margin-right: 1rem;
        }

        @media (max-width: 900px) {
            max-width: 280px;
        }

        @media (max-width: 768px) {
            max-width: 250px;
        }

        @media (max-width: 600px) {
            max-width: 230px;
        }

        @media (min-width: 2000px){
            max-width: 500px;
        }

        @media (min-width: 2200px){
            max-width: 560px;
        }
    }

    .slick-slider{        
        
        &:after{
            background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 1) 100%);
            bottom: 0;
            content: "";
            height: 100%;
            position: absolute;
            right: 0;
            width: 7%;
            margin-right: -2px;
            transition: .3s;
        }
            
    }
    
    .slick-next, .slick-prev{
        padding: 15px;
        width: 56px;
        height: 56px;
        cursor: pointer;
        border: none;
        border-radius: 100%;
        background-color: #fff;
        top: 55%;
        z-index: 1;
        box-shadow: 0 0 15px 30px rgba(64, 152, 241, 0.08);

        &:hover{
            background-color:#fff;
        }
        
        &.slick-next{
            margin-right: 6%;
        }
        
        @media (max-width: 600px) {
            &.slick-next{
            margin-right: 12%;
        }
        }
    }

    .slick-arrow, .slick-prev, .slick-next{
        @media (max-width: 768px) {
            display: none;
        }
    }
    
    #blog .slick-slider .slick-prev {
        visibility: hidden;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }   

`;
