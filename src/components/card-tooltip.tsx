import { IconButton, Tooltip } from "@mui/material";
import { Info } from "@phosphor-icons/react";

type CardTooltipProps = {
  title: string
  href: string
}

export function CardTooltip({ title, href }: CardTooltipProps) {

  return (
    <Tooltip title={title} className="w-fit m-auto">
      <IconButton onClick={() => window.open(href, '_blank')}>
        <Info />
      </IconButton>
    </Tooltip>
  );
}
