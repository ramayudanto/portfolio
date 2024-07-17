import React from "react";
import Image from "next/image";
import { PortfolioItem } from "@/app/data"; // Adjust the import path as needed

interface PortfolioItemListProps {
  items: PortfolioItem[];
}

const PortfolioItemList: React.FC<PortfolioItemListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3">
      {items.map((item: PortfolioItem) => (
        <div
          key={item["Item ID"]}
          className=""
          style={{
            aspectRatio: "1/1",
            position: "relative",
            margin: "8px 8px 8px 8px",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid #333",
          }}
        >
          {item["img_shot"] ? (
            <Image
              src={item["img_shot"]}
              alt={item.Name}
              fill
              objectFit="cover"
              ></Image>
          ) : item.Video_link ? (
            <video
              src={item.Video_link}
              poster={item["thumbnail url"]}
              className="object-cover w-full h-full"
              muted
              autoPlay
              loop
            />
          ) : (
            <div className="h-[64px] max-w-[1366px] bg-gray-200 flex items-center justify-center">
              No media available
            </div>
          )}
          {/* <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{item.Name}</h2>
            <p className="text-sm text-gray-600 mb-2">
              Created: {new Date(item["Created On"]).toLocaleDateString()}
            </p>
            {item["dribbble_link"] && (
              <a
                href={item["dribbble_link"]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Dribbble
              </a>
            )}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default PortfolioItemList;
