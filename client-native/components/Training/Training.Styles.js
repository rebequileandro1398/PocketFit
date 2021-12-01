import styled from 'styled-components/native'

//colors
const darkGrayBase = '#020E12'
const lime = '#CEFA1F'
const lemon = '#D9FB52'
const green = '#6AE056'

export const Container = styled.View`
    background-color: ${darkGrayBase};
    align-items: center;
    width: 100%;
    height: 100%;
`
export const Routines = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;

`
export const TextW = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-top: 20px;
`
export const TextT = styled.Text`
    font-size: 40px;
    color: #fff;
    margin-top: 60px;
`
export const LemonContainer = styled.View`
    align-items: center;
    background-color: ${lemon};
    border-radius: 15px;
    width: 370px;
    height: 200px;
    padding: 10px;
`
export const Excercise = styled.View`
    background-color: ${lime};
    border-radius: 15px;
    justify-content: center;
    margin: 5px;
    width: 360px;
    height: 60px;
    padding: 10px;
`
export const ProxShifts = styled.View`
    background-color: ${green};
    border-radius: 15px;
    margin: 5px;
    width: 350px;
    height: 100px;
    padding: 10px;
`
export const ViewEX = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Pesa = styled.Image`
    width: 40px;
    height: 40px;
    margin-left: 50px;
`
