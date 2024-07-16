import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./widgets.css";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function RetailerPopUp(props) {
  const { popUpValues, handlePopUp, handlePopUpClick } = props;
  const { anchorEl, popUpItems } = popUpValues;

  return (
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={(e) => handlePopUp(e)}
    >
      {popUpItems.map((popUpItem, index) => {
        return (
          <StyledMenuItem
            key={index}
            onClick={() => handlePopUpClick(popUpItem.value)}
            style={{
              alignItems: "center",
            }}
          >
            {popUpItem.image ? (
              <ListItemIcon>
                <div className="drop_down_image">
                  <img src={`..${popUpItem.image}`} alt="" />
                </div>
              </ListItemIcon>
            ) : popUpItem.icon ? (
              <ListItemIcon
                style={{
                  fontSize: "16px",
                }}
              >
                {popUpItem.icon}
              </ListItemIcon>
            ) : (
              <div />
            )}
            <ListItemText
              style={{
                marginTop: "10px",
              }}
              primary={<label>{popUpItem.name}</label>}
            />
          </StyledMenuItem>
        );
      })}
    </StyledMenu>
  );
}
