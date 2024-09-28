import styled from "styled-components"

    const StyledCalculator = styled.div`


    background: linear-gradient(191.34deg, #17181A -4.95%, #17181A 103.74%);
    height: 568px;
    width: 375px;
    border-radius: 50px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);



input {
    background-color: #17181A;
    font-size: 48px;
    color: white;
    padding: 50px 10px 10px 10px;
    grid-row: 1/2;
    grid-column: 1/5;
    outline: none;
    border: none;
    text-align: right;
    margin-bottom: 50px;

}

button {
    margin: 6px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    color: white;

}

.ligthGray {
    background: #616161;
}

.ligthBlue {
    background: #1991FF;
    grid-row: 5/7;
    grid-column: 4/5;
}

.blue {
    background: #005db2;
}

.black {
    background: #303136;
}

.zero {
    grid-column: 1/3;
}



`

export default StyledCalculator