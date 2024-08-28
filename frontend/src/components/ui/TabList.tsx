"use client";
import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  badge?: string;
}

interface TabListProps {
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
  defaultActiveTab?: string;
  actions?: React.ReactNode;
}

const TabList: React.FC<TabListProps> = ({
  tabs,
  onTabChange,
  defaultActiveTab,
  actions,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || tabs[0].id
  );

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between border-b border-gray-200">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`py-4 mr-6 font-medium text-md flex items-start ${
                activeTab === tab.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {tab.badge && (
                <span className="ml-1 px-1 py-0.5 text-[0.625rem] font-semibold rounded-full bg-gray-200 text-gray-800 leading-none">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
        {actions}
      </div>
    </div>
  );
};

export default TabList;
