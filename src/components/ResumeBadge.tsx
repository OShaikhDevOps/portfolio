"use client";

import React from "react";
import { Badge, Row, Icon } from "@once-ui-system/core";

type Props = {
  href: string;
  filename?: string;
};

export default function ResumeBadge({ href, filename = "resume.pdf" }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const a = document.createElement("a");
      a.href = href;
      a.download = filename;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      // fallback: navigate
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Badge
      background="brand-alpha-weak"
      paddingX="12"
      paddingY="4"
      onBackground="neutral-strong"
      textVariant="label-default-s"
      arrow={false}
      href={href}
      onClick={handleClick}
    >
      <Row paddingY="2" gap="8" vertical="center">
        <Icon name="document" onBackground="brand-weak" />
        <span>Download Resume</span>
        <Icon name="chevronRight" onBackground="brand-weak" />
      </Row>
    </Badge>
  );
}
