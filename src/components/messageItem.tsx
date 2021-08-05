import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import dayjs from "dayjs";

interface MessageItemProps {
  message: any;
  member: any;
}

function MessageItem({ message, member }: MessageItemProps): JSX.Element {
  const [emailDisplay, setEmailDisplay] = useState<boolean>(false);

  function getMemberName() {
    return member.firstName + " " + member.lastName + " ";
  }

  function messageOnMouseEnter() {
    setEmailDisplay(true);
  }

  function messageOnMouseLeave() {
    setEmailDisplay(false);
  }

  return (
    <Tooltip title={member.email} open={emailDisplay}>
      <div key={message.id}>
        <ListItem
          alignItems="flex-start"
          onMouseEnter={messageOnMouseEnter}
          onMouseLeave={messageOnMouseLeave}
        >
          <ListItemAvatar>
            <Avatar alt="Avatar" src={member.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={message.message}
            secondary={
              <React.Fragment>
                {getMemberName()}
                {dayjs(message.timestamp).format("- ddd DD MMM YYYY HH:mm:ss")}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </div>
    </Tooltip>
  );
}

export default MessageItem;
