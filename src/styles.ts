import styled from "styled-components";

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  width: 100vw;
  
  
 
`
export const Header = styled.header`
   
    color: white;
    display: flex;
    position: fixed;
    z-index: 1000;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 1rem;
    border-bottom: 2px solid #FAB217 ;
    background: #363946;
    

    img{
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
    h1{
      font-size: 1.7rem;
      
    }
    button{
      background: transparent;
      color: #EDB230;
      border: none;
      cursor: pointer;
      
    }

`

export const Content = styled.div` 
  
  
  padding: 1rem; 
  text-align: center;
  
`
export const ContentCards = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7rem;
    gap: 1rem;
    color: white;
  
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background: #EDB230 ;
  padding: 0.8rem;
  border-radius: 8px;
  color: #1E1E1E;
  text-align: left;
  line-height: 1.5;
  

  li{
    display: flex;
    gap: 0.6rem;
    
  }
  
`

export const HeaderContentCard = styled.div`

  display: flex;
  gap: 1rem;
  padding: 0.3rem;
  margin-bottom: 1rem;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: #1E1E1E;
  border-bottom: 1px solid black;

  span{
    display: flex;
    align-items: center;
  }
 
`

export const CarrosselImage = styled.div`
  
    display: flex;
    flex-direction: column;
    gap: 1rem;
  
  
  .carrossel{
    display: flex;
    max-width: 95%;
    margin: 0 auto;

    
    overflow-x: scroll;
    scroll-behavior: smooth;
  }
  .carrossel::-webkit-scrollbar{
    display: none ;
  }
  
  .imageContainer{
    
    margin: 5px;
    padding: 5px;
    width: 180px;
    flex: none;
    
    

   
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  .containerButton{
    display: flex;
    width: 100%;
    
    justify-content: center;
    gap: 1rem;

    button{
      cursor: pointer;
      width: 80px;
      height: 30px;
      background: transparent;
      border: none;
      

    }
  }
`

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  a{
    display: flex;
    align-items: center;
    
    gap: 1rem;
    outline: none;
    border: none;
    color: black;
    text-decoration: none;


  }
  a:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 4px #00f; /* Adiciona um efeito de destaque */
  }
  a:visited{
    border: none;
    outline: none;
  }
  
`
