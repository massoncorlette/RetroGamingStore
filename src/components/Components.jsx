import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { queryForGamesByConsole } from "../api";
import getPaginationCount from "../helpers";
import { Pagination } from "@mui/material";


// eslint-disable-next-line react/prop-types
const DisplayYears = ({setDataHandler,setYear}) => {

  let years = [];

  for (let i = 1985; i < 2007; i++) {
    years.push(i);
  }
  
 
  return (
    <div id='yearsBtnContainer'>
    {years.map((year) => {
      return <button onClick={() => setDataHandler(year,setYear)} className='yearsBtns' key={year}>{year}</button>;
    })}
    </div>
  )
}


// eslint-disable-next-line react/prop-types
const DisplayConsoles = ({handleSetGames, setDataHandler}) => {

  const consoles = ["NES", "SNES", "N64", "GameCube", "PS1", "PS2", "Xbox", "Sega Genesis", "Sega Saturn", "DreamCast", "GameBoy", "GameBoy Color", "GameBoy Advance", "Nintendo DS", "PSP"];

  // const svgs = []; (map images from array in accordance)

  const [currentPage, setPage] = useState(1);
  const [currentConsole, setConsole] = useState();
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    let ignore = false;
    queryForGamesByConsole(currentConsole).then(data => {
      if(!(ignore)) {
        console.log(data);
        handleSetGames(data);     
        const pageCount = getPaginationCount(data.count);
        setPageCount(pageCount); 
      }
    });
    return () => {
      console.log("Cleanup");
      ignore = true;
    };
  }, [currentConsole]);




  return (

    <div id="consoleBtnContainer">
      {consoles.map((console, index) => {
        return <button onClick={() => setDataHandler(console,setConsole)} key={(console)}><Link to="console" key={(console)}>{consoles[index]}</Link></button>
      })}
    </div>
  );

}

export { DisplayYears, DisplayConsoles };
