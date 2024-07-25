import { useRef } from 'react';
import './SearchingBar_style.css';

const SearchBar = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  // salvo o nome das praias em variaveis
  // esses nomes lincam com o latitude da praia
  // acessa os dados metereologicos da praia

  const getBeachName = () => {
    if(inputRef.current){
      const beachName = inputRef.current.value;
      console.log(beachName);
      inputRef.current.value = " ";
      // Eu ainda preciso linkar esse input com o card da praia
    }
  }


  return(

    <div className="topnav">
        <a className="searching-display" href="#home" onClick={getBeachName}> Let's surf </a>
        <input ref={inputRef} type="text" placeholder="Beach name" id='searching-area' size={40}/>
    </div>
  )
};

export default SearchBar;