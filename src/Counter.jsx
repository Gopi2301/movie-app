import { useState } from "react";
import Badge from '@mui/material/Badge';

export function Counter() {
  const [countLike, setCountLike] = useState(0);
  const [countDisLike, setCountDisLike] = useState(0);

  const HandleClick1 = () => {
    setCountLike(countLike + 1);
  };
  const HandleClick2 = () => {
    setCountDisLike(countDisLike + 1);
  };

  return (
    <div>

      <button onClick={HandleClick1}>👍 <Badge badgeContent={countLike} color="secondary"></Badge>{countLike}</button>
      <button onClick={HandleClick2}>👎 <Badge badgeContent={countDisLike} color="error"></Badge>{countDisLike}</button>


    </div>

  );
}
