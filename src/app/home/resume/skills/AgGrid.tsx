"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { AgGridColorIcon } from "@/components/icons/AgGridColorIcon";
import { AgGridIcon } from "@/components/icons/AgGridIcon";

export const AgGrid: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="AgGrid"
      description={
        <>
          &quot;The Best JavaScript Grid in the World&quot;
          <br />
          The professional choice for developers building enterprise
          applications.
        </>
      }
      icon={<AgGridIcon />}
      colorIcon={AgGridColorIcon}
      href="https://www.ag-grid.com/"
      {...props}
    />
  );
};
