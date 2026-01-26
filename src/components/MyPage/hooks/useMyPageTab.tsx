import { useState } from "react";

export type MyPageTabType = "activity" | "creator";

export const useMyPageTab = () => {
  const [activeTab, setActiveTab] =
    useState<MyPageTabType>("activity");

  const isActivityTab = activeTab === "activity";
  const isCreatorTab = activeTab === "creator";

  return {
    activeTab,
    setActiveTab,
    isActivityTab,
    isCreatorTab,
  };
};
