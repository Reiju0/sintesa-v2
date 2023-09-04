import React from "react";

const SelectData = () => {
  return (
    <>
      <div className="hidden">
        <div className="flex flex-col px-2 py-4 overflow-y-auto text-sm rounded-lg shadow-lg max-h-36 text-foreground bg-default-100">
          <div className="flex px-2 py-1 rounded hover:bg-default-200">
            # Heading 1
          </div>
          <div className="flex px-2 py-1 rounded hover:bg-default-200">
            ## Heading 2
          </div>
          <div className="flex px-2 py-1 rounded hover:bg-default-200">
            ### Heading 3
          </div>
          <div className="flex px-2 py-1 rounded hover:bg-default-200">
            #### Heading 4
          </div>
          <div className="flex px-2 py-1 rounded hover:bg-default-200">
            #### Heading 5
          </div>
          <div className="flex px-2 py-1 rounded hover:bg-default-200">
            #### Heading 6
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectData;
