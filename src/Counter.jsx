import { useState } from "react";
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';

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

      <Button onClick={HandleClick1} color="primary" >👍 <Badge badgeContent={countLike} color="primary"></Badge>{countLike}</Button>
      <Button onClick={HandleClick2} color="primary">👎 <Badge badgeContent={countDisLike} color="error"></Badge>{countDisLike}</Button>


    </div>

  );
}
