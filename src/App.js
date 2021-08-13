import { Card } from './Card';
import './master.css'
import { useState, useEffect } from 'react';
import { Utils } from './utils';
//GLOBAL VARIABLES
const rows = 2;
const colums = 3;
const imagesAvailable = 19;
let totalCnt = rows * colums;

//BUILD IMAGES ARRAY FROM GIVEN IMAGES - RANDOMLY
let imagesArray = [];
for (let index = 1; index <= imagesAvailable; index++) {
  imagesArray.push(index + ".png");
}
Utils.shuffle(imagesArray);
imagesArray = imagesArray.slice(0, rows * colums / 2);
const newImagesArray = [];
for (let index = 0; index < imagesArray.length; index++) {
  newImagesArray[index] = (imagesArray[index]);
  newImagesArray[imagesArray.length + index] = (imagesArray[index]);
}
Utils.shuffle(newImagesArray);

//BUILD ROW COLUMN ARRAY
const tempArray = [];
let imgIndexer = 0;
for (let index = 0; index < rows; index++) {
  const tempColumnArray = [];
  for (let index = 0; index < colums; index++) {
    tempColumnArray[index] = { 'isFlipped': true, id: imgIndexer, img: newImagesArray[imgIndexer++] };
  }
  tempArray[index] = tempColumnArray;
}

//REACT COMPONENT
function App() {
  const [gameArray, setGameArray] = useState([]);
  let lastSelected = null;
  const doneArray = [];
  const onBoxClick = function (isFlipped, setFlipped, img) {
    if (img) {
      setFlipped(true);
      setTimeout(() => {
        if (doneArray.indexOf(img) === -1) {
          if (lastSelected) {
            if (lastSelected === img) {
              doneArray.push(img);
              lastSelected = null;
              if (parseInt(totalCnt / 2) === doneArray.length) {
                alert("Well done !!");
              }
            } else {
              setFlipped(false);
            }
          } else {
            lastSelected = img;
          }
        }
      }, 500);
    }
  };

  useEffect(() => {
    setGameArray(tempArray);
  }, [])

  return (
    <div className={"card-container"}>
      {gameArray.map(row => {
        return (<div key={row[0].id} className={"row"}>
          {
            row.map(c => {
              return <div key={c.id} className={"column"} style={{ backgroundColor: '#aaa' }}>
                <Card onBoxClick={onBoxClick} img={c.img} />
              </div>
            })
          }
        </div>)
      })}
    </div >

  );
}
export default App;
