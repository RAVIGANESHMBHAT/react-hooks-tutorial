import React, { useContext } from "react";

import { UserContext, ChannelContext } from "../App";

function ComponentC() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      Name = {user} & Channel = {channel}
    </div>
  );
}

export default ComponentC;
