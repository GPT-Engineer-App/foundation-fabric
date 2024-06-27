import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Editor } from "@tinymce/tinymce-react";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const menuItems = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5"];

  return (
    <div className="flex h-screen">
      {/* Section 1: Left Sidebar */}
      <div className="w-1/6 h-full bg-gradient-to-r from-green-400 to-green-800 bg-opacity-50 backdrop-blur-md p-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`h-1/5 flex items-center justify-center cursor-pointer ${
              selectedMenu === index ? "bg-green-800" : ""
            }`}
            onClick={() => setSelectedMenu(index)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex flex-col w-5/6">
        {/* Section 2: Top Bar */}
        <div className="h-1/10 bg-white bg-opacity-50 backdrop-blur-md p-4">
          Top Bar
        </div>

        {/* Section 3: Main Content */}
        <div className="flex-1 bg-white p-4">
          <Editor
            apiKey="your-tinymce-api-key"
            init={{
              height: "100%",
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;