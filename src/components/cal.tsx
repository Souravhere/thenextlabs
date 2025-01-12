'use client'
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CalEmbed = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      // Configure Cal instance
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="h-fit w-full p-2">
      <Cal
        calLink="the-next-labs/book-a-call"
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          borderRadius: "8px"
        }}
        config={{
          layout: "month_view"
        }}
      />
    </div>
  );
};

export default CalEmbed;