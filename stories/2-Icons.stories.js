import React from "react";

import * as Icons from "../components/icons";
import Photo from "../components/photo";
import ProfileBox from "../components/profile-box";

export default {
  title: "Icons",
};

export const Icon = () => (
  <div className="icons">
    <Icons.ArrowBottom />
    <Icons.Bookmarks />
    <Icons.BookmarksFill />
    <Icons.Calendar />
    <Icons.Comment />
    <Icons.Emoji />
    <Icons.Explore />
    <Icons.ExploreFill />
    <Icons.Gif />
    <Icons.Home />
    <Icons.HomeFill />
    <Icons.Image />
    <Icons.Like />
    <Icons.Lists />
    <Icons.ListsFill />
    <Icons.Messages />
    <Icons.MessagesFill />
    <Icons.More />
    <Icons.Notifications />
    <Icons.NotificationsFill />
    <Icons.Profile />
    <Icons.ProfileFill />
    <Icons.Quiz />
    <Icons.Retweet />
    <Icons.Search />
    <Icons.Settings />
    <Icons.Share />
    <Icons.Tweet />
    <Icons.TweetOrder />
    <Icons.Twitter />
  </div>
);

export const ProfilePhoto = () => <Photo />;

export const Box = () => <ProfileBox />;
