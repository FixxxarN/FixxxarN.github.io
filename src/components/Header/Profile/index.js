import React from "react";
import { ProfileWrapper, TextWrapper } from "./styles";
import Avatar from "./Avatar";
import Title from "./Title";
import Description from "./Description";
import useIsMobile from "../../../hooks/useIsMobile";

const Profile = () => {
  const isMobile = useIsMobile();

  return (
    <ProfileWrapper isMobile={isMobile}>
      <Avatar isMobile={isMobile} />
      <TextWrapper>
        <Title />
        <Description />
      </TextWrapper>
    </ProfileWrapper>
  )
}

export default Profile;