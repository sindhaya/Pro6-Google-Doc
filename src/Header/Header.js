import React  from "react";
import style from "./Header.module.css";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import SubscriptIcon from "@mui/icons-material/Subscript";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import { FcUndo } from 'react-icons/fc';
import { FcRedo } from 'react-icons/fc';
import { FcPrint } from 'react-icons/fc';
import { FcStackOfPhotos } from 'react-icons/fc';
import { MdFormatListBulletedAdd } from 'react-icons/md';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';


const Header = ({ handleTextStyle ,handleColor,onImageChange,handleClick}) => {

  const data = [
    { icon: <FcUndo/>},
    { icon: <FcRedo /> },
    { icon: <FcPrint/>  },
    { icon: <FormatBoldIcon />,},
    {  icon: <FormatItalicIcon />,},
    {icon: <FormatUnderlinedIcon />,},
    {  icon: <StrikethroughSIcon /> },
    { icon: <FormatSizeIcon /> },
    {  icon: <FormatAlignCenterIcon /> },
    { icon: <FormatAlignLeftIcon /> },
    { icon: <FormatAlignRightIcon /> },
    {icon: <FormatIndentDecreaseIcon /> },
    { icon: <FormatIndentIncreaseIcon /> },
    { icon: <SubscriptIcon /> },
    { icon: <SuperscriptIcon /> },
    { icon: <UnfoldMoreIcon />, input: <input onChange={(e)=>handleColor(e.target.value)} type="color"/> },
    { icon: <TextDecreaseIcon /> },
    {  icon: <TextIncreaseIcon /> },
    {  icon: <MdFormatListBulletedAdd /> },
    {  icon: <FormatListNumberedIcon /> },
    {  icon: <label htmlFor="input"><FcStackOfPhotos /></label> ,input: <input id="input" hidden  type="file"  onChange={onImageChange} className="filetype" />},
    {icon: <select  className={style.scaleBar}  onChange={(e) =>handleClick(e.target.value)}
    >
      <option>100%</option>
      <option>50%</option>
      <option>70%</option>
      <option>90%</option>
      <option>10%</option>
    </select>}
  ];

  return (
    <div className={style.header}>
      {data.map((item, i) => {
        return (
          <h2 onClick={() => handleTextStyle(i)} key={i}>
            {item.icon} 
            {item.input}
          </h2>
        );
      })}
    </div>
  );
};

export default Header;