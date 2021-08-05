import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { useFetchMembersQuery, useFetchMessagesQuery } from "../reduxApi";
import MessageItem from "./messageItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "200ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function Messages() {
  const classes = useStyles();
  const { data: memberData } = useFetchMembersQuery();
  const { data } = useFetchMessagesQuery();

  function getMember(memberId: string) {
    return memberData.find((member: { id: string }) => member.id === memberId);
  }

  return (
    <div>
      {data && memberData && (
        <List className={classes.root}>
          {data.map((message: any) => (
            <div key={message.id}>
              <MessageItem
                message={message}
                member={getMember(message.userId)}
              />
            </div>
          ))}
        </List>
      )}
    </div>
  );
}

export default Messages;
