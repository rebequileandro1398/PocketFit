import styled from "styled-components";
import imge from '../../assets/img/loginbackground.png'


//#FFFFFF4D
//background-size: contain;
export const Container = styled.div`
    background-image: url(${imge});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
`

export const ContainerIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFFFF4D;
    border-radius: 2rem;
    padding: 1rem;
    width: 20rem;
    height: 12rem;
    color: #fff;
`
export const Input = styled.input`
    background-color: #FFFFFF4D;
    width: 15rem;
    padding: .3rem;
    margin: 1rem;
    border: none;
    border-radius: 1rem;
    align-self: center;
`
export const Btn = styled.button`
    background-color: var(--green);
    border-radius: 1rem;
    border: none;
    padding: .6rem;
    width: 10rem;
    margin-top: 1rem;
`
export const TextGreen = styled.h6`
    color: var(--green);
`
export const Wave = styled.img`
    width: 100%;
`